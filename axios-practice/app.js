const apiUrl = "https://api.vschool.io/BlairM/todo/"; // Replace with your API URL

const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');

// Function to fetch and display todos
const fetchTodos = () => {
    axios.get(apiUrl)
        .then((response) => {
            const todos = response.data;
            todoList.innerHTML = '';

            todos.forEach((todo) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>${todo.title}</span>
                    <button class="delete" data-id="${todo.id}">Delete</button>
                `;
                todoList.appendChild(listItem);

                const deleteButton = listItem.querySelector('.delete');
                deleteButton.addEventListener('click', deleteTodo);
            });
        })
        .catch((error) => {
            console.error(error);
        });
};

// Function to add a new todo
const addTodo = () => {
    const title = todoInput.value;

    if (title.trim() === '') return;

    axios.post(apiUrl, { title })
        .then(() => {
            todoInput.value = '';
            fetchTodos();
        })
        .catch((error) => {
            console.error(error);
        });
};

// Function to delete a todo
const deleteTodo = (event) => {
    const todoId = event.target.getAttribute('data-id');

    axios.delete(`${apiUrl}/${todoId}`)
        .then(() => {
            fetchTodos();
        })
        .catch((error) => {
            console.error(error);
        });
};

addTodoButton.addEventListener('click', addTodo);
fetchTodos(); // Fetch and display todos on page load
