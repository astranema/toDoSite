'use strict';

const darkModeButton = document.getElementById("dark-mode-button");
const root = document.documentElement;
const listContainer = document.getElementById("list-container");
let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
updateDarkMode();
darkModeButton.addEventListener("click", function () {
	darkMode = !darkMode;
	updateDarkMode();
});
const addListButton = document.getElementById("add-list-button");
addListButton.addEventListener("click", addList);
addList();

function addList() {
	// making the list
	const list = document.createElement("div");
	list.classList.add("list");
	// making the list header
	const listHeader = makeListHeader(list);
	// making the + button
	const addTaskButton = makeAddTaskButton(list);
	// adding everything
	listContainer.appendChild(list);
	list.appendChild(listHeader);
	list.appendChild(addTaskButton);
}

function makeAddTaskButton(list) {
	const addTaskButton = document.createElement("div");
	addTaskButton.textContent = "+";
	addTaskButton.classList.add("add-task-button");
	addTaskButton.addEventListener("click", function () {
		addTask(list);
	})
	return addTaskButton;
}

function makeListHeader(list) {
	// creating the listHeader
	const listHeader = document.createElement("div");
	listHeader.classList.add("list-header");
	// making the container for the title and the title
	const titleContainer = makeListTitleContainer();
	// making the trash button
	const deleteButton = makeDeleteButton(list);
	// appending children to the listHeader
	listHeader.appendChild(deleteButton);
	listHeader.appendChild(titleContainer);
	// returning the ending value of listHeader
	return listHeader;
}

function makeDeleteButton(element) {
	const deleteButton = document.createElement("div");
	deleteButton.classList.add("delete-button");
	deleteButton.addEventListener("click", function () {
		element.remove();
	});
	return deleteButton;
}

function makeListTitleContainer() {
	// making the titleContainer
	const listTitleContainer = document.createElement("div");
	listTitleContainer.classList.add("list-header-title-container");
	// making the title
	const listHeaderTitle = document.createElement("div");
	listHeaderTitle.textContent = "New List";
	listHeaderTitle.addEventListener("click", function () {
		makeInputBox(listTitleContainer, listHeaderTitle);
	});
	// making the listHeaderTitle a child of the container
	listTitleContainer.appendChild(listHeaderTitle);
	// returning title container
	return listTitleContainer;
}

function makeInputBox(titleContainer, text) {
	text.style.display = "none";
	const inputBox = document.createElement("input");
	inputBox.classList.add("list-title-input-box");
	inputBox.addEventListener('keydown', function (event) {
		if (event.key === "Enter") {
			confirmTextInput(text, inputBox);
		}
	});
	inputBox.addEventListener("blur", function () {
		confirmTextInput(text, inputBox);
	});
	titleContainer.appendChild(inputBox);
	inputBox.focus();
}

// assumes textBox's display should be block naturally, and is
// currently none
function confirmTextInput(textBox, inputBox) {
	if (inputBox.value != "") {
		textBox.textContent = inputBox.value;
	}
	textBox.style.display = "block";
	inputBox.remove();
}

function addTask(list) {
	const task = document.createElement("div");
	task.classList.add("task");
	// making text container
	const textContainer = makeListTitleContainer();
	task.appendChild(textContainer);
	// making delete button
	const deleteButton = makeDeleteButton(task);
	task.appendChild(deleteButton);
	// appending task to list
	list.appendChild(task);
}

function updateDarkMode() {
	if (darkMode) {
		setThemeDark();
	}
	else {
		setThemeLight();
	}
}

function setThemeDark() {
	root.style.setProperty("--bg-color", "#0E051D");
	root.style.setProperty("--text-color", "#DDDDDD");
	root.style.setProperty("--header-color", "#0C0C3D");
}

function setThemeLight() {
	root.style.setProperty("--bg-color", "#ffeecc");
	root.style.setProperty("--text-color", "#000044");
	root.style.setProperty("--header-color", "#ffddbb");
}