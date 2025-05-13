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