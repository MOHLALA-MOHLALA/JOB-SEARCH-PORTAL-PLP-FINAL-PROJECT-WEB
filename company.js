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
