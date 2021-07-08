import Icon from './download.png';

const functionOne = ()=>{
    console.log("funciton 1")
}

const functionTwo =()=>{
    let elem = document.createElement("div")
    elem.textContent = "Function 2"
    elem.addEventListener("click", functionOne)
    elem.classList.add("test")
    document.body.appendChild(elem)
    let myImg = new Image()
    myImg.src = Icon
    elem.appendChild(myImg)
}

export {functionOne, functionTwo}