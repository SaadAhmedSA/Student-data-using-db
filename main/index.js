import {db} from "./firebase.js"
import{collection,addDoc,serverTimestamp,query ,orderBy,onSnapshot} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"


let Student = document.getElementById("input")
let Age = document.getElementById("Age")
let Course = document.getElementById("select")
let gender = document.getElementById("gender")
let btn = document.getElementById("btn")

let no=0

btn.addEventListener("click", async()=>{   
  let Rollno = Math.floor(Math.random()*9000)+1000
  console.log(Rollno);
  try {
    
    
    const docRef = await addDoc(collection(db, "Student"), {
   
      Student:Student.value ,
      Age:Age.value ,
      gender:gender.value ,
      Rollno:Rollno,
      Course:Course.value,
      Posttime :serverTimestamp(),
    }); 
    console.log("Document written with ID: ", docRef.id);
    foo()
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  Student.value=""
  Course.value=""
  gender.value=""
  Age.value=""
})  
 async function foo(){ 

   
  const ref = query(collection(db, "Student"),orderBy("Posttime","asc") );
  let table = document.getElementById("data")
  
  const unsubscribe = onSnapshot(ref, (querySnapshot) => {
    table.innerHTML=""
    querySnapshot.forEach((doc) => {
      table.innerHTML +=`
     <tr>
      
      <td>${doc.data().Student}</td>
      <td>B-${doc.data().Rollno}</td>
      <td>${doc.data().Course}</td>
      <td>${doc.data().Age}</td>
      <td>${doc.data().gender}</td></tr>
      `
    
      
      
    });
    
  })
}
foo()
  
  
    
   


