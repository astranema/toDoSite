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
	// making the header
	const listHeader = document.createElement("div");
	listHeader.classList.add("list-header");
	// making the titleContainer
	const listHeaderTitleContainer = document.createElement("div");
	listHeaderTitleContainer.classList.add("list-header-title-container");
	// making the title
	const listHeaderTitle = document.createElement("div");
	listHeaderTitle.textContent = "Title";
	listHeaderTitle.addEventListener("click", function () {
		makeInputBox(listHeaderTitleContainer, listHeaderTitle);
	});
	// making the trash button
	const deleteList = document.createElement("div");
	deleteList.classList.add("delete-list");
	deleteList.addEventListener("click", function () {
		list.remove();
	});
	// making the + button
	const addTaskButton = document.createElement("div");
	addTaskButton.textContent = "+";
	addTaskButton.classList.add("add-task-button");
	addTaskButton.addEventListener("click", function () {
		addTask(list);
	})
	// adding everything
	listContainer.appendChild(list);
	list.appendChild(listHeader);
	list.appendChild(addTaskButton);
	listHeader.appendChild(deleteList);
	listHeader.appendChild(listHeaderTitleContainer);
	listHeaderTitleContainer.appendChild(listHeaderTitle);
}

function makeInputBox(titleContainer, text) {
	text.style.display = "none";
	const inputBox = document.createElement("input");
	inputBox.classList.add("list-title-input-box");
	inputBox.addEventListener('keydown', function (event) {
		if (event.key === "Enter") {
			text.style.display = "block";
			text.textContent = event.target.value;
			inputBox.remove();
		}
	});
	titleContainer.appendChild(inputBox);
	inputBox.focus();
}

function addTask(list) {
	const newTask = document.createElement("div");
	newTask.textContent = "pee";
	list.appendChild(newTask);
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