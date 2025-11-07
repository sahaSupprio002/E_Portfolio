
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



const dropBtn = document.querySelector('.dropbtn');
  const dropdown = document.querySelector('.dropdown');

  dropBtn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });

  // Close dropdown if clicked outside
  window.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
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



const buttons_skill = document.querySelectorAll(".skill-btn");
const sections_cer = document.querySelectorAll(".expertise-section, .certifications-section");

// Make "Skills" active by default
document.getElementById("btn1").classList.add("active");
document.getElementById("skills").classList.add("show");

buttons_skill.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    buttons_skill.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Hide all sections
    sections_cer.forEach(sec => {
      sec.classList.remove("show");
    });

    // Show the selected section
    const target = document.getElementById(btn.dataset.tab);
    target.classList.add("show");
  });
});





const buttons = document.querySelectorAll(".tab-btn");
  const categories = document.querySelectorAll(".project-category");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update button active state
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Hide all project categories
      categories.forEach(cat => cat.style.display = "none");

      // Show selected one
      const target = document.getElementById(btn.dataset.tab);
      target.style.display = "block";

      // Optional: smooth fade animation
      target.style.opacity = 0;
      setTimeout(() => {
        target.style.transition = "opacity 0.6s ease";
        target.style.opacity = 1;
      }, 50);
    });
  });

  

