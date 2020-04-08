console.log('IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

function handleTabClick(event) {
  event.preventDefault();
  console.log('tab clicked', event.currentTarget);

  const selected = event.currentTarget;

  // hide tab panels
  tabPanels.forEach(panel => (panel.hidden = true));
  // mark all tabs unselected
  tabButtons.forEach(button => {
    button.setAttribute('aria-selected', false);
  });
  // mark selected tab as selected
  selected.setAttribute('aria-selected', true);
  // find the associated tab Panel and show it
  const { id } = selected;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}
