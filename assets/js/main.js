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

const tabSystem = (
	tabBtnsClass,
	containerClass,
	activeTabClass,
	activeContainerClass,
	dataName
) => {
	const allTabsBtns = document.querySelectorAll(tabBtnsClass);
	const allContainers = document.querySelectorAll(containerClass);

	const resetContainers = () => {
		allContainers.forEach((container) => {
			container.classList.remove(activeContainerClass);
		});
	};

	const resetTabs = () => {
		allTabsBtns.forEach((btnTab) => {
			btnTab.classList.remove(activeTabClass);
		});
	};

	allTabsBtns.forEach((tabBtn) => {
		tabBtn.addEventListener("click", () => {
			const data = tabBtn.getAttribute(`data-${dataName}`);
			const container = document.querySelector(
				`[data-${dataName}='${data}']${containerClass} `
			);
			resetContainers();
			resetTabs();
			container.classList.add(activeContainerClass);
			tabBtn.classList.add(activeTabClass);
		});
	});
};

//	TOGGLE HIDE AND SHOW
//
//		args =================================================
//			-> btn that will be clicked
//			-> contanier which will be visible
//			-> the class that add the vis or hiding option
//			 =================================================

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
	".createTaskBtn",
	".createTaskContainer",
	"nav_popup--active"
);

toggleHideAndShow(
	".notification_btn",
	".notification_nav_container",
	"nav_popup--active"
);

toggleHideAndShow(
	".menu_navigation_btn",
	".menu_navigation_container",
	"nav_popup--active"
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

tabSystem(
	".map_info-col__subhead-tasks",
	".map_info-col__containar-tabTask",
	"map_info-col__subhead-item--active",
	"map_info-col__containar-tabTask--active",
	"tasktab"
);

tabSystem(
	".map_info-col__subhead-agents",
	".map_info-col__containar-tabAgnet",
	"map_info-col__subhead-item--active",
	"map_info-col__containar-tabAgnet--active",
	"agentTab"
);

const responsiveJs = (width, callback) => {
	const windowWidth = window.matchMedia(`(max-width: ${width})`);
	if (windowWidth.matches) {
		if (typeof callback === "function") {
			callback();
		}
	}
};

responsiveJs("900px", () => {
	const colTasks = document.querySelector(".map_tasks");
	const colAgents = document.querySelector(".map_agents");
	const colTasksBtn = document.querySelector(
		".map_info-col_collaps--tasks"
	);
	const colAgentsBtn = document.querySelector(
		".map_info-col_collaps--agents"
	);

	colTasks.classList.add("map_col--collapsed");
	colAgents.classList.add("map_col--collapsed");

	changeIcon(
		".map_info-col_icon--tasks",
		"fa-chevron-left",
		"fa-chevron-right"
	);

	changeIcon(
		".map_info-col_icon--agents",
		"fa-chevron-right",
		"fa-chevron-left"
	);

	colTasksBtn.addEventListener("click", () => {
		colAgents.classList.add("map_col--collapsed");
	});

	colAgentsBtn.addEventListener("click", () => {
		colTasks.classList.add("map_col--collapsed");
	});
});
