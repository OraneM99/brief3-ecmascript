/* 1. Définir le tableau des tâches */
const taskList = [
    { title: 'Faire les courses', done: false },
    { title: 'Promener le chien', done: true },
    { title: 'Emener la voiture au garage', done: false }
  ];

/* 2. Ajouter une tâche */
const newTask = { title: 'Faire la vaiselle', done: true};

// Fonction fléchée pour ajouter une tâche au tableau
const addTask = (taskList, newTask) => [...taskList, newTask]; // Opérateur spread pour prendre tous les éléments de notre "taskList" et ajouter la nouvelle tâche

const newTaskList = addTask(taskList, newTask);
console.log(newTaskList);


/* 3. Effacer une tâche par son titre */
function removeTask(taskList, title) {
    const newTaskList = [...taskList];
    // On fait un filtre sur notre liste pour afficher que les tâches qui ont un titre différent que celui en entrée
    const filteredTaskList = newTaskList.filter(task => task.title !== title);
    return filteredTaskList;
}

const filteredTaskList = removeTask(taskList, "Faire les courses");
console.log(filteredTaskList);

/* 4. Basculer l'état d'une tâche */
const toggleTask = function(task) {
    task.done = task.done ? false : true;
    return task;
}

console.log(toggleTask(taskList[0]));

/* 5. Afficher la liste des tâches */
const showTasks = (taskList, status) => {
    return status === undefined ? taskList : taskList.filter(task => task.done === status);
}

console.log(showTasks(taskList, true));
console.log(showTasks(taskList, false));
console.log(showTasks(taskList));