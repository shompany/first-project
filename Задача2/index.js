const heightOfStudArr = [165, 178, 157, 194, 205];
const filterList =[]
const list = document.querySelector(".list");
const addBtn = document.querySelector(".add-button");
const search = document.querySelector(".filter-btn");

function fillList(itemArr, list) {
  list.innerHTML = "";
  for (let i = 0; i < itemArr.length; i++) {
    const liItem = document.createElement('li');
    liItem.textContent = `${i + 1}) ${itemArr[i]}`;
    list.append(liItem);
  }
}

fillList(heightOfStudArr, list);

addBtn.addEventListener("click", () => {
  const input = prompt("Введите рост ученика");

  if (input.trim() === "" || input === null) {
    alert("Вы ничего не ввели");
    return
  } 

  const height = Number(input);

  if (isNaN(height)) {
    alert("Вводите только цифры");
    return
  }

  heightOfStudArr.push(height);
  fillList(heightOfStudArr, list);
});

const addFilter = promt("Введите число для фильтрации")

function filterHeight(arr, num) {
  for(const result of arr) {
    if(arr >= num) {
      
    }
  }
}

