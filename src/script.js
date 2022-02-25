function showForm() {
  var data =
    "<h2>Register New Account</h2><input type='text' id='id1' name='name' placeholder='Name'><input type='text' name='lname' id='id2' placeholder='Last Name'><br><input type='text' name='fullname' placeholder='Name'><br><input type='text' name='city' placeholder='city'><br><input type='text' name='number' placeholder='Phone number'><br><input type='email' name='email' placeholder='E-mail'><br><input type='submit' name='submit' placeholder='Create'>";
  document.getElementById("output").innerHTML = data;
}
