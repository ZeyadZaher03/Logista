firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        window.location.replace("signup.html");
    } else {
        // User not logged in or has just logged out.
    }
});

// get uid 
const uid = Cookies.get("uid")

// add task
const addTaskForm = document.querySelector(".addTask");
const addTaskName = addTaskForm["task_name"]
const addTaskDriverName = addTaskForm["task_driver"]

addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    db.ref(`users/${uid}/tasks`).push({
        tasksName: addTaskName.value,
        tasksDriverName: addTaskDriverName.value,
        userId: uid
    })
})

// read tasks
db.ref(`users/${uid}/tasks`).on("value", function (tasks) {
    tasks.forEach((taskData) => {
        task = taskData.val()
        taskName = task.tasksName
        taskDriver = task.tasksDriverName
        taskUser = task.userId
        console.log("task")
        console.log(taskUser)
        console.log(taskName)
        console.log(taskDriver)
    })
})

// add driver
const addDriverForm = document.querySelector(".addDriver");
const addDriverName = addDriverForm["driver_name"]
const addDriverDriverName = addDriverForm["driver_number"]

addDriverForm.addEventListener("submit", (e) => {
    e.preventDefault()
    db.ref(`users/${uid}/drivers`).push({
        driverName: addDriverName.value,
        driverNumber: addDriverDriverName.value,
        userId: uid
    })
})

// read driver
db.ref(`users/${uid}/drivers`).on("value", function (drivers) {
    drivers.forEach((driverData) => {
        driver = driverData.val()
        driverName = driver.driverName
        driverNumber = driver.driverNumber
        driverUser = driver.userId

        console.log("driver")
        console.log(driverName)
        console.log(driverNumber)
        console.log(driverUser)
    })
})


//logout
const logoutBtn = document.querySelector("#logoutBtn")
logoutBtn.addEventListener("click", () => auth.signOut())


// init the map
function initMap() {
    var options = {
        zoom: 20,
        center: {
            lat: 28.912616,
            lng: 26.426906
        }
    }
    var maps = new google.maps.Map(document.querySelector(".map_container"), options)
};


// Front-End styling
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
    ".createTaskBtnItem",
    ".createTaskContainerItem",
    "nav_popup--active"
);


toggleHideAndShow(
    ".addDriverBtn",
    ".addDriverContainer",
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