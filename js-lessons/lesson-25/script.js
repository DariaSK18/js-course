// Задача. Використовуючи один з АРІ
// https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних

const container = document.querySelector("#container");
const image = document.querySelector("#image");

// =============== dogs fetch ==================
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => {
//     console.log("----response", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log("----data", data);
//     image.src = data.message;
//     return data;
//   });

// =============== books fetch ==================
// let promptAns = prompt("Book title?");

// fetch(`https://www.googleapis.com/books/v1/volumes?q=${promptAns}+terms`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     data.items.forEach((element) => {
//       //   console.log(element.volumeInfo.title);
//       //   console.log(element.volumeInfo.authors);
//       //   console.log(element.volumeInfo.imageLinks);
//       image.src = element.volumeInfo.imageLinks.thumbnail;
//       container.innerText = element.volumeInfo.title;
//     });
//   });

const bookInput = document.querySelector("#book-input");
const findBtn = document.querySelector("#find");

// +inauthor:${bookInput}
// encodeURIComponent(...) кодирует строку для безопасной передачи в URL Harry%20Potter%20%26%20Magic
// если вставить Harry Potter & Magic прямо в URL, пробелы и символ & поломают запрос, поэтому лучше использовать encodeURIComponent


findBtn.addEventListener("click", () => {
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(bookInput.value.trim())}`
  )
    .then((response) => {
      console.log("---response", response);
      return response.json();
    })
    .then((data) => {
      console.log("---data", data);
      data.items.forEach((book) => {
        const bookImage = document.createElement("img");
        const bookTitle = document.createElement("h2");
        bookTitle.innerText = book.volumeInfo.title;
        bookImage.src = book.volumeInfo.imageLinks.thumbnail;
        document.body.append(bookTitle);
        document.body.append(bookImage);
      });
    })
    .catch((err) => console.log('----err', err));
});
