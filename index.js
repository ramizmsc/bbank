import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore,collection,getDocs,getDoc,addDoc,setDoc,doc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyC5Rh9iGylNdRD5ks4oJQfQHyWuWepFui4",
    authDomain: "firestore-blood-bank.firebaseapp.com",
    projectId: "firestore-blood-bank",
    storageBucket: "firestore-blood-bank.appspot.com",
    messagingSenderId: "209810206074",
    appId: "1:209810206074:web:bb864b55d787ae350b3ac3",
    measurementId: "G-EK7F4F2N1F"
};
const firebaseApp = initializeApp(firebaseConfig);

//const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const todosCol = collection(db,'bbank');
const docRef = doc(db, "bbank");

const snapshot = await getDocs(todosCol);
const cityList = snapshot.docs.map(doc => doc.data());
console.log(cityList);

// const data = {
//     name: "Ottawa",
//     group: "ON"
// };
//
// setDoc(docRef, data)
//     .then(() => {
//         console.log("Document has been added successfully");
//     })
//     .catch(error => {
//         console.log(error);
//     })

try {
    const docRef = await addDoc(collection(db,'bbank'), {
        name: "Ada1",
        group: "C+"
    });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}

console.log(cityList);