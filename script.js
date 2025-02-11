document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s";
        });
        card.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let formData = new FormData(this);

        fetch("send_email.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById("responseMessage").innerText = data;
            document.getElementById("contactForm").reset();
        })
        .catch(error => console.error("Error:", error));
    });
});

function sendMessage(event) {
    event.preventDefault();
    alert("Your message has been sent!");
    document.querySelector(".contact-form").reset();
}
