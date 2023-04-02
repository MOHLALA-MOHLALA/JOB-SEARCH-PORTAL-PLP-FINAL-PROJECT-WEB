const tabs = document.querySelectorAll('.dashboard ul li');
const tabContents = document.querySelectorAll('.dashboard-tab');

tabs.forEach((tab, index) => {
tab.addEventListener('click', () => {
// Remove active class from all tabs
tabs.forEach((tab) => {
tab.classList.remove('active');
});
// Add active class to clicked tab
tab.classList.add('active');
// Hide all tab contents
tabContents.forEach((tabContent) => {
tabContent.classList.remove('active');
});
// Show clicked tab content
tabContents[index].classList.add('active');
});
});

// Populate user profile data
document.getElementById('job-title').innerHTML = '';
document.getElementById('job-description').innerHTML = '';

document.getElementById('name').innerHTML = '';
document.getElementById('email').innerHTML = '';
document.getElementById('phone').innerHTML = '';
document.getElementById('address').innerHTML = '';

document.getElementById('experience').innerHTML = '';
document.getElementById('skills').innerHTML = '';

document.getElementById('linkedin').innerHTML = '';
document.getElementById('twitter').innerHTML = '';
document.getElementById('facebook').innerHTML = '';

// Edit Profile button event listener
document.getElementById('edit-profile').addEventListener('click', function() {
document.getElementById('user-profile').style.display = 'none';
document.getElementById('edit-profile-form').style.display = 'block';

// Populate edit profile form with existing user profile data
document.getElementById('job-title-input').value = document.getElementById('job-title').innerHTML;
document.getElementById('job-description-input').value = document.getElementById('job-description').innerHTML;

document.getElementById('name-input').value = document.getElementById('name').innerHTML;
document.getElementById('email-input').value = document.getElementById('email').innerHTML;
document.getElementById('phone-input').value = document.getElementById('phone').innerHTML;
document.getElementById('address-input').value = document.getElementById('address').innerHTML;

document.getElementById('experience-input').value = document.getElementById('experience').innerHTML;
document.getElementById('skills-input').value = document.getElementById('skills').innerHTML;

document.getElementById('linkedin-input').value = document.getElementById('linkedin').innerHTML;
document.getElementById('twitter-input').value = document.getElementById('twitter').innerHTML;
document.getElementById('facebook-input').value = document.getElementById('facebook').innerHTML;

// Change profile picture
document.getElementById('profile-image-file-input').addEventListener('change', function() {
var file = this.files[0];
var reader = new FileReader();
reader.onload = function(event) {
var img = new Image();
img.onload = function() {
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = img.width;
canvas.height = img.height;
ctx.drawImage(img, 0, 0);
var dataURL = canvas.toDataURL(file.type);
document.getElementById('profile-image').src = dataURL;
};
img.src = event.target.result;
};
reader.readAsDataURL(file);
});

// Cancel Edit button event listener
document.getElementById('cancel-edit').addEventListener('click', function() {
document.getElementById('edit-profile-form').style.display = 'none';
document.getElementById('user-profile').style.display = 'block';
});

// Save Changes button event listener
document.getElementById('edit-profile-form').addEventListener('submit', function(event) {
event.preventDefault();

// Update user profile data with form values
document.getElementById('job-title').innerHTML = document.getElementById('job-title-input').value;
document.getElementById('job-description').innerHTML = document.getElementById('job-description-input').value;

document.getElementById('name').innerHTML = document.getElementById('name-input').value;
document.getElementById('email').innerHTML = document.getElementById('email-input').value;
document.getElementById('phone').innerHTML = document.getElementById('phone-input').value;
document.getElementById('address').innerHTML = document.getElementById('address-input').value;

document.getElementById('experience').innerHTML = document.getElementById('experience-input').value;
document.getElementById('skills').innerHTML = document.getElementById('skills-input').value;

document.getElementById('linkedin').innerHTML = document.getElementById('linkedin-input').value;
document.getElementById('twitter').innerHTML = document.getElementById('twitter-input').value;
document.getElementById('facebook').innerHTML = document.getElementById('facebook-input').value;

// Hide edit profile form and show user profile
document.getElementById('edit-profile-form').style.display = 'none';
document.getElementById('user-profile').style.display = 'block';
});
}); 


