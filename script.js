const menuBar = document.querySelector('#menu');
const navBar = document.querySelector('.nav-bar');
menuBar.onclick=()=>{
  menuBar.classList.toggle("bx-x");
  navBar.classList.toggle("active");

}

// instagram
const instaGram = document.querySelector('#instaGram');
instaGram.addEventListener("click",()=>{
  window.open("https://www.instagram.com/ets_shadab?igsh=bmQxOXdsbXB1NmJh")

});

//twitter 
const twitterX = document.querySelector("#Twitter");
twitterX.addEventListener("click",()=>{
  window.open("https://x.com/MdShadab98?t=Og3kF95Ml7Jp6n2Ao3jwtg&s=09")
});

// gamil sender 
const gMail = document.querySelector("#GMail");
gMail.addEventListener("click",()=>{
 const gMailID = "mohdshadab98977@gmail.com";
 const subject = "Inquiry from portfolio website";
 const body =  "Hello,\n\nI am reaching out to you through your portfolio website. I have some regarding your work.\n\nThank you";
 const mailtoLink = `mailto:${gMailID}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
});

// let's talk worked icon whatsApp

const whatsApp = document.querySelector("#talkChat");
whatsApp.addEventListener("click",()=>{
  const phoneNumber = "9528258735";

  const whatsAppURL = `whatsapp://send?phone=${phoneNumber}`;

  window.location.href = whatsAppURL;
})


//download resume button clicked 

const resumeBtn = document.querySelector("#resume-download");

resumeBtn.addEventListener("click",()=>{
 const fileUrl = " mohd shadab resume.pdf";
 const filename = "mohd_shadab_resume.pdf";
 const link = document.createElement("a");
 link.href = fileUrl;
 link.download = filename;
 link.click();
});

