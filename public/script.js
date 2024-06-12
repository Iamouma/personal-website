function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the form when the DOM is fully loaded
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Collect form data
            const formData = new FormData(this);
            
            // Send form data to server using fetch
            fetch("/send-email", {
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
    } else {
        console.error("Contact form element not found.");
    }
});

