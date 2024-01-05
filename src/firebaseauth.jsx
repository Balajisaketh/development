import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// httpss://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL-DUcc15ezVeM0VP9NgMZtZpk4knasOs",
  authDomain: "balaji-95abd.firebaseapp.com",
  projectId: "balaji-95abd",
  storageBucket: "balaji-95abd.appspot.com",
  messagingSenderId: "916481209722",
  appId: "1:916481209722:web:aabcfc8315ad9b5e1d52c3",
  measurementId: "G-5WVVD4D400"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
