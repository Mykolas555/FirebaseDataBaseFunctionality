import { app } from "./firebase.js";
import { getFirestore, doc, setDoc, addDoc, collection, getDoc, getDocs, updateDoc, 
        deleteDoc, } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 
const db = getFirestore(app);
 
console.log(db);
 
const setinam = async () => {
  await setDoc(doc(db, "users", "1"), {
    name: "jonas",
    email: "jonaitisEtaGmail.com",
    age: 35,
    row: "admin",
  })
    .then(() => {
      alert("viskas prideta");
    })
    .catch((err) => {
      console.log(err);
    });
};
 
//setinam();
 
const addinam = async () =>
  await addDoc(collection(db, "users"), {
    name: "migle",
    email: "migleEtaGmail.com",
    age: 15,
    row: "simple",
  })
    .then(() => {
      alert("viskas prideta");
    })
    .catch((err) => {
      console.log(err);
    });
 
//addinam();
 
const getinamViena = async () => {
  const docSnap = await getDoc(doc(db, "users", "Jo1bCcb7NyJLyvgwMvWa"));
  console.log(docSnap);
};
 
//getinamViena();
 
const getAll = async () => {
  const snap = await getDocs(collection(db, "users"));
  snap.forEach((el) => console.log(el.data()));
  const arr = [];
  snap.forEach((el) => arr.push(el.data()));
  console.log(arr);
};
 
//getAll();
 
const updateitinam = async () => {
  await updateDoc(doc(db, "users", "Jo1bCcb7NyJLyvgwMvWa"), {
    age: 3666,
  })
    .then(() => {
      alert("irasas pakeistas");
    })
    .catch((err) => {
      console.log(err);
    });
};
 
//updateitinam();
 
const deletinam = async () => {
  await deleteDoc(doc(db, "users", "Jo1bCcb7NyJLyvgwMvWa"))
    .then(() => {
      alert("istrintas");
    })
    .catch((err) => {
      console.log(err);
    });
};
 
//deletinam();