const firebase = require('firebase-admin');

firebase.initializeApp({
  credential: firebase.credential.cert('wait-list-66f15-firebase-adminsdk.json'),
});


async function getDocuments(){

const db = firebase.firestore();
const contactRef = await db.collection("contacts");


  try{
    contactRef.get()
    .then(snapshot => {

      if(snapshot.size == 0 || snapshot.size == '' || snapshot.size == null){
        console.log('no documents are found in contacts')
      } else{
        console.log('deleteing documents from firestore database')
        snapshot.forEach(doc => doc.ref.delete());
      }
      console.log('done')
    })
    .catch(error => {
      console.error("Error deleting documents: ", error);
    });
  } catch(err){
    console.log('error occured: ' + err)
  }

}


getDocuments();