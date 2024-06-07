// CALENDAR SCRIPT
// Credit: https://code.tutsplus.com/learn-how-to-code-a-simple-javascript-calendar-and-datepicker--cms-108322t
let display = document.querySelector(".display")
let days = document.querySelector(".days")
let previous = document.querySelector(".left")
let next = document.querySelector(".right")
let selected = document.querySelector(".selected")
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()

function displayCalendar() {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const firstDayIndex = firstDay.getDay(); //4
  const numberOfDays = lastDay.getDate(); //31
  let formattedDate = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  })
  display.innerHTML = `${formattedDate}`
  for (let x = 1; x <= firstDayIndex; x++) {
    const div = document.createElement("div")
    div.innerHTML += ""
    days.appendChild(div)
  }
  for (let i = 1; i <= numberOfDays; i++) {
    let div = document.createElement("div")
    let currentDate = new Date(year, month, i)
    div.dataset.date = currentDate.toDateString()
    div.innerHTML += i
    days.appendChild(div)
    if (
      currentDate.getFullYear() === new Date().getFullYear() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getDate() === new Date().getDate()
    ) {
      div.classList.add("current-date")
    }
  }
}
// Call the function to display the calendar
displayCalendar()
previous.addEventListener("click", () => {
  days.innerHTML = ""
  selected.innerHTML = ""
  if (month < 0) {
    month = 11;
    year = year - 1
  }
  month = month - 1
  date.setMonth(month)
  displayCalendar()
  displaySelected()
})
next.addEventListener("click", () => {
  days.innerHTML = ""
  selected.innerHTML = ""

  if (month > 11) {
    month = 0;
    year = year + 1
  }
  month = month + 1
  date.setMonth(month)

  displayCalendar()
  displaySelected()
})

// TASK SCRIPT
const myTaskList = document.getElementsByTagName("LI")
let i;
for (i = 0; i < myTaskList.length; i++) {
  const span = document.createElement("SPAN")
  const txt = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(txt)
  myTaskList[i].appendChild(span)
}
const close = document.getElementsByClassName("close")
 i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement
    div.style.display = "none"
  }
}
const list = document.querySelector('ul')
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked')
  }
}, false)


function newElement() {
  const li = document.createElement("li")
  const inputValue = document.getElementById("myInput").value
  const t = document.createTextNode(inputValue)

  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!")
  } else {
    document.getElementById("myUL").appendChild(li)
  }
  document.getElementById("myInput").value = ""

  const span = document.createElement("SPAN")
  const txt = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(txt)
  li.appendChild(span)

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement
      div.style.display = "none"
    }
  }
}





// newElement('click', async (e) => {
//   e.preventDefault()
//     const li = document.createElement("li")
//     const inputValue = document.getElementById("myInput").value
//     const t = document.createTextNode(inputValue)

//     let url = `http://localhost:3001/task/${inputValue}`
//     let response = await axios.get(url)

//     li.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!")
//     } else {
//       document.getElementById("myUL").appendChild(li)
//     }
//     document.getElementById("myInput").value = ""

//     const span = document.createElement("SPAN")
//     const txt = document.createTextNode("\u00D7")
//     span.className = "close"
//     span.appendChild(txt)
//     li.appendChild(span)

//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         const div = this.parentElement
//         div.style.display = "none"
//       }
//     }
// })






