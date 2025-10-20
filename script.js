// nav toggle
function toggleNav() {
    const nav = document.getElementById("nav-container");
    const menuBtn = document.getElementById("menu-btn");

   if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    menuBtn.style.display = "block";
   } else {
    nav.classList.add("active");
    menuBtn.style.display = "none";
   }
}

function closeNav() {
    const nav = document.getElementById("nav-container");
    const menuBtn = this.document.getElementById("menu-btn");

    if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    menuBtn.style.display = "block";
   } else {
    nav.classList.add("active");
    menuBtn.style.display = "none";
   }
}

/*
// Auto close nav on scroll
window.addEventListener("scroll", function () {
    const nav = this.document.getElementById("nav-container");
    const menuBtn = this.document.getElementById("menu-btn");

    if(nav.classList.contains("active")) {
        nav.classList.remove("active");
        menuBtn.style.display = "block";
    }
}); */


// Hire Me Button
function openHireModal() {
    document.getElementById('hireModal').classList.add('active');
}
function closeHireModal() {
    document.getElementById('hireModal').classList.remove('active');
    document.getElementById('successMsg').classList.remove('show');

    document.querySelector('form').reset();
}

function handleContactForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;

    const subject = document.getElementById('subject').value;

    const message = document.getElementById('message').value;

    const emailBody = `From: ${name}\nEmail: ${email}\n\n ${message}`;

    const mailtoLink = `mailto:adeshinaadefoworah@gmail.com? 
    subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    document.getElementById('successMsg').classList.add('show');

    setTimeout(() => {
        closeHireModal();
    }, 2000);
}

window.onclick = function(e) {
    const modal = document.getElementById('hireModal');
    if (e.target === modal) {
        closeHireModal();
    }
};

//form auto expand
const textarea = document.getElementById("textarea");

textarea.addEventListener("input", function (){
    this.style.height = "auto"; //Reset height
    this.style.height = this.scrollHeight + "px"; //Set to scrollHeight
});

// email auto sender
function sendEmail() {
    sendEmail.send({
        SecureToken: "my-secure-token", // get the token from smtpjs.com
        To: "adeshinaadetolani@gmail.com", 
        From: document.getElementById("email").value,
        Subject: "New Project Description",
        Body: `
        Name: ${document.getElementById("name").value}<br>
        Email: ${document.getElementById("email").value}<br>
        Message: ${document.getElementById("message").value}        
        `
    }).then(
        message => alert=("Your Message has been sent successfully!")
    );
};

//Toggle active class on clicked button
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.button.active')?.classList.remove('active'); //remove current active
        button.classList.add('active'); // set new active
    });
});
