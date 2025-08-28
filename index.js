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
const callBtns = document.getElementsByClassName("call-btn");

// click event reduce the credit;
const criditBtn = getElement("cridit-btn");
let criditBtnValue = parseFloat(criditBtn.innerText);

for (const callBtn of callBtns) {
    callBtn.addEventListener("click", function () {
        // validation if coin less then 20 the show an alert and stop the event;
        if (criditBtnValue < 20) {
            return alert("You have insufficient coin");
        }

        // store the service name and number in different variable;
        const serviceName = callBtn.parentElement.parentElement.children[1].children[0].innerText;
        const serviceNumber = callBtn.parentElement.parentElement.children[2].children[0].innerText;

        // each call reduce the 20 coin;
        criditBtnValue = criditBtnValue - 20;
        criditBtn.innerText = criditBtnValue;

        // when click the call button then show the alert with service name & service number;
        alert(`Calling to ${serviceName} - Service number is ${serviceNumber}`);

        // keep the time  current time in a variable
        function timeAMorPM(hour) {
            const currentTime = new Date();
            if (hour >= 12) {
                const currentTimeConvertToLocalTime = currentTime.toLocaleTimeString() + " " + "PM";
                return currentTimeConvertToLocalTime;
            } else {
                const currentTimeConvertToLocalTime = currentTime.toLocaleTimeString() + " " + "AM";
                return currentTimeConvertToLocalTime;
            }
        }

        // dynamically add the service name & number with calling history field;
        const callHistory = document.getElementById("history-section-store");
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
                <div class="flex justify-between items-center bg-[#9a9a9a2b] mx-3 px-4 rounded-lg mt-4">
                    <div>
                        <h4 class="text-sm font-bold">${serviceName}</h4>
                        <p class="text-[#5C5C5C]">${serviceNumber}</p>
                    </div>
                    <div>
                        <p>${timeAMorPM()}</p>
                    </div>
                </div>

        `;

        callHistory.appendChild(newDiv);

        // clear button event added;
        const clearBtn = document.getElementById('clear-btn');
        clearBtn.addEventListener('click', function(){
            document.getElementById('history-section-store').innerHTML  = '';
        })
    });

    
}
