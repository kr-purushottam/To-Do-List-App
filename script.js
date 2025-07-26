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

    removeButton.addEventListener("click", ()=> {
        div.remove();
    })

    makeSpanEditable(span, div)

    work.value = "";
}


function makeSpanEditable(span, div) {
  span.addEventListener("dblclick", () => {
    const input = document.createElement("input");
    input.value = span.textContent.trim();
    input.classList.add("editInput");

    div.replaceChild(input, span);

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const newspan = document.createElement("span");
        newspan.textContent = input.value.trim();

        // carry over completed class
        if (span.classList.contains("completed")) {
          newspan.classList.add("completed");
        }

        // reattach the edit logic
        makeSpanEditable(newspan, div);

        div.replaceChild(newspan, input);
      }
    });
  });
}