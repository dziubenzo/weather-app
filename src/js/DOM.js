// Underline a tab if clicked
export function underlineTab() {
  const tabs = document.querySelectorAll('nav li');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Remove underline from the current tab
      document
        .querySelector('li[class*="selected"]')
        .classList.remove('selected');
      // Add underline to the current tab
      tab.classList.add('selected');
    });
  });
}

// Animate GitHub logo on hover
export function animateGitHubLogo() {
  const logo = document.querySelector(
    'a[href="http://www.github.com/dziubenzo"]',
  );
  logo.addEventListener('mouseenter', () => {
    logo.classList.add('fa-beat-fade');
  });
  logo.addEventListener('mouseout', () => {
    logo.classList.remove('fa-beat-fade');
  });
}
