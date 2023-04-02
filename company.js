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



// Initialize Firebase
var firebaseConfig = {
  // Your Firebase project configuration

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

// Listen for changes to the application data node
applicationRef.on("value", function(snapshot) {
  // Get the data from the snapshot
  var applicationData = snapshot.val();

  // Display the data in the application-data div
  var applicationDataDiv = document.getElementById("application-data");
  applicationDataDiv.innerHTML = JSON.stringify(applicationData);
});




































/*
const firebaseConfig = {
  apiKey: "AIzaSyCaMBLooSI9RN_pjcuwM9nFANlyGfEk1wQ",
  authDomain: "job-search-portal-4ebc8.firebaseapp.com",
  databaseURL: "https://job-search-portal-4ebc8-default-rtdb.firebaseio.com",
  projectId: "job-search-portal-4ebc8",
  storageBucket: "job-search-portal-4ebc8.appspot.com",
  messagingSenderId: "58044242489",
  appId: "1:58044242489:web:144bc8be6fa847160d8be8",
  measurementId: "G-06KHXF5DGD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function storeTask(event) {
  event.preventDefault();
  var task = document.getElementById("task").value;
  var desc = document.getElementById("desc").value;
  document.getElementById("task").value = "";
  document.getElementById("desc").value = "";
  
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
/*
// Firebase configuration
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// Get elements from the DOM
const profileDetails = document.getElementById('profile-details');
const profileForm = document.getElementById('profile-form');
const newEditBtn = document.getElementById('new-edit-btn');
const updateBtn = document.getElementById('update-btn');
// Show/hide the profile form on button click
newEditBtn.addEventListener('click', () => {
  profileForm.style.display = profileForm.style.display === 'none' ? 'block' : 'none';
});
// Update the company profile on form submit
updateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Get the form data
  const companyName = profileForm['company-name'].value;
  const jobType = profileForm['job-type'].value;
  const departments = profileForm['departments'].value;
  const location = profileForm['location'].value;
  
  // Create an applicant object
  const applicant = {
    companyName,
    jobType,
    departments,
    location
  };
  
  // Add the applicant object to Firebase
  db.collection('applicants').add(applicant)
    .then(() => {
      // Display the applicant object on the page
      profileDetails.innerHTML += `
        <h3>${applicant.companyName}</h3>
        <p><strong>Job Type:</strong> ${applicant.jobType}</p>
        <p><strong>Departments:</strong> ${applicant.departments}</p>
        <p><strong>Location:</strong> ${applicant.location}</p>
        <hr>
      `;
      
      // Reset and hide the form
      profileForm.reset();
      profileForm.style.display = 'none';
    })
    .catch((error) => {
      console.error("Error adding applicant: ", error);
    });
});
// Display existing applicants from Firebase
db.collection('applicants').get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const applicant = doc.data();
      profileDetails.innerHTML += `
        <h3>${applicant.companyName}</h3>
        <p><strong>Job Type:</strong> ${applicant.jobType}</p>
        <p><strong>Departments:</strong> ${applicant.departments}</p>
        <p><strong>Location:</strong> ${applicant.location}</p>
        <hr>
      `;
    });
  })
  .catch((error) => {
    console.error("Error getting applicants: ", error);
  });
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCaMBLooSI9RN_pjcuwM9nFANlyGfEk1wQ",
  authDomain: "job-search-portal-4ebc8.firebaseapp.com",
  databaseURL: "https://job-search-portal-4ebc8-default-rtdb.firebaseio.com",
  projectId: "job-search-portal-4ebc8",
  storageBucket: "job-search-portal-4ebc8.appspot.com",
  messagingSenderId: "58044242489",
  appId: "1:58044242489:web:999782036b64d2220d8be8",
  measurementId: "G-WGDGSDEQS4"
};
firebase.initializeApp(config);
// Get a reference to the database service
var database = firebase.database();
// Get a reference to the table body element
var tableBody = document.getElementById("table-body");
// Get the job applications data from Firebase
database.ref("job-applications").on("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();
    var row = tableBody.insertRow(-1);
    row.insertCell(0).innerHTML = childData.fullName;
    row.insertCell(1).innerHTML = childData.email;
    row.insertCell(2).innerHTML = childData.phone;
    row.insertCell(3).innerHTML = childData.jobTitle;
    row.insertCell(4).innerHTML = childData.department;
    row.insertCell(5).innerHTML = childData.jobType;
    row.insertCell(6).innerHTML = childData.dateApplied;
  });
});
// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCaMBLooSI9RN_pjcuwM9nFANlyGfEk1wQ",
  authDomain: "job-search-portal-4ebc8.firebaseapp.com",
  databaseURL: "https://job-search-portal-4ebc8-default-rtdb.firebaseio.com",
  projectId: "job-search-portal-4ebc8",
  storageBucket: "job-search-portal-4ebc8.appspot.com",
  messagingSenderId: "58044242489",
  appId: "1:58044242489:web:999782036b64d2220d8be8",
  measurementId: "G-WGDGSDEQS4"
};
firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
var database = firebase.database();
// Save data to Firebase
function saveData() {
  // Get values from input fields
  var companyName = document.getElementById('name').value;
  var companyEmail = document.getElementById('email').value;
  var companyPhone = document.getElementById('phone').value;
  var companyAddress = document.getElementById('address').value;
  var parentCompany = document.getElementById('parent').value;
  var organizationType = document.getElementById('organization').value;
  var businessType = document.getElementById('business').value;
  var inHouseLanguage = document.getElementById('language').value;
  var companyActivities = document.getElementById('activities-input').value;
  var companySubsidiaries = document.getElementById('subsidiaries-input').value;
  var companyAddress1 = document.getElementById('inputAddress').value;
  var companyAddress2 = document.getElementById('inputAddress2').value;
  var companyCity = document.getElementById('inputCity').value;
  var companyState = document.getElementById('inputState').value;
  var companyZip = document.getElementById('inputZip').value;
  var companyWebsite = document.getElementById('website-input').value;
  var companyLinkedIn = document.getElementById('linkedin-input').value;
  var companyTwitter = document.getElementById('twitter-input').value;
  var companyFacebook = document.getElementById('facebook-input').value;
  // Save data to Firebase database
  database.ref('companies').push({
    name: companyName,
    email: companyEmail,
    phone: companyPhone,
    address: companyAddress,
    parent: parentCompany,
    organization: organizationType,
    business: businessType,
    language: inHouseLanguage,
    activities: companyActivities,
    subsidiaries: companySubsidiaries,
    address1: companyAddress1,
    address2: companyAddress2,
    city: companyCity,
    state: companyState,
    zip: companyZip,
    website: companyWebsite,
    linkedin: companyLinkedIn,
    twitter: companyTwitter,
    facebook: companyFacebook
  });
  // Clear input fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('address').value = '';
  document.getElementById('parent').value = '';
  document.getElementById('organization').value = '';
  document.getElementById('business').value = '';
  document.getElementById('language').value = '';
  document.getElementById('activities-input').value = '';
  document.getElementById('subsidiaries-input').value = '';
  document.getElementById('inputAddress').value = '';
  document.getElementById('inputAddress2').value = '';
  document.getElementById('inputCity').value = '';
  document.getElementById('inputState').value = '';
  document.getElementById('inputZip').value = '';
  document.getElementById('website-input').value = '';
  document.getElementById('linkedin-input').value = '';
  document.getElementById('twitter-input').value = '';
  document.getElementById('facebook-input').value = '';
}
// Event listener for form submission
document.getElementById('company-form').addEventListener('submit', function(event) {
  event.preventDefault();
  saveData();
  alert('Company data saved!');
});
*/