const menu = document.querySelector(".menu-icon");
const links = document.querySelector("#mobile-menu");

const contactForm = document.querySelector('#contact-form');

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    links.classList.toggle("active");
})

document.querySelectorAll(".mobile-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    links.classList.remove("active");
}))

contactForm.addEventListener('submit', (e)=>{
    // prevents auto refresh of webpage after submitting contact form
    e.preventDefault();
})

function SendMail() {
    var params = {
        name: document.getElementById("form-name").value,
        email: document.getElementById("form-email").value,
        subject: document.getElementById("form-subject").value,
        message: document.getElementById("form-message").value,
    }

    const serviceID = "service_ikj8q7k";
    const templateID = "template_q4pwaun";
    emailjs.send(serviceID, templateID, params)
    .then(function(response) {
        document.getElementById("form-name").value = "";
        document.getElementById("form-email").value = "";
        document.getElementById("form-subject").value = "";
        document.getElementById("form-message").value = "";

        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully");
    })
    .catch((err) => console.log(err));
}