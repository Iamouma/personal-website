function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(this);

    // Send form data to server using fetch
    fetch("/contact", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.querySelector(".alert").style.display = "block";
        document.getElementById("messages").innerHTML = data.message;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("messages").innerHTML = "An error occurred while submitting the form.";
    });
});
