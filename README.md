
Contexte du projet

Dans ce brief :

Ce qu'est l'ECMAScript pour JavaScript.<br>
Pourquoi la version 6 est si importante.<br>
À écrire du JavaScript de manière moderne et optimisée grâce aux fonctionnalités introduites depuis l'ES2015, aussi appelée ES6.

----

1. Définir le tableau des tâches

```js
const taskList = [
    { title: 'Faire les courses', done: false },
    { title: 'Promener le chien', done: true },
    { title: 'Emener la voiture au garage', done: false }
  ];
```

2. Ajouter une tâche

```js
const newTask = { title: 'Faire la vaiselle', done: true};

// Fonction fléchée pour ajouter une tâche au tableau
const addTask = (taskList, newTask) => [...taskList, newTask];

const newTaskList = addTask(taskList, newTask);
console.log(newTaskList);
```

3. Effacer une tâche par son titre

```js
function removeTask(taskList, title) {
    const newTaskList = [...taskList];
    const filteredTaskList = newTaskList.filter(task => task.title != title);
    return filteredTaskList;
}

const filteredTaskList = removeTask(taskList, "Faire les courses");
console.log(filteredTaskList);
```

4. Basculer l'état d'une tâche

```js
const toggleTask = function(task) {
    task.done = true.done ? false : true;
    return task;
}

console.log(toggleTask(taskList[0]));
```

5. Afficher les listes de tâches

```js
function showTasks(taskList, status) {
    switch(status) {
        case 1 :
            console.log("Toutes les tâches : ");
            taskList.forEach(task => {
                console.log(task);
            })
            break;

        case 2 :
            console.log("Uniquement les tâches complétées : ");
            taskList.forEach(task => {
                if (task.done == true) {
                    console.log(task);
                }
            });
            break;

        case 3 :
            console.log("Seulement les tâches incomplètes : ");
            taskList.forEach(task => {
                if (task.done == false) {
                    console.log(task);
                }
            })
            break;

        default :
            console.log("Statut invalide.");
    }
}

showTasks(taskList, 1);
showTasks(taskList, 2);
showTasks(taskList, 3);
```
