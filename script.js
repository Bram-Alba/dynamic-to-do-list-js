// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the input and remove whitespace

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

 // Create a new list item
const li = document.createElement('li');

// Create a text node for the task
const taskNode = document.createTextNode(taskText);

// Append the text node to the li
li.appendChild(taskNode);

// Create remove button
const removeBtn = document.createElement('button');
removeBtn.textContent = 'Remove';
removeBtn.className = 'remove-btn';

// Attach click event to remove the task
removeBtn.onclick = function() {
    taskList.removeChild(li);
};

// Append the remove button to the li
li.appendChild(removeBtn);

// Append li to the task list
taskList.appendChild(li);

// Clear input
taskInput.value = '';

    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
