const firebaseConfig = {
    apiKey: "AIzaSyCWx6pUuPnJHtcXucaii2_Hx2e7uk0WDgc",
    authDomain: "watchwebsite-6048a.firebaseapp.com",
    databaseURL: "https://watchwebsite-6048a-default-rtdb.firebaseio.com",
    projectId: "watchwebsite-6048a",
    storageBucket: "watchwebsite-6048a.firebasestorage.app",
    messagingSenderId: "929566053943",
    appId: "1:929566053943:web:4ae8060f46353651ea51b2"
  };
  // Initialize Firebase
   app = firebase.initializeApp(firebaseConfig);
  var db = firebase.database();
  function saveData(event) {

  


    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message").value;

    if(!name || !email || !password || !message){
        alert("All fields are required");
        return;
    }
var userObj = {
    userName : name,
   userEmail :email,
 userPassword : password,
 userMessage : message 
};
db.ref("users").push(userObj)
.then(() => {
    console.log("message sent succesfully");
    document.getElementById("contactForm").reset();
    
})
.catch((error) => {
    console.error("Error saving data: ", error);
    alert("Error sending message");
});
 
}

  document.getElementById("contactForm").addEventListener("submit", saveData)