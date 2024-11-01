const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const currentDateHTML = document.querySelector(".card-date");


const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const nameWeek = date.getDay();
const year = date.getFullYear();

const monthCurrent = {
   0: "January",
   1: "February",
   2: "March",
   3: "April",
   4: "May",
   5: "June",
   6: "July ",
   7: "August",
   8: "September",
   9: "October ",
   10: "November",
   11: "December "
}
const nameWeekCurrent = {
   0: "Sunday",
   1: "Monday",
   2: "Tuesday",
   3: "Wednesday",
   4: "Thursday",
   5: "Friday",
   6: "Saturday"
}

function currentDate(obj, value) {
   for (const [property, valueActual] of Object.entries(obj)) {
      if (property == value) {
         return valueActual;
      }
   }
}
const actualMonth = currentDate(monthCurrent, month);
const actualNameOfWeek = currentDate(nameWeekCurrent, nameWeek);


let addHtml = currentDateHTML.innerHTML = `
            <span id="nameOfWeek">${actualNameOfWeek},</span>
               <div>
                  <span id="numberOfMonth">${day}</span>
                  <span id="nameOfMonth">${actualMonth}</span>
                  <span id="year">${year}</span>
               </div>`

const createTaskHTML = (task) => {
   return `<li>
                     <span>${task}</span>
                     <div>
                        <button id="delete-task-btn" class="delete-task-btn"><svg xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100" width="20px" height="20px">
                              <path fill="#f37e98"
                                 d="M25,30l3.645,47.383C28.845,79.988,31.017,82,33.63,82h32.74c2.613,0,4.785-2.012,4.985-4.617L75,30" />
                              <path fill="#f15b6c"
                                 d="M65 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S65 36.35 65 38zM53 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S53 36.35 53 38zM41 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S41 36.35 41 38zM77 24h-4l-1.835-3.058C70.442 19.737 69.14 19 67.735 19h-35.47c-1.405 0-2.707.737-3.43 1.942L27 24h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h54c1.657 0 3-1.343 3-3S78.657 24 77 24z" />
                              <path fill="#1f212b"
                                 d="M66.37 83H33.63c-3.116 0-5.744-2.434-5.982-5.54l-3.645-47.383 1.994-.154 3.645 47.384C29.801 79.378 31.553 81 33.63 81H66.37c2.077 0 3.829-1.622 3.988-3.692l3.645-47.385 1.994.154-3.645 47.384C72.113 80.566 69.485 83 66.37 83zM56 20c-.552 0-1-.447-1-1v-3c0-.552-.449-1-1-1h-8c-.551 0-1 .448-1 1v3c0 .553-.448 1-1 1s-1-.447-1-1v-3c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v3C57 19.553 56.552 20 56 20z" />
                              <path fill="#1f212b"
                                 d="M77,31H23c-2.206,0-4-1.794-4-4s1.794-4,4-4h3.434l1.543-2.572C28.875,18.931,30.518,18,32.265,18h35.471c1.747,0,3.389,0.931,4.287,2.428L73.566,23H77c2.206,0,4,1.794,4,4S79.206,31,77,31z M23,25c-1.103,0-2,0.897-2,2s0.897,2,2,2h54c1.103,0,2-0.897,2-2s-0.897-2-2-2h-4c-0.351,0-0.677-0.185-0.857-0.485l-1.835-3.058C69.769,20.559,68.783,20,67.735,20H32.265c-1.048,0-2.033,0.559-2.572,1.457l-1.835,3.058C27.677,24.815,27.351,25,27,25H23z" />
                              <path fill="#1f212b"
                                 d="M61.5 25h-36c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h36c.276 0 .5.224.5.5S61.776 25 61.5 25zM73.5 25h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5S73.776 25 73.5 25zM66.5 25h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S66.776 25 66.5 25zM50 76c-1.654 0-3-1.346-3-3V38c0-1.654 1.346-3 3-3s3 1.346 3 3v25.5c0 .276-.224.5-.5.5S52 63.776 52 63.5V38c0-1.103-.897-2-2-2s-2 .897-2 2v35c0 1.103.897 2 2 2s2-.897 2-2v-3.5c0-.276.224-.5.5-.5s.5.224.5.5V73C53 74.654 51.654 76 50 76zM62 76c-1.654 0-3-1.346-3-3V47.5c0-.276.224-.5.5-.5s.5.224.5.5V73c0 1.103.897 2 2 2s2-.897 2-2V38c0-1.103-.897-2-2-2s-2 .897-2 2v1.5c0 .276-.224.5-.5.5S59 39.776 59 39.5V38c0-1.654 1.346-3 3-3s3 1.346 3 3v35C65 74.654 63.654 76 62 76z" />
                              <path fill="#1f212b"
                                 d="M59.5 45c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2C60 44.776 59.776 45 59.5 45zM38 76c-1.654 0-3-1.346-3-3V38c0-1.654 1.346-3 3-3s3 1.346 3 3v35C41 74.654 39.654 76 38 76zM38 36c-1.103 0-2 .897-2 2v35c0 1.103.897 2 2 2s2-.897 2-2V38C40 36.897 39.103 36 38 36z" />
                           </svg>
                        </button>
                        <button id="edit-task-btn" class="edit-task-btn">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
                              <path
                                 d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z" />
                           </svg>
                        </button>
                     </div>
            </li>`;
};

const deleteTask = (taskItem) => {
   if (confirm("Are you sure to delete this task?")) {
      const taskText = taskItem.closest("li").querySelector("span").innerText;
      taskItem.closest("li").remove();
      editTaskFromLocalStorage();
   }
}
const editTask = (taskItem) => {
   const taskEdited = prompt("Edit task");
   if (taskEdited !== null) {
      taskItem.closest("li").querySelector("span").innerText = taskEdited;
      editTaskFromLocalStorage();
   }
}
const storeTaskInLocalStorage = (task) => {
   const tasks = JSON.parse(localStorage.getItem("task") || "[]");
   tasks.push(task);
   localStorage.setItem("task", JSON.stringify(tasks));
}
const loadTaskOld = () => {
   const tasks = JSON.parse(localStorage.getItem("task") || "[]");
   tasks.forEach((task) => {
      taskList.innerHTML += createTaskHTML(task);
   });
}
const editTaskFromLocalStorage = () => {
   const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => {
      return li.querySelector("span").textContent;
   });
   localStorage.setItem("task", JSON.stringify(tasks));

}
loadTaskOld();

taskForm.addEventListener("submit", (e) => {
   e.preventDefault();
   const taskInput = document.getElementById("new-task");
   const taskInputValue = taskInput.value;

   const newTaskHTML = createTaskHTML(taskInputValue);
   taskList.insertAdjacentHTML("beforeend", newTaskHTML);

   const newTaskItem = taskList.lastElementChild;
   newTaskItem.classList.toggle("animate__animated");
   newTaskItem.classList.toggle("animate__fadeInDown");

   storeTaskInLocalStorage(taskInputValue);
   taskInput.value = "";
});

taskList.addEventListener("click", (e) => {
   const button = e.target.closest("button")
   if (button.classList.contains("delete-task-btn")) {
      deleteTask(button);
   } else if (button.classList.contains("edit-task-btn")) {
      editTask(button);
   }

})
