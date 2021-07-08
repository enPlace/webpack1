const functionOne = ()=>{
    console.log("funciton 1")
}

const functionTwo =()=>{
    let elem = document.createElement("div")
    elem.textContent = "Function 2"
    elem.addEventListener("click", functionOne)
    document.body.appendChild(elem)
}

export {functionOne, functionTwo}