import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBTFspvjf5QGCPJ3Qy_bEyd9pIbSXOWJ3I",
    authDomain: "dixre-assessment-fd868.firebaseapp.com",
    projectId: "dixre-assessment-fd868",
    storageBucket: "dixre-assessment-fd868.appspot.com",
    messagingSenderId: "644920186701",
    appId: "1:644920186701:web:0394971c510ff8faf40904",
    measurementId: "G-HV53FD6R5E"
    /* apiKey: "AIzaSyCRzEybUFPWSQ9lhWF5ZjcsEKrhJ7IMxQY",
    authDomain: "dixre-assessment.firebaseapp.com",
    projectId: "dixre-assessment",
    storageBucket: "dixre-assessment.appspot.com",
    messagingSenderId: "36320288445",
    appId: "1:36320288445:web:95c624421ec32ff9c661d4",
    measurementId: "G-2NL6N20B7N" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);