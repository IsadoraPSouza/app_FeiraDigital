import { ReactNativeFirebase } from "@react-native-firebase/app";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBDUz-1Q0mCZoldApvybMEEIFRo5sudsj4",
  authDomain: "ofairta-cbcff.firebaseapp.com",
  databaseURL: "https://ofairta-cbcff-default-rtdb.firebaseio.com",
  projectId: "ofairta-cbcff",
  storageBucket: "ofairta-cbcff.appspot.com",
  messagingSenderId: "166321249867",
  appId: "1:166321249867:web:d6a811aa6f1cce001db7ce",
  measurementId: "G-9TX1718WM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

export default firebase