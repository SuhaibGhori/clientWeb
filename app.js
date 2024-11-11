
var firebaseConfig = {
  apiKey: "AIzaSyCWx6pUuPnJHtcXucaii2_Hx2e7uk0WDgc",
  authDomain: "watchwebsite-6048a.firebaseapp.com",
  projectId: "watchwebsite-6048a",
  storageBucket: "watchwebsite-6048a.firebasestorage.app",
  messagingSenderId: "929566053943",
  appId: "1:929566053943:web:4ae8060f46353651ea51b2"
};
var app = firebase.initializeApp(firebaseConfig);

function signup() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name && email && password) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
              var user = userCredential.user;
              console.log("User created:", user);
              window.location.href = "index2.html";
          })
          .catch((error) => {
              var errorMessage = error.message;
              console.log("Error:", errorMessage);
              alert("Error: " + errorMessage);
          });
  } else {
      alert("Please fill in all fields");
  }
}






function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });}
    





    function validateForm() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
      
        if (!name || !email || !message) {
          alert("Please fill in all the fields.");
          return false;
        }
        if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return false;
        }
        alert("Message sent successfully!");
        return true;
      }
      
      function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }