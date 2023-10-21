$(document).ready(function () {
    
    function getTasks() {
        $.ajax({
            url: 'http://localhost:3000/tasks',
            method: 'GET',
            success: function (data) {
                
                updateTaskList(data);
            }
        });
    }

    // Add a new task
    $('#todo-form').submit(function (e) {
        e.preventDefault();
        let task = $('#task').val();
        $.ajax({
            url: 'http://localhost:3000/tasks',
            method: 'POST',
            data: { task: task },
            success: function () {
                
                $('#task').val('');
               
                getTasks();
            }
        });
    });

    
    function updateTaskList(data) {
        const taskList = $('#task-list');
        taskList.empty();
        data.forEach(function (task) {
            taskList.append(
                `<li class="list-group-item">
                    ${task.task}
                </li>`
            );
        });
    }

    
    getTasks();
});
