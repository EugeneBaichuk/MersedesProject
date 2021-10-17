const btn = document.querySelector('.feature__link');
const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');


// for (let i = 0; i < 4; i++) {
//   btns[i].addEventListener('click', () => console.log(btns[i]));
// }

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    btns.forEach((btnItem, idx) => {
      if (btn === btnItem) {
        btnItem.classList.toggle('feature__link_active');
        lists[idx].classList.toggle("hidden");
      } else {
        btnItem.classList.remove("feature__link_active");
        lists[idx].classList.add("hidden");
      }
    });
  });
});