const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const pgp = require("pg-promise")();
require('dotenv').config();
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/",express.static("uploads"))
const md5=require('md5')
const uuid = require('uuid').v4;
app.use(express.json())
const jwt = require('jsonwebtoken');
const {Client}=require("pg")
const path=require('path');
// const {upload} =require('.././backend/Multer');
const multer = require("multer");
const index = require('uuid-random')
const { sendmail } = require('./Mailer'); 
const storage = multer.diskStorage({
    destination: function (req,res,cb){
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: function (req,file,cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        cb(null,filename + "-" + uniqueSuffix + ".png");
    },
});

const upload = multer({storage: storage});
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'shopping',
  password: '1234',
  port: 5432, 
});


// Use the db object to execute the test query

const db = pgp(client);

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// app.use((req, res, next)=>{

//   if(req.url ==='/register' || req.url ==='/login'){
//       next();
//   }else{
//      const authHeader = req.headers["authorization"];
    
//      if(authHeader){
//           const token = authHeader.split(' ')[1];

//           if(token){
//               jwt.verify(token,secretkey,(err, decoded)=>{
//                   if(err){
//                       if(err&&err.message && err.message === "jwt expired"){
//                           res.status(401).json({error:"conflict",errorDescription:"token expired"})
//                       }else{
//                           res.status(403).json({errorDescription:"invalid token"})
//                       }
                   
//                   }else{
//                       req.user= decoded;
                      
//                       next(); /// must 
//                   }
//               }) 
//           }else{
//               res.status(401).json({errorDescription:" no token"})
//           }
//      }else{
//       res.status(401).json({errorDescription:"no authHeader"})
//      }
          

//   }
// }) 

app.post('/register',(req,res)=>{
  
  
    
    const data=req.body;
  console.log(data,"i m database");
     
 const passworddata=data.password;
    const email=data.email; 
    console.log(passworddata,email,"w e are here");
   
    const salt =  (Math.random() + 1).toString(36).substring(7);
    const password =md5(passworddata+salt)
    
    const querydata = {
      text:  `SELECT * FROM users	 
     WHERE email =$1`,  
      values : [email] 
    }
    client.query(querydata).then((data)=>{ 

                
            if (data.rows.length>0) {     
              res.json("email already exists")
              
            }   
             else{
              console.log("entered here")
              const queryData = {
                text: `INSERT INTO users (email,password_hash,salt)
                              VALUES($1,$2,$3) RETURNING *`,
              values: [email,password,salt],
              }
          
              client.query(queryData).then((newdata)=>{ 
              console.log(newdata,'li mq ');
             
              res.json({success:true,message:"insert successful"})

         

        
                }).catch((err)=>{
                  console.log(err,'uo mq ');
                }).catch((err)=>{
                  console.log(err,'in outline')
                });
          }
    })
    // WIth
  })    
  app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    console.log("body",req.body)
    const query = {
      text:  `SELECT * FROM users	 
     WHERE email =$1`,
      values : [username] }

      client.query(query).then((data)=>{ 
        const userData = data.rows;
         console.log("i am chekibg",userData[0].salt);
         const salt=userData[0].salt;
         const secretKey = process.env.secretKey;
         const tokenData ={email: userData[0].email,salt:userData[0].salt};
         const token = jwt.sign(tokenData,secretKey,{expiresIn:'3h'})
        
         const passwordh=md5(password+salt)
         console.log(passwordh,userData[0].password_hash,"we are same hck");
             
           if (passwordh === userData[0].password_hash) {
           //    const tokenData:any ={useruid:userData.useruid,username:userData.username,companyname:userData.companyname,companyuid:userData.companyuid,type:userData.type,email: userData.email };
           //  const token = jwt.sign(tokenData,secretkey,{expiresIn:'3h'})
           
             
             // res.send({token:token,status:"success",message:"login successful",type:userData.type,username:userData.username })
             res.send({status:"success",message:"login successful",token:token})

             console.log({ status:"success",message:"login successful" })
           } else { 
             res.send({status:"Incorrect",message:"failed"})
             console.log({status: "Incorrect",message:"failed"}) 
           }
             
    }).catch((error) =>{ 
     res.send({status: "notfound",message:"failed"})
     console.log({status: "notfound",message:error.message})
    }) 
   
  
  })
