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
document.getElementById('job-title').innerHTML = 'Software Engineer';
document.getElementById('job-description').innerHTML = 'IT professional who designs, develops and maintains computer software ';

document.getElementById('name').innerHTML = 'TSHEGOFATSO MOHLALA';
document.getElementById('email').innerHTML = 'tm.senokane@gmail.com';
document.getElementById('phone').innerHTML = '+27 64 917 5087';
document.getElementById('address').innerHTML = '123 Main St, SOUTH AFRICA EARTH';

document.getElementById('experience').innerHTML = '2 years of experience in software engineering';
document.getElementById('skills').innerHTML = 'JavaScript, HTML, CSS, Node.js, Python , Django , my SQL';

document.getElementById('linkedin').innerHTML = 'https://www.linkedin.com/in/mohlala-mohlala/';
document.getElementById('twitter').innerHTML = 'https://twitter.com/tmohlalamohlala';
document.getElementById('facebook').innerHTML = 'https://www.facebook.com/tshego mohlala';

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


// initialize Firebase app
var firebaseConfig = {
  // insert your Firebase config here
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
