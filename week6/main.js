const list = document.querySelector('ul');

const input = document.querySelector('input');

const button = document.querySelector('button');

button.addEventListener('click', function() {
    let job = input.value;
    input.value = '';

    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    const taskBtn = document.createElement('button');
    const checkBtn = document.createElement('button');

    taskItem.appendChild(taskText);
    taskText.textContent = job;
    taskItem.appendChild(taskBtn);
    taskBtn.textContent = 'Delete';
    list.appendChild(taskItem);
    taskItem.appendChild(checkBtn);
    checkBtn.textContent = 'Complete';

    taskBtn.addEventListener('click', function() {
        taskItem.remove();
    });

    checkBtn.addEventListener('click', function() {
        taskText.style.textDecoration = "line-through";
    })

});

    input.focus();