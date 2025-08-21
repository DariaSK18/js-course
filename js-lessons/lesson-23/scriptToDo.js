const taskText = document.querySelector("#task-input");
const addButton = document.querySelector(".add-button");
const listContainer = document.querySelector(".list");

class ToDoListManager {
  constructor(listTitle, initList = []) {
    this.listTitle = listTitle;
    if (!localStorage.getItem(this.listTitle)) this.setList(initList);
  }
  addItem(newItem) {
    const list = this.loadList();
    list.push(newItem);
    this.setList(list);
  }
  removeItem(item) {
    // console.log('----item',item);
    // console.log(item);

    const list = this.loadList();
    const itemIndex = list.findIndex((el) => {
      // console.log('------el', typeof(el));
      // console.log('----item',typeof(item));
      // console.log(el == item );
      return el === item;
    });
    // console.log(itemIndex);

    if (!(itemIndex === -1)) list.splice(itemIndex, 1);
    this.setList(list);
  }
  setList(list) {
    localStorage.setItem(this.listTitle, JSON.stringify(list));
  }
  loadList() {
    return JSON.parse(localStorage.getItem(this.listTitle));
  }
}

// let a = new ToDoListManager("list", ["a", "b", 1, 2]);
// a.addItem(12);
// a.addItem("dasha");
// a.removeItem(12);
// console.log(a.loadList());
// localStorage.clear()

let listStorage = new ToDoListManager("myToDoList");

addButton.addEventListener("click", () => {
  listStorage.addItem(taskText.value.trim());
  taskText.value = "";
  renderList(listContainer, listStorage.loadList());
});

function renderList(container, listContent) {
  container.innerHTML = "";
  const orderedList = document.createElement("ol");
  listContent.forEach((element) => {
    const listItem = document.createElement("li");
    const listItemWrapper = document.createElement("div");
    const listItemSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.innerText = "X";
    listItemWrapper.classList.add("list-item-wrapper");
    listItemSpan.innerText = element;
    listItemWrapper.append(listItemSpan);
    listItemWrapper.append(deleteBtn);
    listItem.append(listItemWrapper);
    orderedList.append(listItem);
  });
  container.append(orderedList);
}

renderList(listContainer, listStorage.loadList());

listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-button")) {
    const item = e.target.parentElement.firstChild.innerText.trim();
    console.log(item);
    listStorage.removeItem(item);
    e.target.closest("li").remove();
  }
});
