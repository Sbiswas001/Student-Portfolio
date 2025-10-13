// Heading animation
var typed= new Typed(".text",{
    strings:["Front End Developer","UI/UX Designer"],
    typeSpeed:60,
    backSpeed:50,
    loop:true
})

// loader
window.addEventListener('load', function() {
  // Delay the hiding of the loader for 3 seconds
  setTimeout(function() {
      document.getElementById('loader-container').classList.add('hidden');
  }, 3000); // 3000ms = 3 seconds
});

window.addEventListener('beforeunload', function() {
  // Show the loader again when the page is refreshed
  document.getElementById('loader-container').classList.remove('hidden');
});




// Initialize dark mode options 
const options = {
  bottom: '64px', 
  right: '32px',
  time: '0.5s',
  mixColor: '#fff', 
  backgroundColor: '#000',
  buttonColorDark: '#100f2c',
  buttonColorLight: '#fff',
  saveInCookies: true,
  label: '🌓', 
  autoMatchOsTheme: true
};

// Create the dark mode instance
const darkmode = new Darkmode(options);

// Function to change text color based on the mode
const updateHomeTextColor = () => {
  const homeElement = document.querySelector('.home');
  const boxElements = document.querySelectorAll('.box'); 

  if (darkmode.isActivated()) {
    homeElement.style.color = '#000000'; // Set text color to black for dark mode
    
    boxElements.forEach(box => {
      box.style.backgroundColor = '#000000'; // Set box background to black for dark mode
      box.style.color = '#ffffff'; // Set box text color to white
    });
  } else {
    homeElement.style.color = '#ffffff'; // Set text color to white for light mode

    boxElements.forEach(box => {
      box.style.backgroundColor = '#ffffff'; // Set box background to white for light mode
      box.style.color = '#000000'; // Set box text color to black
    });
  }
};

// Ensure correct theme is applied on page load
window.onload = () => {
  updateHomeTextColor();
};

// Listen for mode changes and update text color accordingly
document.getElementById('toggle-darkmode').addEventListener('click', () => {
  darkmode.toggle(); // Toggle the dark mode
  setTimeout(updateHomeTextColor, 500); // Small delay for transition
});
  
   

  
// Progress bar animation
const filled=document.querySelector(".progress-bar")
function update(){
    filled.style.width=`${((window.scrollY)/(document.body.scrollHeight-window.innerHeight)*100)}%`
    requestAnimationFrame(update);
}
update()

// CONTACT POP UP
// var submitbtn=document.getElementById("submit-btn")

// submitbtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     var form=document.getElementById("form")
//     var popmessage=document.getElementById("pop-message")
//     var Emessage=document.getElementById("email-message")

//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var comment = document.getElementById("comment").value;

//     var email_error=document.getElementById("email_error")

//     const emailpattern=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//     if(name==="" || email===""|| comment===""){
//         popmessage.textContent="please fill out all fields"
//         return
//     }

//     if(!emailpattern.test(email)){
//         popmessage.textContent= "Please enter a valid email address"
//         return;
//     }

//     form.reset();
//     popmessage.textContent="Submitted successfully!"

//     setTimeout(()=>{
//         popmessage.textContent=" "
//     },3000)
// } )

var submitbtn = document.getElementById("submit-btn");

submitbtn.addEventListener("click", (e) => {
    var form = document.getElementById("form");
    var popmessage = document.getElementById("pop-message");

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    const emailpattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (name === "" || email === "" || comment === "") {
        popmessage.textContent = "Please fill out all fields";
        e.preventDefault(); // Prevent form submission if validation fails
        return;
    }

    if (!emailpattern.test(email)) {
        popmessage.textContent = "Please enter a valid email address";
        e.preventDefault(); // Prevent form submission if email is invalid
        return;
    }

    // Reset form only after successful submission
    popmessage.textContent = "Submitted successfully!";
    setTimeout(() => {
        popmessage.textContent = "";
    }, 3000);
});




// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenelement = document.querySelectorAll('.box');

hiddenelement.forEach((element) => {
    observer.observe(element);
});

// loading
const loader=document.querySelector('.dot-spinner')
const main=document.querySelector('.main')
function loading(){
    setTimeout(()=>{
        loader.style.opacity=0
        loader.style.display='none'

        main.style.display='block'
        setTimeout((main.style.opacity=1),50)
        
    },2500)
}
loading()