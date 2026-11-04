let arrList = document.querySelector(".book-list");
// arrList = [];


const addBtn = document.querySelector(".add-button");
const search = document.querySelector(".search-btn");

// function name(params) {

// }

function addLiItem() {
  const liItems = document.createElement("li");
  
  liItems.textContent = prompt('введи название');

  arrList.append(li)
}

addBtn.onclick = function () {
  addBtn.onclick = addLiItem();
};
search.onclick = function () {};
