function copyEmail() {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email)
      .then(() => {
        const notif = document.getElementById("copy-notification");
        notif.classList.remove("hidden");
        notif.classList.add("show");

        // Hide after 2 seconds
        setTimeout(() => {
          notif.classList.remove("show");
          notif.classList.add("hidden");
        }, 2000);
      })
      .catch(err => {
        console.error("Failed to copy email: ", err);
      });
}

document.addEventListener("DOMContentLoaded", () => {
  const tab1 = document.querySelector(".tab-1");
  const tab2 = document.querySelector(".tab-2");
  const skillsContent = document.getElementById("skills-content");
  const educationContent = document.getElementById("education-content");

  function activateTab(tabName) {
      if (tabName === "skills") {
          tab1.classList.add("active-tab");
          tab2.classList.remove("active-tab");
          skillsContent.classList.remove("hidden");
          educationContent.classList.add("hidden");
      } else {
          tab2.classList.add("active-tab");
          tab1.classList.remove("active-tab");
          educationContent.classList.remove("hidden");
          skillsContent.classList.add("hidden");
      }
  }

  // Default to 'skills'
  activateTab("skills");

  tab1.addEventListener("click", () => activateTab("skills"));
  tab2.addEventListener("click", () => activateTab("education"));
});
