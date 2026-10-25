// ============================================
// ProctorAIQ Website JavaScript
// File: assets/script.js
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------------------
    // 1. Mobile Navigation Menu
    // --------------------------------------------

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuButton && nav) {
        menuButton.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("open");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.textContent = isOpen ? "✕" : "☰";
        });

        // Close the mobile menu after clicking a navigation link
        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");

                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
            });
        });
    }


    // --------------------------------------------
    // 2. Automatic Copyright Year
    // --------------------------------------------

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // --------------------------------------------
    // 3. Contact Form
    // --------------------------------------------

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(contactForm);

            const name = formData.get("name") || "";
            const email = formData.get("email") || "";
            const organisation =
                formData.get("organisation") || "Not provided";
            const interest = formData.get("interest") || "General";
            const message = formData.get("message") || "";

            const subject = encodeURIComponent(
                "ProctorAIQ Enquiry - " + interest
            );

            const body = encodeURIComponent(
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Organisation: " + organisation + "\n" +
                "Interest: " + interest + "\n\n" +
                "Message:\n" + message
            );

            const statusMessage =
                contactForm.querySelector(".form-status");

            if (statusMessage) {
                statusMessage.textContent =
                    "Opening your email application to send this enquiry...";
            }

            // Replace this email address with your actual business email.
            const recipient = "hello@proctoraiq.co.in";

            window.location.href =
                "mailto:" + recipient +
                "?subject=" + subject +
                "&body=" + body;
        });
    }

});