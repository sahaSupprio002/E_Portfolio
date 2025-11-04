
// nav button scroll
const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // adjust for header height
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
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




