import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confic";
const initializeAuthentication=()=>{
   return initializeApp(firebaseConfig);
}
export default initializeAuthentication;