function addListItem(listId, text) {
    const li = document.createElement('li');
    li.textContent = text;
    document.getElementById(listId).appendChild(li);
}

// Aufgaben
const taskForm = document.getElementById('task-form');
if (taskForm) {
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = document.getElementById('task-input').value;
        const date = document.getElementById('task-date').value;
        addListItem('task-list', task + ' (' + date + ')');
        taskForm.reset();
    });
}

// Gäste
const guestForm = document.getElementById('guest-form');
if (guestForm) {
    guestForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const guest = document.getElementById('guest-input').value;
        addListItem('guest-list', guest);
        guestForm.reset();
    });
}

// Zeitplan
const scheduleForm = document.getElementById('schedule-form');
if (scheduleForm) {
    scheduleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const time = document.getElementById('schedule-time').value;
        const event = document.getElementById('schedule-event').value;
        addListItem('schedule-list', time + ' - ' + event);
        scheduleForm.reset();
    });
}
