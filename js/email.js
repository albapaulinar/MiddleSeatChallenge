function signup () {

if(signupForm.email.value.toLowerCase() == "example@domain.com") {
  alert('Please enter your real email.');
  signupForm.email.focus();
  return false;
}

if (signupForm.email.value == "") {
  alert('Please enter your email.');
  signupForm.email.focus();
  return false;
}

var format = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if (format.test(signupForm.email.value) == false) {
  alert('Please enter a correct format of your email.');
  signupForm.email.focus();
  return false;
}

window.open("joinlandingpage.html");
}