app.post('/addproduct', (req,res) => {
  
    const productname=req.body.productname
    const price= req.body.price
    const category=req.body.category
    const imgpath=req.body.imgpath
    const brand=req.body.brand
    let description=req.body.description
    console.log("brand",brand)
    const cloudFrontUrl = 'https://d3mquo2i52s67z.cloudfront.net'+'/'+imgpath.split("/").pop();
    console.log(cloudFrontUrl,"i m url")
    const insertquery= {
      text: `INSERT INTO products (name,description,price,category,brand,imagepath) 
                        VALUES($1, $2, $3,$4,$5,$6) RETURNING *`,
      values : [productname,description,price,category,brand,cloudFrontUrl]
    }
    client.query(insertquery).then((data)=>{ 
      
      console.log({status:true, message:" data inserted successfully"})
      res.send("done inserted successfull")
    }).catch((error) =>{ 
      console.log(error,"i am error")
      // console.log({status: false,message:error.message})
      res.send({status: false,message:"failed"}) 
    }) 

})
app.post("/insertusers",(req,res)=>{
  const formData = req.body;
  const name=formData.fullname;
  const email=formData.email;
  const phno=formData.phonenumber;
  const country=formData.country;
  const addres=formData.addres1.concat(formData.address2);
  const state=formData.state;
  const custid=uuid()
  const insertquery= {
    text: `INSERT INTO customers (fullname,email,phone_number,address,country,state,customer_id) 
                      VALUES($1, $2,$3,$4,$5,$6,$7) RETURNING *`,
    values : [name,email,phno,addres,country,state,custid,]
  }
  client.query(insertquery).then((data) => {
    console.log(data,"i m done")
    res.send({status:true, message:"insert successfully"});

  } ).catch((err) => {
    console.error(err,"i m error")
    res.send({status:true, message:err});
  });
})

app.post("/returns",(req,res)=>{
  const productname=req.body.productname
    const price= req.body.price
    const imgpath=req.body.imgpath
    const date=new Date();
    const qua=req.body.quantity
    console.log(productname,price,date,qua,imgpath,"i am data here in returns");
    const insertquery= {
      text: `INSERT INTO return_table (product_name,quantity,price,return_date,product_url) 
                        VALUES($1, $2,$3,$4,$5,$6) RETURNING *`,
      values : [productname,qua,price,date,imgpath]
    }
    client.query(insertquery).then((data) => {
      console.log(data,"i m done")
      res.send({status:true, message:"return placed"});
  
    } ).catch((err) => {
      
      res.send({status:true, message:err});
    });



})
app.get("/getreturns",(req,res)=>{
  console.log("i am request",req.body)
  const qry={
    text:"SELECT * from return_table"
  }
  client.query(qry).then((data) => {
    console.log(data,"i m done")
    res.send({message:data});

  } ).catch((err) => {
    
    res.send({status:true, message:err});
  });

})
app.delete('/api/orders/:uid/:orderid', async (req, res) => {
  const { uid, orderid } = req.params;
console.log("i am retuns delete",uid,orderid);

    // const insertquery= {
    //   text: `DELETE FROM ordersdetails (uid,orderid) 
    //                     VALUES($1, $2) RETURNING *`,
    //   values : [uid,orderid]
    // }
    const insertquery = {
      text: 'UPDATE orders SET return_table = array_remove(your_json_array_column, jsonb_build_object(\'orderid\', $1)) WHERE uid = $2 RETURNING *',
      values: [orderid,uid],
    };
    
    client.query(insertquery).then((data) => {
      console.log(data,"i m done")
      res.send({status:true, message:"removed sucessfully"});
  
    } ).catch((err) => {
      
      res.send({status:true, message:err});
    });


   
});
app.get('/getproducts',(req,res) => {
    const getqury=`SELECT * FROM products`
      
  client.query(getqury).then((data) => {

    res.json(data)

  } ).catch((err) => {
    console.error(err,"i m error")
    res.send({status:true, message:err});
  });
  

  
})
app.put('/updateproduct/:prodid',(req,res)=>{
  console.log("i am updted check me bby")
     const prodid=req.params.prodid;
     console.log(prodid,"i am prod id")
     
  const { price, name } = req.body;
  console.log("ia m price body",name,price)

       const qry={
        text:"Update products  SET name=$1, price=$2 where uid=$3",
        values:[name,price,prodid]
       }
       client.query(qry).then((resp)=>{

        res.json({status:true,message:"updated succesfully"})
       }).catch((err)=>{
        console.log(err,"i am failed error")
          res.json({status:false,message:"update failed"})
       })
})
app.delete('/deleteproduct/:prodid',(req,res)=>{
  console.log("i am updted check me bby")
     const prodid=req.params.prodid;
     console.log(prodid,"i am prod id")
     
  const { price, name } = req.body;
  console.log("ia m price body",name,price)

       const qry={
        text:"delete from products where uid=$1",
        values:[prodid]
       }
       client.query(qry).then((resp)=>{

        res.json({status:true,message:"deleted succesfully"})
       }).catch((err)=>{
        console.log(err,"i am failed error")
          res.json({status:false,message:"delete failed"})
       })
})
app.post('/getbycategory', (req, res) =>{
const category =req.body.category.toString().toLowerCase()
console.log(category,"in bakcend of grt by")  
let querydata=`SELECT * FROM products WHERE category='${category}'`
// let querydat1=`SELECT brand.brandname,products.* FROM brand INNER JOIN products ON brand.category ='${category}'` 
  client.query(querydata).then((data)=>{ 
    
    res.send(data.rows)
  }).catch((error) =>{ 
    console.log(error,"i am error")
    // console.log({status: false,message:error.message})
    res.send('failed') 

  }) 

})
app.post('/deleteusers', (req,res)=>{ 
  
  let useruid =req.body.useruid;
  const query = {text :`DELETE FROM users WHERE useruid = $1 RETURNING *`,values:[useruid]}
        client.query(query).then((data)=>{ 
          console.log({status:true, message:" data deleted successfully",data:data.rows[0]})
            res.send({status:true, message:" data deleted successfully",data:data.rows[0]});

        
        }).catch((error) =>{
       console.log(error,"i m err")
          console.log("failed",error)
        res.send({status: false,message:"failed"}) 
        }) 
                
})           
// app.post('/addorders', (req, res) => {


