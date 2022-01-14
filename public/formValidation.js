let signIn = document.getElementById('inlogButton');
// let username = document.getElementById('username');
let test = document.getElementsByClassName('test');

signIn.addEventListener('click', function () {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["password"].value;
    if (x == "") {
        // alert("Name must be filled out");
        document.getElementById('test').style.color="red";
        // return false;
    } else if (y == "") {
        // alert("password must be filled out");
        // return false;
    } else return false;

});