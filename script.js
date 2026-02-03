document.getElementById("admissionForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let dob = document.getElementById("dob").value;
let course = document.getElementById("course").value;
let address = document.getElementById("address").value.trim();
let photo = document.getElementById("photo").value;

let gender = document.querySelector('input[name="gender"]:checked');

document.querySelectorAll(".error").forEach(e => e.textContent = "");
document.getElementById("successMsg").textContent = "";

let isValid = true;

if(name === "") {
document.getElementById("nameError").textContent = "Name is required";
isValid = false;
}

if(email === "" || !email.includes("@")) {
document.getElementById("emailError").textContent = "Valid email required";
isValid = false;
}

if(phone.length !== 10) {
document.getElementById("phoneError").textContent = "Enter 10 digit phone number";
isValid = false;
}

if(dob === "") {
document.getElementById("dobError").textContent = "Select your DOB";
isValid = false;
}

if(!gender) {
document.getElementById("genderError").textContent = "Select gender";
isValid = false;
}

if(course === "") {
document.getElementById("courseError").textContent = "Choose a course";
isValid = false;
}

if(address === "") {
document.getElementById("addressError").textContent = "Enter address";
isValid = false;
}

if(photo === "") {
document.getElementById("photoError").textContent = "Upload your photo";
isValid = false;
}

if(isValid){
document.getElementById("successMsg").textContent =
"🎉 Application Submitted Successfully!";
document.getElementById("admissionForm").reset();
}
});