//   let orderid=req.body.uid  
//   let orderamount=req.body.orderamount
//   let quantity=req.body.quantity
//   let orderstatus=req.body.orderstatus
//   let productid=req.body.productid
//   let customerid=req.body.customerid
//   const insertquery= {
//     text: `INSERT INTO orders (orderid,orderamount,orderstatus,productid,customerid,quantity)  
//                       VALUES($1, $2, $3,$4,$5,$6) RETURNING *`,
//     values : [orderid,orderamount,orderstatus,productid,customerid,quantity]
//   }
//       client.query(insertquery).then((data)=>{ 
//       console.log({status:true, message:" data inserted successfully"})
      
//       res.send('success')
//     }).catch((error) =>{ 
//       console.log(error,"i am error")
//       // console.log({status: false,message:error.message})
//       res.send({status: false,message:"failed"}) 
//     }) 
// })
async function generateUniqueOrderId() {
  let isUnique = false;
  let uniqueId;

  while (!isUnique) {
    // Generate a new order ID
    uniqueId = Math.floor(100000 + Math.random() * 900000);

    // Check if the order ID already exists in the database
    const result = await client.query('SELECT COUNT(*) FROM orderdetails WHERE orderid = $1', [uniqueId]);

    isUnique = result.rows[0].count === 0;
  }

  return uniqueId;
}

app.post("/addorders", async (req, res) => {
  console.log(req.body,"i am check me now")
  // const uniqueId = Math.floor(100000 + Math.random() * 900000);
  const uniqueId=await generateUniqueOrderId();
  console.log("i am here",uniqueId);   
  try {
    const proddata =req.body.proddata; 
    const name=req.body.fullname;
    const price=req.body.price;
    const email=req.body.email;
    const phno=req.body.phonenumber;
    const address=req.body.address1;
    const address2=req.body.address2;
    
    const fulladdress=address+address2;
    
     // Assuming the request body contains a single product object
console.log(name,email,"i am req body")
const ch={
  text:"INSERT INTO orderdetails (orderid,your_json_array_column,email,name,phonenumber,address,price,date) VALUES ($1,($2::jsonb),$3,$4,$5,$6,$7,$8)",
  values: [uniqueId,JSON.stringify(proddata),email,name,phno,fulladdress,price,new Date()]
}

   client.query(ch).then((respp)=>{

    console.log("i am inserted",respp)
        
    // make your payment here after inserting
    // and send mail of the order id to customer 
    sendmail(email,uniqueId)
    res.send({status:true,message:"order placed sucessfully"})
   }).catch((er)=>{
    console.log("a mfai;ed",er)
    res.send({status:true,message:"order unsuccess"})
   })
  
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while inserting the product" });
  }
});
// get order based on orderid working
app.get("/getordersbyorderid/:orderid",(req,res)=>{
        const orderid=req.params.orderid;
        console.log("i am ordrid",orderid)
        const quotedOrderid ='"'+ orderid+'"';

        console.log("i am chek",quotedOrderid)
        const querydata = {text :`SELECT * FROM orderdetails WHERE orderid = $1`,values:[orderid.trim()]}
        client.query(querydata).then((data) => {
          console.log("i am rows",data.rows)
          res.send(data.rows)
        }).catch((err) => {
          console.log(err,"i am inside error");
        });
})

