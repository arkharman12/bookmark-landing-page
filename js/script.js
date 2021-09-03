// Tabs
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// FAQ Accordion
let questions = document.getElementsByClassName('accordion');

let i;
let numOpened = 0;

for(i=0;i<questions.length; i++) {
    
    questions[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let answer = this.nextElementSibling;
        
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            numOpened--;
        } else {
            if (numOpened > 0) {
                document.querySelectorAll(".accordion-content").forEach(a=>a.style.maxHeight = null);
                document.querySelectorAll(".accordion").forEach(a=>a.classList.remove('active'))
                this.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                numOpened++;
            }
        }
        
    });
}

// Email validation
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector("#submit-btn");
const errorMsg = document.querySelector("#error-message");
const successMsg = document.querySelector("#success-message");
const errorIcon = document.querySelector("#error-icon");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let inputValue = emailInput.value;
    let error = "";
    let success = "";
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputValue.match(mailFormat)) {
        success = "Success!";
        errorIcon.style.display = "none";
        emailInput.style.border = "2px solid transparent";
    } else if (inputValue === "") {
        error = "Whoops, make sure it's an email";
        errorIcon.style.display = "block";
        emailInput.style.borderTop = "2px solid hsl(0, 94%, 66%)";
        emailInput.style.borderRight = "2px solid hsl(0, 94%, 66%)";
        emailInput.style.borderBottom = "2px solid hsl(0, 94%, 66%)";
        emailInput.style.borderLeft = "2px solid hsl(0, 94%, 66%)";
    } else {
        error = "Whoops, make sure it's an email";
        errorIcon.style.display = "block";
        emailInput.style.borderTop = "2px solid hsl(0, 94%, 66%)";
        emailInput.style.borderRight = "2px solid hsl(0, 94%, 66%)";
        emailInput.style.borderBottom = "2px solid hsl(0, 94%, 66%)";
        emailInput.style.borderLeft = "2px solid hsl(0, 94%, 66%)";
    }
    
    successMsg.innerHTML = success;
    errorMsg.innerHTML = error;
})