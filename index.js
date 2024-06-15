listEl = document.getElementById("list")

function addItem() {
    let newItem = document.createElement("li")
    let newInput = document.createElement("input")
    newInput.type = "text"
    newInput.placeholder = "New Item"
    newItem.appendChild(newInput)
    listEl.appendChild(newItem)
}

function deleteItem() {
    let lastItem = listEl.lastElementChild;
    listEl.removeChild(lastItem);
}