//hiding and showing application from with aclick of a button

const newApplicationButton = document.getElementById("new-application-button");
const application_form = document.getElementById("application-form");

newApplicationButton.addEventListener("click", () => {
  application_form.style.display = "block";
});
// Initialize Firebase
var firebaseConfig = {
  //  Firebase project configuration
  apiKey: "AIzaSyCaMBLooSI9RN_pjcuwM9nFANlyGfEk1wQ",

  authDomain: "job-search-portal-4ebc8.firebaseapp.com",

  databaseURL: "https://job-search-portal-4ebc8-default-rtdb.firebaseio.com",

  projectId: "job-search-portal-4ebc8",

  storageBucket: "job-search-portal-4ebc8.appspot.com",

  messagingSenderId: "58044242489",

  appId: "1:58044242489:web:144bc8be6fa847160d8be8",

  measurementId: "G-06KHXF5DGD"

};
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
var database = firebase.database();

// Get a reference to the application data node in the database
var applicationRef = database.ref("application");

// Get a reference to the application form
var applicationForm = document.getElementById("application-form");

// Listen for form submissions
applicationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the values from the form fields
  var name = document.getElementById("first-name").value;
  var email = document.getElementById("last-name").value;
  var phone = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var phone = document.getElementById("job-title").value;
  var phone = document.getElementById("department").value;
  var phone = document.getElementById("job-experience").value;
  var phone = document.getElementById("job-type").value;

  // creating new application object with the form data
  var application = {
    first_name:first_name,
    last_name:last_name,
    email:email,
    phone:phone,
    job_title:job-title,
    department:department,
    job_experience:job_experience,
    job_type:job_type
  };

  // Save the application object to the database
  applicationRef.set(application);

  // Clear the form fields
  document.getElementById("first-name").value="";
  document.getElementById("last-name").value="";
  document.getElementById("email").value="";
  document.getElementById("phone").value="";
  document.getElementById("job-title").value="";
  document.getElementById("department").value="";
  document.getElementById("job-experience").value="";
  document.getElementById("job-type").value="";

});



/*application status js */

// initialize Firebase app
var firebaseConfig = {
  //  Firebase config 
  apiKey: "AIzaSyCaMBLooSI9RN_pjcuwM9nFANlyGfEk1wQ",

  authDomain: "job-search-portal-4ebc8.firebaseapp.com",

  databaseURL: "https://job-search-portal-4ebc8-default-rtdb.firebaseio.com",

  projectId: "job-search-portal-4ebc8",

  storageBucket: "job-search-portal-4ebc8.appspot.com",

  messagingSenderId: "58044242489",

  appId: "1:58044242489:web:144bc8be6fa847160d8be8",

  measurementId: "G-06KHXF5DGD"

};
firebase.initializeApp(firebaseConfig);
// get reference to jobs collection in Firebase
var jobsRef = firebase.firestore().collection("jobs");
// listen for real-time updates to jobs data
jobsRef.onSnapshot(function(snapshot) {
  // clear existing table rows
  var tbody = document.querySelector("#jobs-table tbody");
  tbody.innerHTML = "";
  
  // iterate over job data and add rows to table
  snapshot.forEach(function(doc) {
    var job = doc.data();
    
    var row = document.createElement("tr");
    row.innerHTML = `
      <td>${job.title}</td>
      <td>${job.department}</td>
      <td>${job.type}</td>
      <td>${job.dateApplied.toDate().toLocaleDateString()}</td>
      <td>${job.status}</td>
    `;
    
    tbody.appendChild(row);
  });
});


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the Firestore database
const db = firebase.firestore();
// Get a reference to the table body
const tableBody = document.querySelector('#job-posts tbody');
// Retrieve job posts from Firebase and display them in the table
db.collection('job-posts').get().then(snapshot => {
	snapshot.forEach(doc => {
		const data = doc.data();
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>${data.jobTitle}</td>
			<td>${data.department}</td>
			<td>${data.position}</td>
			<td>${data.jobDescription}</td>
			<td>${data.jobType}</td>
			<td>${data.datePosted}</td>
			<td>${data.companyName}</td>
			<td>${data.companyContact}</td>
			<td>${data.location}</td>
		`;
		tableBody.appendChild(row);
	});
});
