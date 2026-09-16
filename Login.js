const agree = document.querySelector("#submit");
const passinput = document.querySelector("#pass");
const message = document.querySelector(".rule1");

passinput.addEventListener("keyup" , function () {
    if (passinput.value.length < 8) {
        message.style.color = `red`;
    } else{
        message.style.color = `lime`;
    }
});

agree.addEventListener("click" , function (event) {
    if (passinput.value.length >= 8) {
        alert(`وارد شدید ✅`)
    }

    
    event.preventDefault();
});