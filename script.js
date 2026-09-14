// Button interaction
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  document.getElementById("features").scrollIntoView({
    behavior: "smooth"
  });
});

// Contact form interaction
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  formMessage.textContent = `Thank you, ${name}! Your message has been received.`;
  contactForm.reset();
});
