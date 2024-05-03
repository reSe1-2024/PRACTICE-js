/* let addIcon = document.getElementById("add-icon")
let minusIcon = document.getElementById("minus-icon") */
let countHr = document.getElementById("count-Hr")
let saveHr = document.getElementById("save-hr")


let count = 0

function add(){
    count += 1
    countHr.textContent = count
}
function minus(){
    count -= 1
    countHr.textContent = count
}
function submit(){
    let submitStr = count + " - "
    saveHr.textContent += submitStr
    countHr.textContent = 0
    count = 0
    console.log("count")
}
