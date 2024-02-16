let form = document.getElementById("form")
let input = document.getElementById("input")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    addToDo()
})

let todoList = []
let addToDo = () => {
    let newToDo = input.value
    if (!newToDo) {
        alert("no value")
    }
    todoList.push({
        Text: newToDo,
        completed: false
    })

    localStorage.setItem("listToDo", JSON.stringify(todoList))
}