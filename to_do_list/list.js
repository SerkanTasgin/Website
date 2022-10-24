let tasksData = [];

function getNewTask(){
    let input = document.querySelector('input');
    let newTask = input.value;
    tasksData.push(newTask)
    return newTask;
}
 
let tasks = document.querySelector('#tasks');

function createTask(){
    const section = document.createElement('section');

    const p = document.createElement('p');

    const update = document.createElement('button');
    const updateButtonText = document.createTextNode('Update');
    update.appendChild(updateButtonText);

    const delet = document.createElement('button');
    const deleteButtonText = document.createTextNode('Delete');
    delet.appendChild(deleteButtonText)
    
    p.innerText = getNewTask();

    section.appendChild(p);
    section.appendChild(update);
    section.appendChild(delet);

    tasks.appendChild(section);
}