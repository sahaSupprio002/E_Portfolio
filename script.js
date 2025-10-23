
// nav button scroll
const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });



// random text typing effect
const texts = [
      "Hello, World!",
      "Welcome to the Web!",
      "CSS is awesome!",
      "JavaScript is dynamic!",
      "Enjoy coding!"
 ];

const textElement = document.getElementById("randomText");
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let typingInterval;

    function typeText() {
      if (charIndex < currentText.length) {
        textElement.textContent += currentText.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // Wait 1 second and start next sentence
        setTimeout(() => {
          textIndex = (textIndex + 1) % texts.length;
          startTyping();
        }, 2000);
      }
    }

    function startTyping() {
      textElement.textContent = '';
      currentText = texts[textIndex];
      charIndex = 0;
      typingInterval = setInterval(typeText, 100); // 100ms per character
    }

    startTyping(); 



// fixed Scroll
// let scrollTimeout;
//   const scrollSections = document.querySelectorAll("section");
//   let currentSection = 0;

//   // Disable browser auto scroll
//   if ("scrollRestoration" in history) {
//     history.scrollRestoration = "manual";
//   }

//   window.onload = function () {
//     currentSection = 0;
//     scrollSections[currentSection].scrollIntoView({ behavior: "auto" });
//   };

//   window.addEventListener("wheel", function (e) {
//     e.preventDefault();

//     if (scrollTimeout) return;

//     if (e.deltaY > 0) {
//       currentSection = Math.min(currentSection + 1, scrollSections.length - 1);
//     } else {
//       currentSection = Math.max(currentSection - 1, 0);
//     }

//     scrollSections[currentSection].scrollIntoView({ behavior: "smooth" });

//     scrollTimeout = setTimeout(() => {
//       scrollTimeout = null;
//     }, 1000);
//   }, { passive: false });

