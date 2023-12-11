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
