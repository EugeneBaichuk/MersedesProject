const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElems = document.querySelectorAll('[data-tabs-field]');
const tabsHeader = document.querySelectorAll('.design__title');


// data-tabs-field
for (let btn of tabsHandlerElems) {
  btn.addEventListener('click', () => {
    tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'));

    btn.classList.add('design-list__item_active');

    tabsContentElems.forEach(content => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    });
    //console.dir(btn.dataset.tabsHandler);
    //section__title design__title
  });
}