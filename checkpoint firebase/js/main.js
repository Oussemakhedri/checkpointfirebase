
  var config = {
    apiKey: "AIzaSyDqlrBqmUVCpd6VwWdtVgMNdhzVH_r3mJQ",
    authDomain: "the-project-ac4c3.firebaseapp.com",
    databaseURL: "https://the-project-ac4c3.firebaseio.com",
    projectId: "the-project-ac4c3",
    storageBucket: "the-project-ac4c3.appspot.com",
    messagingSenderId: "345035780214"
  };
  firebase.initializeApp(config);

document.getElementById('myform').addEventListener('submit',formsubmit);
      
function formsubmit(e) {

 e.preventDefault();
 var firstname =getInputValue('firstname');
 var lastname =getInputValue('lastname');
 var age =getInputValue('age');
 var num =getInputValue('num');

 save(firstname,lastname,age,num);
}

    
function save(firstname,lastname,age,num){
    var messageref =firebase.database().ref('coordonnees');
  var  newMessageref=messageref.push();
    
    newMessageref.set({

            firstname:firstname,
            lastname:lastname,
            age:age,
            num:num
    }).then(()=>{console.log('succeeded')});
}

function getInputValue(id){

    var value=document.getElementById(id).value;
    
    return value;

}

