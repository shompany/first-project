const productsArr = ["Банан", "Клубника", "Ананас", "Слива", "Груша"];

const list = document.querySelector(".list");
const addBtn = document.querySelector(".add-button");

function addFillItem(Arr, list) {
  list.innerHTML = "";

  for (let i = 0; i < Arr.length; i++) {
    const liItem = document.createElement("li");
    liItem.textContent = `${i + 1}) ${Arr[i]}`;
    list.append(liItem);
  }
}

function sortArr(arr) {
  const copyOfArr = [...arr];

  for (let i = 0; i < copyOfArr.length - 1; i++) {
    for (let j = 0; j < copyOfArr.length - 1 - i; j++) {
      const left = copyOfArr[j].toLowerCase();
      const right = copyOfArr[j + 1].toLowerCase();

      if (left > right) {
        const temp = copyOfArr[j];
        copyOfArr[j] = copyOfArr[j + 1];
        copyOfArr[j + 1] = temp;
      }
    }
  }

  return copyOfArr;
}

addFillItem(sortArr(productsArr), list);

addBtn.addEventListener("click", () => {
  const input = prompt("Введите название товара");

  if (input === null || input.trim() === "") {
    alert("Название товара не введено!");
    return;
  }

  productsArr.push(input.trim());
  addFillItem(sortArr(productsArr), list);
});