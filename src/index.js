// document.addEventListener("DOMContentLoaded", () => {
  
// });
// const main = document.querySelector("#main-content")
// console.log(main)


const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e){
  e.preventDefault()
  const newTask = document.querySelector("#new-task-description").value

  taskList.innerHTML += `<li> ${newTask} <button data-action="delete"> X </button></li>`


  // The above method is applying logic to user input which can be risky OR do this ...
  // const taskItem = document.createElement("li")
  // taskItem.innerText = newTask
  // taskList.appendChild(taskItem)
  taskForm.reset()
})

taskList.addEventListener("click", function(e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})