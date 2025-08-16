const data = [
  "Позвоните мне по номеру +44 7911 123456",
  "Встреча запланирована на 15.08.2025",
  "Мой новый номер карты: 1234 5678 9012 3456",
  "Просто текст без чисел",
  "Сегодня солнечно и тепло",
  "Заказ #34567 был отправлен",
  "Email: example@mail.com",
  "Дата рождения: 18/07/1996",
  "Ваш код подтверждения: 852314",
  "wqwqwq",
  "мвгд",
  "Hello World!",
];
// =============================================
// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
// data.forEach(str => {
// if((/\d/).test(str)) console.log(str);
// })

// =============================================
// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
// data.forEach((str) => {
//   if (!/\d/.test(str)) console.log(str);
// });

// =============================================
// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
// data.forEach((str) => {
//   if (/[а, я, о, у, ю, е, є, и, і, ї]/ig.test(str)) console.log(str);
// });

// =============================================
// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
// data.forEach((str) => {
//   if (!/[а, я, о, у, ю, е, є, и, і, ї]/ig.test(str)) console.log(str);
// });

// =============================================
// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
// data.forEach((str) => {
//   if (/[13]/.test(str)) console.log(str);
// });

// =============================================
// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
// const str = "Мой новый номер карты: 1234 5678 9012 3456"
// console.log(str.match(/\d/g));

// =============================================
// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
// const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio aperiam repellendus necessitatibus ad a laboriosam perspiciatis. Libero, provident. Reprehenderit suscipit repellendus aliquam quam consequatur nesciunt odit quo minus facere!'
// console.log(text.match(/[\p{P}]/gu));
// console.log(text.match(/[.,!?:;()-]/g));
// console.log(text.match(/\W/g)); with spaces

// =============================================
// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
// const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio aperiam repellendus necessitatibus ad a laboriosam perspiciatis. Libero, provident. Reprehenderit 12.22. suscipit repellendus aliquam quam consequatur nesciunt odit quo minus facere! Встреча запланирована на 15.08.2025'

// =============================================
// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
// const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio aperiam repellendus necessitatibus ad a laboriosam perspiciatis. Libero, provident. Reprehenderit 12.22. suscipit repellendus aliquam quam consequatur nesciunt odit quo minus facere! Встреча запланирована на 15.08.2025'
// console.log(/\b\d{2}\.\d{2}\.\d{4}\b/.test(text));
// console.log(text.match(/\b\d{2}\.\d{2}\.\d{4}\b/));

// =============================================
// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
// const text =
//   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio aperiam repellendus necessitatibus ad a laboriosam perspiciatis. Libero, provident. Reprehenderit 12.22. suscipit repellendus aliquam quam consequatur nesciunt odit quo minus facere! Встреча запланирована на 15.08.2025";
// const regEx = /\b\d{2}\b/g;
// // const regEx = /\b\d{2}\b|(?<=\d{2}\.)\d{2}(?=\.)/g; AI variant
// const regExArr = text.match(regEx);
// const res = regExArr.length !== 0 ? regExArr.length : 0;
// console.log(res);
// console.log(regExArr);

// =============================================
// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
// const text =
//   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio aperiam repellendus necessitatibus ad a laboriosam perspiciatis. Libero, provident. 1234 5678 9012 3456 Reprehenderit 12.22. suscipit repellendus aliquam quam consequatur nesciunt odit quo minus facere! Встреча запланирована на 15.08.2025! Мой новый номер карты: 1234-5678-9012-3456";
// const regEx = /\b\d{4}([- ]?)\d{4}\1\d{4}\1\d{4}\b/g;
// const res = text.match(regEx);
// const res1 = regEx.test(text);
// console.log(res);
// console.log(res1);

// =============================================
// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
// const webUrl = "https://www.example.gov.uk | https://www.example.gov";
// const regEx = /\.gov\b/;
// const res = webUrl.match(regEx);
// console.log(res);

// =============================================
// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
// const message = "Мій план на 2020, 3100, 2022, 2023, 2099, 2000 та 2025, 2100, 2501, 2021, 21000, 2120 роки";
// const years = message.match(/\b(202[2-9]|[3-9]\d{3}|20[3-9]\d|2[1-9]\d{2})\b/g);
// console.log(years);

// =============================================
// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
// const phones = ["+380671234567", "+491512545678", "+380671234667", "+380671234567"];
// const regEx = /\+38\d{10}\b/;
// phones.forEach((p) => p.match(regEx) ? console.log(p) : false);

// =============================================
// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
// const fullname = "Ivanov Ivan"
// console.log(fullname);
// const replacedName = fullname.replace(/\s/, '-')
// console.log(replacedName);

// =============================================
// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
// const userDate = "15.08.2025"
// console.log(userDate);
// const replacedDate = userDate.replaceAll(/\./g, '/')
// console.log(replacedDate);

// =============================================
// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
// const days = [sun,mon,tue,wed,thu,fri,sat]
// const userDay = prompt("Day");
// if (/[06s]/.test(userDay)) console.log("weekend");
// else console.log("working day");
// ----------- different way -----------
// const userDay = prompt("Day");
// if (!/(sat | sun | 0 | 6)/.test(userDay)) console.log("weekend");
// else console.log("working day");
