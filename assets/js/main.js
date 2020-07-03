const toggleHideAndShow = (btn, container, className, callback) => {
	const buttonItem = document.querySelector(btn);
	const containerItem = document.querySelector(container);

	buttonItem.addEventListener("click", () => {
		if (typeof callback === "function") {
			callback();
		}
		containerItem.classList.toggle(className);
	});
};

const changeIcon = (select, oldIconClass, newIconClass) => {
	const iconContainer = document.querySelector(select);
	if (iconContainer.classList.contains(oldIconClass)) {
		iconContainer.classList.remove(oldIconClass);
		iconContainer.classList.add(newIconClass);
	} else {
		iconContainer.classList.add(oldIconClass);
		iconContainer.classList.remove(newIconClass);
	}
};

toggleHideAndShow(
	".navigation_hamburgerBtn",
	".hamburger_menu",
	"hamburger_menu--active"
);

toggleHideAndShow(
	".hamburger_btn-back_container",
	".hamburger_menu",
	"hamburger_menu--active"
);

toggleHideAndShow(
	".map_info-col_collaps--tasks",
	".map_tasks",
	"map_col--collapsed",
	() =>
		changeIcon(
			".map_info-col_icon--tasks",
			"fa-chevron-left",
			"fa-chevron-right"
		)
);

toggleHideAndShow(
	".map_info-col_collaps--agents",
	".map_agents",
	"map_col--collapsed",
	() =>
		changeIcon(
			".map_info-col_icon--agents",
			"fa-chevron-right",
			"fa-chevron-left"
		)
);
