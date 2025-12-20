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

function addList() {
	const list = document.createElement("div");
	list.classList.add("list");
	const listHeader = document.createElement("div");
	listHeader.classList.add("list-header");
	listHeader.textContent = "Title";
	listContainer.appendChild(list);
	list.appendChild(listHeader);
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
	root.style.setProperty("--bg-color", "#000022");
	root.style.setProperty("--text-color", "#ffddbb");
	root.style.setProperty("--header-color", "#000044");
	root.style.setProperty("--header2-color", "#000066");
}

function setThemeLight() {
	root.style.setProperty("--bg-color", "#ffeecc");
	root.style.setProperty("--text-color", "#000044");
	root.style.setProperty("--header-color", "#ffddbb");
	root.style.setProperty("--header2-color", "#ffccaa");
}