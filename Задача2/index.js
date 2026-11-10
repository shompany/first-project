const heightOfStudArr = [165, 178, 157, 194, 205];

const list = document.querySelector(".list");
const addBtn = document.querySelector(".add-button");
const filterBtn = document.querySelector(".filter-btn");
const filterList = document.querySelector(".filtered-list");

function addFillItem(Arr, list) {
  list.innerHTML = "";
  for (let i = 0; i < Arr.length; i++) {
    const liItem = document.createElement("li");
    liItem.textContent = `${i + 1}) ${Arr[i]}`;
    list.append(liItem);
  }
}

addFillItem(heightOfStudArr, list);

addBtn.addEventListener("click", () => {
  const input = prompt("Введите рост ученика");

  if (input === null || input.trim() === "") {
    alert("Рост не введён!");
    return;
  }

  const height = Number(input);

  if (Number.isNaN(height)) {
    alert("Вводите только цифры");
    return;
  }

  heightOfStudArr.push(height);
  addFillItem(heightOfStudArr, list);
});

function filterHeight(arr, height) {
  const filterListArr = [];
  for (const item of arr) {
    if (item >= height) {
      filterListArr.push(item);
    }
  }
  return filterListArr;
}

filterBtn.addEventListener("click", () => {
  filterList.innerHTML = "";
  const addFilter = prompt("Введите число для фильтрации");

  if (addFilter === null || addFilter.trim() === "") {
    addFillItem(heightOfStudArr, filterList);
    return;
  }

  const height = Number(addFilter);

  if (Number.isNaN(height)) {
    alert("Вводите только цифры");
    return;
  }

  const filtered = filterHeight(heightOfStudArr, height);

  addFillItem(filtered, filterList);
});