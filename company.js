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
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
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
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
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
