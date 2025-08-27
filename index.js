// ReUseable Functions

function getElement(id) {
    return document.getElementById(id);
}

// target the all heart buttons
const hearts = document.getElementsByClassName("heart");

// click event added for update the hearts count;
const lifeBtn = getElement("life-btn");
let lifeBtnValue = parseFloat(lifeBtn.innerText);
for (const heart of hearts) {
    heart.addEventListener("click", function () {
        lifeBtnValue = lifeBtnValue + 1;
        lifeBtn.innerText = lifeBtnValue;
    });
}

// target the all call buttons
const callBtns = document.getElementsByClassName('call-btn');

// click event reduce the credit;
const criditBtn = getElement('cridit-btn');
let criditBtnValue = parseFloat(criditBtn.innerText);

for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function(){

        // validation if coin less then 20 the show an alert and stop the event;
        if(criditBtnValue < 20){
            return alert("You have insufficient coin")
        }
        
        // each call reduce the 20 coin;
        criditBtnValue = criditBtnValue - 20;
        criditBtn.innerText = criditBtnValue;

        const serviceName = callBtn.parentElement.parentElement.children[1].children[0].innerText;
        console.log(serviceName);
    })
}

