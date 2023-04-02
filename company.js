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
var db = firebase.database();

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


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Get candidate data from Firestore and display it in the table
db.collection("candidates").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      const candidate = doc.data();
      const row = document.createElement('tr');
      const firstName = document.createElement('td');
      const lastName = document.createElement('td');
      const email = document.createElement('td');
      const phone = document.createElement('td');
      const jobTitle = document.createElement('td');
      const jobDepartment = document.createElement('td');
      const experience = document.createElement('td');
      firstName.innerText = candidate.firstName;
      lastName.innerText = candidate.lastName;
      email.innerText = candidate.email;
      phone.innerText = candidate.phone;
      jobTitle.innerText = candidate.jobTitle;
      jobDepartment.innerText = candidate.jobDepartment;
      experience.innerText = candidate.experience;
      row.appendChild(firstName);
      row.appendChild(lastName);
      row.appendChild(email);
      row.appendChild(phone);
      row.appendChild(jobTitle);
      row.appendChild(jobDepartment);
      row.appendChild(experience);
      document.getElementById('candidate-list').appendChild(row);
  });
});





//posting


// Initialize Firebase


firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

// Get the job form element and hide it initially
const jobForm = document.getElementById("job-form");
const jobFormContainer = document.getElementById("job-form-container");
jobFormContainer.classList.add("hidden");

// Show the job form when the button is clicked
const postJobBtn = document.getElementById("post-job-btn");
postJobBtn.addEventListener("click", () => {
	jobFormContainer.classList.remove("hidden");
});

// Handle form submission
jobForm.addEventListener("submit", (e) => {
	e.preventDefault();
	// Get form data
	const companyName = jobForm.companyName.value;
	const jobTitle = jobForm.jobTitle.value;
	const position = jobForm.position.value;
	const department = jobForm.department.value;
	const experience = jobForm.experience.value;
	const skills = jobForm.skills.value;
	const jobType = jobForm.jobType.value;
	const location = jobForm.location.value;
	const contactInfo = jobForm.contactInfo.value;

	// Store data in Firestore database
	db.collection("jobs").add({
		companyName: companyName,
		jobTitle: jobTitle,
		position: position,
		department: department,
		experience: experience,
		skills: skills,
		jobType: jobType,
		location: location,
		contactInfo: contactInfo
	})
	.then(() => {
		alert("Job posted successfully!");
		jobForm.reset();
	})
	.catch((error) => {
		alert("Error posting job: " + error.message);
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

  appId: "1:58044242489:web:144bc8be6fa847160d8be8",

  measurementId: "G-06KHXF5DGD"
};
firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
var db = firebase.database();
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
