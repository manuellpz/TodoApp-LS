const container = document.querySelector(".container");
const txtItem = document.querySelector("#txt_item");

addEventListener('load',()=>{showItems()});

txtItem.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    addItem(e.target.value);
    showItems();
    txtItem.value = '';
    txtItem.focus();
  }
});

function showItems() {
  container.innerHTML = '';
  let template = "";
  let totalItems = localStorage.length;
  let item = "";
  for (i = 0; i < totalItems; i++) {
    item = localStorage.getItem(`${i}`);
    template = `
         <div class="container_item" id="item_${i}">
            <p>${item}</p>
            <button class="btn_delete">X</button>
         </div>
      `;
    container.innerHTML += template;
  }
}

function addItem(item) {
  let counter = localStorage.length;
  localStorage.setItem(counter, item);
}
