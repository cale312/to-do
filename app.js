var taskInput = document.querySelector('.task');
var taskList = JSON.parse(localStorage.getItem('taskList'));
var checkList = document.querySelector('.taskList');
var add = document.querySelector('.add-btn');

var checkBox = document.querySelector('.checkBox').innerHTML;
var template =  Handlebars.compile(checkBox);

checkList.innerHTML = template({list: JSON.parse(localStorage.getItem('taskList'))});

add.addEventListener('click', function () {
    'use strict';
    var newTaskList = {task: taskInput.value};
    if (taskInput.value !== "") {
        taskList.push(newTaskList);
        localStorage.setItem('taskList', JSON.stringify(taskList));
        checkList.innerHTML = template({list: JSON.parse(localStorage.getItem('taskList'))});
    }
    taskInput.value = "";
});

checkList.addEventListener('click', function (evt) {
    'use strict';
    var taskToDelete = evt.target.value;
    var index = taskList.indexOf(taskToDelete);
    var newTaskList = [];
    for (var i = 0; i < taskList.length; i++) {
        var listTask = taskList[i];
        if (listTask.task != taskToDelete) {
            newTaskList.push(listTask)
        }
    }
    taskList.splice(index, taskToDelete);
    localStorage.setItem('taskList', JSON.stringify(taskList))
    taskList = newTaskList;
    if (taskToDelete != "on") {
        checkList.innerHTML = template({list: taskList});
    }
});
document.querySelector('.date').addEventListener('click', function () {
    document.querySelector('.date').value = "";
});