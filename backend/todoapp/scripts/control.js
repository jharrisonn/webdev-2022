let cpanel = {};
let epanel = {};

let items;
let editMode = -1;
let viewMode = 2;

function loadElements() {
    cpanel = {
        title: document.getElementById("cpanel-title"),
        check: document.getElementById("cpanel-check"),
        number: document.getElementById("cpanel-priority")
    };
    epanel = {
        title: document.getElementById("epanel-title"),
        check: document.getElementById("epanel-check"),
        number: document.getElementById("epanel-priority"),
        edit: document.getElementById("epanel-edit"),
        view: [
            document.getElementById("epanel-btn-todo"),
            document.getElementById("epanel-btn-done"),
            document.getElementById("epanel-btn-all")
        ]
    };

    items = document.getElementById("list-items");
}

function generateItemFromJSON(json) {
    return `<div class="task" id="item-${json.i}">
    <input type="checkbox" class="task-check" id="check-${json.i}" ${json.check?"checked":""} onclick='updateStatus(${json.i})'>
    <p class="task-title" id="title-${json.i}">${json.title}</p>
    <button class="icon-btn tooltip" onclick="removeItem(${json.i})" id="btn-r-${json.i}">×<span class="tooltip-text">Remover</span></button>
    <button class="icon-btn tooltip" onclick="enterEditMode(${json.i})" id="btn-e-${json.i}">🖉<span class="tooltip-text">Editar</span></button>
    <button class="icon-btn tooltip" onclick="editPriorityItem(${json.i}, 1)" id="btn-i-${json.i}">↑<span class="tooltip-text">Aumentar prioridade</span></button>
    <button class="icon-btn tooltip" onclick="editPriorityItem(${json.i},-1)" id="btn-d-${json.i}">↓<span class="tooltip-text">Diminuir prioridade</span></button>
</div>`
}

function toggleEditPanel() {
    epanel.title.disabled = !(epanel.title.disabled);
    epanel.check.disabled = !(epanel.check.disabled);
    epanel.number.disabled = !(epanel.number.disabled);
    epanel.edit.disabled = !(epanel.edit.disabled);

    console.log("Toggle");
}

function enterEditMode(i) {
    if (editMode == -1) {
        editMode = i;

        epanel.title.value = data[i].name;
        epanel.check.checked = data[i].status;
        epanel.number.value = data[i].priority;

        toggleEditPanel();
    }
}

function leaveEditMode() {
    if (editMode != -1) {
        toggleEditPanel();

        editItem(editMode);
        editMode = -1;

        epanel.title.value = "";
        epanel.check.checked = false;
        epanel.number.value = "";

    }
}

function sortByPriority() {
    data.sort((a, b) => b.priority - a.priority);
}

function refreshTaskList() {
    sortByPriority();

    items.innerHTML = "";

    data.forEach(item => {
        json = {
            i: data.indexOf(item),
            title: item.name,
            check: item.status
        }

        if (viewMode == 1 && !json.check || viewMode == 0 && json.check) {} else items.innerHTML += generateItemFromJSON(json);
    });
}

function addItem() {
    let title = cpanel.title.value;
    let check = cpanel.check.checked;
    let number = parseInt(cpanel.number.value);

    sendData(title, check, number);
    
    alert(`Item ${title} adicionado com sucesso!`);

    refreshData();
    refreshTaskList();
} 

function removeItem(i) {
    let item = data[i];
    
    console.log(removeData(item.name));

    refreshTaskList();
}

function removeAllItems() {
    data.forEach(item => console.log(removeData(item.name)));

    refreshTaskList();
}

function editItem() {
    let item = data[editMode];
    item.name = epanel.title.value;
    item.status = epanel.check.checked;
    item.priority = parseInt(epanel.number.value);

    console.log(editData(data[editMode].name, item.name, item.status, item.priority));
}

function editPriorityItem(i, value) {
    let item = data[i];
    item.priority += value;
    console.log(editData(item.name, item.name, item.status, item.priority));
}

function updateStatus(i) {
    let item = data[i];
    console.log(editData(item.name, item.name, !(item.status), item.priority));
}

function setViewMode(mode) {
    viewMode = mode;

    epanel.view.forEach(item => item.classList.remove("active"));
    epanel.view[mode].classList.add("active");

    refreshTaskList();
}