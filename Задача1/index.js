const bookList = document.querySelector(".book-list");
const addBtn = document.querySelector(".add-button");
const search = document.querySelector(".search-btn");

const books = ["Преступление и наказание", "Мастер и Маргарита", "Идиот", "Война и мир"];

function fillList(itemArr, list) {
  list.innerHTML = "";
  for (let i = 0; i < itemArr.length; i++) {
    const liItem = document.createElement('li');
    liItem.textContent = `${i + 1}) ${itemArr[i]}`;
    list.append(liItem);
  }
}

fillList(books, bookList);

addBtn.addEventListener("click", () => {
  const title = prompt("Введите название книги:");

  if (title === null) return;

  const bookTitle = title.trim();
  if (bookTitle === "") {
    alert("Название книги не введено!");
    return;
  }

  books.push(bookTitle);
  fillList(books, bookList);
});

search.addEventListener("click", () => {
  const query = prompt("Введите названия книги (не менее 3 символов):");

  if (query === null) return;

  const q = query.trim().toLowerCase();

  if (q.length < 3) {
    alert("Введите не менее 3 символов!");
    return;
  }

  let foundIndex = -1;
  for (let i = 0; i < books.length; i++) {
    if (books[i].toLowerCase().indexOf(q) !== -1) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex === -1) {
    alert("Книга не найдена!");
    fillList(books, bookList);
    return;
  }

  const items = bookList.querySelectorAll("li");

// снять подсветку со всех
for (let i = 0; i < items.length; i++) {
  items[i].classList.remove("found");
}

// подсветить найденный
if (foundIndex !== -1) {
  items[foundIndex].classList.add("found");
}
});