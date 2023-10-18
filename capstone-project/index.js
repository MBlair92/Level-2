// // Get requests with axios

// // use this url: https://api.vschool.io/BlairM/todo

let todos = [];
function clearList() {
    const el = document.getElementById("todoList")
    while(el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

// Get All
const getAllTodos = () => {
    // Get todos from server
    axios.get("https://api.vschool.io/BlairM/todo")
        .then(response => {
            console.log(response.data);
            // Save data
            todos = response.data;
            displayTodos()
        })
        .catch(error => console.log(error))

    // Repopulate the html
    // displayTodos()
}

const displayTodos = () => {
    
    const listElement = document.getElementById('todoList');
    // Loop through todos and display html item for each todo
    clearList()
    for(let i = 0; i < todos.length; i++){
        // Current todo info
        let todoItem = todos[i]


        // Create list item 
        // Add class names, style
        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        

        // Create edit and delete
            // Create button elements
            // Edit button has a put request, id will be todoItem._id
            // Delete button - delete request with id


        const div = document.createElement('div')
        listElement.appendChild(div)

        const h1 = document.createElement('h1')
        h1.textContent = todos[i].title
        div.appendChild(h1)

        const price = document.createElement('price')
        price.textContent = todos[i].price
        div.appendChild(price)

        const h2 = document.createElement('h2')
        h2.textContent = todos[i].description
        div.appendChild(h2)

        const img = document.createElement('img')
        img.src = todos[i].imgUrl
        div.appendChild(img)


        const deleteButton = document.createElement('button')
        deleteButton.textContent = "X"
        div.appendChild(deleteButton)

        deleteButton.addEventListener('click', () => {
            console.log(todos[i]._id)
            axios.delete("https://api.vschool.io/BlairM/todo/" + todos[i]._id)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
            div.remove()
        })

        // const price = document.createElement(h3)
        if(todos[i].completed){
            checkBox.checked = true
            h1.style.textDecoration = 'line-through'
        }
        listElement.appendChild(checkBox)
        
        checkBox.addEventListener('change', function(){
            if(checkBox.checked === true){
                axios.put("https://api.vschool.io/BlairM/todo/" + todos[i]._id,{completed: true})
                .then(res => getAllTodos())
                .catch(err => console.log(err))
            }
            else if(checkBox.checked === false){
                axios.put("https://api.vschool.io/BlairM/todo/" + todos[i]._id,{completed: false})
                .then(res => getAllTodos())
                .catch(err => console.log(err))
            }
        })
    }
}

getAllTodos()

console.log('todos', todos)



// axios.get("https://api.vschool.io/BlairM/todo")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))


// // Get One use (https://api.vschool.io/<yourname>/todo/<todoId>)

//                                                     // <todoId>
// axios.get("https://api.vschool.io/BlairM/todo/64559fe378fe452c1149560b")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// // axios.get("https://api.vschool.io/BlairM/todo")
// //     .then(response => {
// //         for(let i = 0; i < response.data.length; i++){
// //             const h1 = document.createElement('h1')
// //             h1.textContent = response.data[i].title
// //             document.body.appendChild(h1)
// //         }
// //     })
// //     .catch(error => console.log(error))


// // Post requests with axios
// // use this (https://api.vschool.io/<yourname>/todo) same as Get

// const newTodo = {
//     title: "My test",
//     description: "This is my test",
//     imgUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
//     completed: false
// }


// post

const todoForm = document.getElementById('add-todo-form')

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        price: todoForm.price.value
    }

    console.log('newTodo', newTodo)

    axios.post("https://api.vschool.io/BlairM/todo", newTodo)
        .then(response => {
            console.log(response.data)
            getAllTodos()//displayTodos()
        })
        .catch(error => console.log(error))

    

// //     axios.post("https://api.vschool.io/BlairMs/todo", newTodo)
// //         .then(response => console.log(response.data))
// //         .catch(error => console.log(error))
// // 
})
// // Delete requests with axios
// // use (https://api.vschool.io/BlairM/todo/<todoId>) same as how you Get one

// const button = document.getElementById('delete-button')
// const deleteTodo = () => {
// // button.addEventListener("click", funcation(),{
//     axios.delete("https://api.vschool.io/BlairM/todo/")
//     .then(response => {
//         console.log(response.data)
//         getAllTodos()
//     })
//     .catch(error => console.log(error))
// // })
// }


// const deleteButton = document.getElementById('add-delete-button')

// deleteButton.addEventListener("click", function(event){
//     event.preventDefault()
//     axios.delete("https://api.vschool.io/BlairM/todo/652d7dee78fe452c114a6436")
//     .then(response => {
//         console.log(response.data)
//         getAllTodos()
//     })
//     .catch(error => console.log(error))
// })
