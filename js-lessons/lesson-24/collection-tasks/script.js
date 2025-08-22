// ===================================================
// Задача 4. Дано список URL адрес. Підрахувати кількість адрес, що відносяться до кожного із доменів (edu, com, org,...).
// const urls = [
//   "https://google.com",
//   "https://wikipedia.org",
//   "https://harvard.edu",
//   "https://github.com",
//   "https://example.net",
//   "https://mit.edu",
//   "https://mozilla.org",
//   "https://openai.com",
//   "https://school.edu",
//   "https://nonprofit.org",
//   "https://startup.io",
//   "https://yahoo.com",
//   "https://coursera.org",
// ];
// let map = new Map();
// const regEx = /^https:\/\/[\w.-]+\.(\w{2,})$/i;

// urls.forEach((url) => {
//   const match = url.match(regEx);
//   if (match) {
//     const domain = match[1];
//     // console.log("----match", match);
//     // console.log("----domain", domain);
//     let count = map.get(domain) ?? 0;
//     map.set(domain, count + 1);
//   }
// });

// console.log(map);

// ===================================================
// Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
// const ages = [12, 13, 12, 14, 13, 15, 12, 14, 13, 15, 12, 14, 13, 15, 12];
// let map = new Map();
// ages.forEach((age) => {
//   let count = map.get(age) ?? 0;
//   map.set(age, ++count);
// });
// console.log(map);

// ===================================================
// Задача 6.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
// const books = [
//   { title: "Майстер і Маргарита", year: 1967, author: "Михайло Булгаков" },
//   {
//     title: "Преступление и наказание",
//     year: 1866,
//     author: "Фёдор Достоєвський",
//   },
//   { title: "Братья Карамазовы", year: 1880, author: "Фёдор Достоєвський" },
//   { title: "Війна і мир", year: 1869, author: "Лев Толстой" },
//   { title: "Анна Кареніна", year: 1878, author: "Лев Толстой" },
//   { title: "1984", year: 1949, author: "Джордж Орвелл" },
//   { title: "Колгосп тварин", year: 1945, author: "Джордж Орвелл" },
//   {
//     title: "Сто років самотності",
//     year: 1967,
//     author: "Габріель Гарсія Маркес",
//   },
//   {
//     title: "Кохання під час холери",
//     year: 1985,
//     author: "Габріель Гарсія Маркес",
//   },
//   { title: "Шантарам", year: 2003, author: "Грегорі Девід Робертс" },
// ];

// const map = new Map()
// books.forEach(book => {
//     // console.log('---book', book.author);
//     let count = map.get(book.author) ?? 0
//     map.set(book.author, count+1)
// })
// console.log(map);

// ===================================================
// Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.
// const visitors = [
//   "dasha123",
//   "alex89",
//   "maria_k",
//   "dasha123",
//   "ivan007",
//   "alex89",
//   "alex89",
//   "maria_k",
//   "guest1",
//   "dasha123",
//   "guest1",
//   "olena22",
//   "ivan007",
//   "dasha123",
// ];
// let map = new Map();
// visitors.forEach((visitor) => {
//   let count = map.get(visitor) ?? 0;
//   map.set(visitor, count + 1);
// });
// console.log(map);

// ===================================================
// Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.
// const students = [
//   { name: "Іваненко Петро Іванович", course: 1, faculty: "Комп'ютерні науки" },
//   { name: "Коваль Марія Сергіївна", course: 2, faculty: "Філологія" },
//   { name: "Сидоренко Андрій Петрович", course: 3, faculty: "Право" },
//   { name: "Мельник Олена Василівна", course: 1, faculty: "Економіка" },
//   {
//     name: "Шевченко Ігор Олександрович",
//     course: 2,
//     faculty: "Комп'ютерні науки",
//   },
//   { name: "Гнатюк Катерина Олегівна", course: 4, faculty: "Медицина" },
//   { name: "Лисенко Дмитро Миколайович", course: 3, faculty: "Економіка" },
//   { name: "Бондар Анастасія Віталіївна", course: 1, faculty: "Філологія" },
//   { name: "Ткаченко Владислав Ігорович", course: 2, faculty: "Право" },
//   { name: "Романюк Софія Михайлівна", course: 4, faculty: "Комп'ютерні науки" },
// ];
// let differentFaculties = new Set(students.map((s) => s.faculty));
// console.log(differentFaculties, differentFaculties.size);
// let map = new Map();
// students.forEach((student) => {
//   let count = map.get(student.course) ?? 0;
//   map.set(student.course, count + 1);
// });
// console.log(map);

// ===================================================
// Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// ----- Заокруглити вверх значення та підрахувати кількість різних показів.
// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];
// let mapEntries = new Map();
// let mapRounded = new Map();
// temperatures.forEach((t) => {
//   let countEntries = mapEntries.get(t) ?? 0;
//   let countRounded = mapRounded.get(Math.ceil(t)) ?? 0;
//   mapEntries.set(t, countEntries + 1);
//   mapRounded.set(Math.ceil(t), countRounded + 1);
// });
// console.log(mapEntries);
// console.log(mapRounded);

// ===================================================
// Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.
const mathClub = [
  "Іваненко",
  "Коваль",
  "Сидоренко",
  "Мельник",
  "Шевченко",
  "Гнатюк",
];

const historyClub = [
  "Коваль",
  "Шевченко",
  "Бондар",
  "Ткаченко",
  "Романюк",
  "Сидоренко",
];
// ===== variant 1 =====
// let set = new Set(mathClub)
// historyClub.forEach(s => set.add(s))
// console.log(set, set.size);
// ===== variant 2 =====
const allStudents = new Set([...mathClub, ...historyClub]);
console.log(allStudents, allStudents.size);

const studentsInBothClubs = mathClub.filter((s) => historyClub.includes(s));
console.log('----studentsInBothClubs', studentsInBothClubs);

