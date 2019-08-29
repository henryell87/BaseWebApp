function handelSignIn(){
  var provider = new firebase.auth.GoogleAuthProvider();
}
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user.email);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

function addMessage(postTitle, postBody){
var postData = {
  title:postTitle,
  body:postBody
  }
  var database = firebase.database().ref("posts");
  var newPostRef = database.push();
  newPostRef.set(postData)
  
}

function handelMessageFormSubmit(){
  var postTitle = $("post-title").val();
  var postBody = $("post-body").val();
  addMessage(postTitle,postBody);
  console.log(postTitle);
}