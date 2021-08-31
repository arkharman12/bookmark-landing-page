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