const scriptURL = ''
const form = document.forms['submit-to-google-sheet']
const mg = document.getElementById('mg')
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        mg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            mg.innerHTML = ""
        },3000)
        form.reset()
        })
    })
    .catch(error => console.error('Error!', error.message))

// ScollReveal Animation
const sr=ScollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal('.text',{delay:200,origin:'top'})
sr.reveal('.form-container form',{delay:800,origin:'left'})
sr.reveal('.heading',{delay:800,origin:'top'})
sr.reveal('.ride-container .box',{delay:600,origin:'top'})
sr.reveal('.services-container .box',{delay:600,origin:'top'})
sr.reveal('.about-container .box',{delay:600,origin:'top'})
sr.reveal('.reviews-container',{delay:600,origin:'top'})
sr.reveal('.newsletter .box',{delay:400,origin:'bottom'})