// Get DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Array to store todos
let todos = [];

// Function to render todos
function renderTodos() {
    // Clear the current list
    todoList.innerHTML = '';
    
    // Add each todo to the list
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${todo}
            <button class="btn btn-danger btn-sm delete-btn" data-index="${index}">Delete</button>
        `;
        todoList.appendChild(li);
    });
    
    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            deleteTodo(index);
        });
    });
}

// Function to add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText);
        todoInput.value = '';
        renderTodos();
    }
}

// Function to delete a todo
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Event listeners
addBtn.addEventListener('click', addTodo);

// Allow adding todos with Enter key
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Initial render (in case there are any todos in the array)
renderTodos();