app.post('/updateprice',(req,res) => {
  let uuid = req.body.uid
  console.log(uuid,"i m uid")
  const querydata = {text :`SELECT * FROM products WHERE uid = $1`,values:[uuid]}
  client.query(querydata).then((data) => {
    console.log('entered',data.rows[0])
    let price=req.body.price
    const pricequery = {
      text:`UPDATE products SET 
      price=$2
      WHERE uid=$1 RETURNING *`,
      values : [uuid,price]
   }
   client.query(pricequery).then((data)=>
   {
       res.send('updated'); 
   }).catch((err)=>
   {
           res.send("update success")
   })
 
  }).catch(err => {
    console.error(err,"in first attempt")
  })
})
app.post('/transactions',(req,res) => {
  let data = req.body
  const transactionid=data.useruid;
  const transactionamount=data.amount
  console.log("i am amoht",transactionamount);
  const insertquery= {
    text: `INSERT INTO payments (transactionid,transactionamount) 
                      VALUES($1, $2) RETURNING *`,
    values : [transactionid,transactionamount]
  }
  client.query(insertquery).then((data) => {
    console.log(data,"i mdatabase");
    const joinqry={
      text:'SELECT * FROM users CROSS JOIN payments'
      
    }
    client.query(joinqry).then((data) => {
      console.log(data,"cross");
      res.send(data);
    }).catch((err) => {
      console.log(err,"i am inside error");
    });
  }).catch((err) => {
    console.error(err,"in the transaction");
  });
 
  });
app.post('/getusers', (req, res) => {
  let query = 'select * FROM users limit 10';
  const offset = req.body.offset
  if(offset){
    query = 'select * FROM users limit 10 offset ' + offset;
  }
  client.query(query).then((users) => {
    res.send(users.rows);
  }).catch((err) => {
    console.error(err,"in the getusers");
  });
})
app.post('/searchbyname', (req, res) =>{
  const name =req.body.username;
  console.log(name,"i am a user");
  const querydata = `SELECT * FROM orderdetails u WHERE UPPER(u.name) LIKE UPPER('%${name}%')`
    console.log(querydata,'hureey')
    client.query(querydata).then((data)=>{ 
     
       console.log(data.rows,"i m data")
       res.send(data.rows);
       
    })
  .catch((error) =>{
      console.log(error,"i am error here")
      // console.log({status: false,message:error.message})
      res.send('failed here') 
    });
  
  });
app.get('/cusorders/:id',((req,res) => {
  const qry=`SELECT * From orders O ,products p WHERE o.productid=p.uid and customerid='${req.params.id}'`
  client.query(qry).then((data)=>{
    console.log(data,"i m data")
    res.json(data.rows)
  }).catch((error) =>{
    console.log(error,"i am error")
  })
}))

app.get('/cusorders/:id/:status',((req,res) => {
  const qry=`SELECT * From orders O ,products p WHERE o.productid=p.uid and customerid='${req.params.id}' and O.orderstatus='${req.params.status}'`
  client.query(qry).then((data)=>{
    console.log(data,"i m data")
    res.json(data.rows)
  }).catch((error) =>{
    console.log(error,"i am error")
  })
}))
app.get('/getallorders',((req,res)=>{
  console.log("i am entered");
  const qry={
    text:'select * from orderdetails'
  }
  client.query(qry).then((data)=>{
    console.log(data,"i m data")
    res.json(data.rows)
  }).catch((error) =>{
    console.log(error,"i am error")
  })

}))
app.post('/api/getbrand',(req,res)=>{
  const category=req.body.category
  console.log(category,"i m category")
  const qry={
  
    
    text:`SELECT DISTINCT brand FROM products WHERE category = '${category}'`
  }
  client.query(qry).then((respdata)=>{
    const all=[{brand:"All"}]
  res.send(respdata.rows.concat(all));
    
  })
})
app.post('/api/getbybrand',(req,res)=>{
  const category=req.body.category
  const brand=req.body.brand
  console.log(category,brand,"i m category")
  const qry={
  
    
    text:`SELECT DISTINCT brand FROM products WHERE category = '${category}' AND brand = '${brand}'`
  }
  client.query(qry).then((respdata)=>{
    
  res.send(respdata);
    
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})