window.onload = function() {
  document.getElementById("password").addEventListener("keydown", keyDownRecord);
  document.getElementById("password").addEventListener("keyup", keyUpRecord);
}

var db = firebase.database();

var passwordTimes = [];
var currentKey = [];

function keyDownRecord(e) {
  if (e.key != 'Enter' && e.key != 'Tab') {
    currentKey = [e.key, e.timeStamp];
  }
}

function keyUpRecord(e) {
  if (e.key != 'Enter' && e.key != 'Tab') {
    currentKey.push(e.timeStamp);
    passwordTimes.push(currentKey);

    currentKey = [];
  }
}

function sendPasswordToDB() {
  var dataRef = db.ref("loginData");
  dataRef.set(passwordTimes);
}

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var myPasswordVector = [56.30999995628372, 59.999999997671694, 48.03499998524785, 44.05500000575557, 48.00000000977889, 52.100000029895455];

  if (username == "carlos" && password == "garcia") {

    sendPasswordToDB();

    alert ("Login successfull");
    return false;
  }
  else {
    alert ("Login unsuccessfull");
    return false;
  }
}
