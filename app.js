var taskInput = document.querySelector('.taskInput');
var add = document.querySelector('.add-btn');
var list = document.getElementsByTagName('li');
add.addEventListener('click', function () {
    'use strict';
    if (taskInput.value !== "") {
        var input = document.createTextNode(taskInput.value);
        var newTask = document.createElement('li');
        newTask.appendChild(input);
        document.querySelector('.Tasklist').appendChild(newTask);
    }
    taskInput.value = "";
});
document.querySelector('.Tasklist').addEventListener('click', function (evt) {
    var taskFinished = evt.target;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === taskFinished) {
            list[i].style.textDecoration = 'line-through';
            list[i].style.color = 'red';
        }
    }
});
document.querySelector('.dateInput').addEventListener('click', function () {
    document.querySelector('.dateInput').value = "";
});