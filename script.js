let button = document.querySelector('#addButton');
let work = document.querySelector('#addWork')
let displayWork = document.querySelector("#displayWork")

button.addEventListener('click', ()=> {
    if(work.value == "") {
        alert("Invalid Input");
        return;
    }
    displayToScreen()
})

function displayToScreen() {
    let div = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = work.value.trim();

    let checkButton = document.createElement("img");
    checkButton.classList.add('icon-btn');
    checkButton.src = "./images/unchecked.png"

    let removeButton = document.createElement('img');
    removeButton.classList.add('icon-btn');
    removeButton.src = "./images/cancel.png"

    div.appendChild(checkButton);
    div.appendChild(span);
    div.appendChild(removeButton);
    div.classList.add("div-btn")

    displayWork.appendChild(div);


    checkButton.addEventListener('click',()=> {
        if(div.childNodes[1].classList.toggle("completed")) {
            checkButton.src = "./images/checked.png"
        }
        else{
            checkButton.src = "./images/unchecked.png"
        }
    })

    removeButton.addEventListener("click", (event)=> {
        div.remove();
    })

    div.childNodes[1].addEventListener('dblclick', ()=> {
        let input = document.createElement('input');
        input.type = "text";
        input.value = div.childNodes[1].textContent.trim();
        input.classList.add("editInput")

        div.replaceChild(input, span);

        input.addEventListener("keydown", (e)=>{
            if(e.key === "Enter") {
                let newspan = document.createElement("span");
                newspan.textContent = input.value.trim();

                
                div.replaceChild(newspan, input);
            }
            
        })
    })

    work.value = "";
}