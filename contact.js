const contactForm = document.getElementById("contactForm")

const validate = (elements) => {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if(!element.value) {
            const error = document.createElement("p");
            const label = element.parentElement.getElementsByTagName("label");
            error.innerHTML = `${label[0].innerText} is Required`; 
            error.style = "color:red; font-size: 12px; font-weight: 300";
            element̨̃.parentNode.appendChild(error)
        }
    }
}

contactForm.onsubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");

    const name = document.getElementById("txtName");
    const email = document.getElementById("txtEmail");
    const tel = document.getElementById("txtTel");
    const subject = document.getElementById("txtSubject");
    const message = document.getElementById("txtMessage");

    validate([
        name,
        email,
        tel,
        subject,
        message
    ]);
    
    console.log({
        name: name.value,
        email: email.value,
        tel: tel.value,
        subject: subject.value,
        message: message.value
    });
}

console.log(contactForm);