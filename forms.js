
// BOOKING FORM
var bookForm = document.querySelector(".book-form");
if (bookForm) {
    bookForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Booking Received! Our team will contact you shortly to confirm your appointment.");
        bookForm.reset();
    });
}

// CONTACT FORM
var contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Message Sent! Thank you for reaching out. We will get back to you as soon as possible.");
        contactForm.reset();
    });
}

// FEEDBACK FORM
var feedbackForm = document.querySelector(".feedback-form");
if (feedbackForm) {
    feedbackForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Feedback Submitted! Thank you, your feedback helps us improve our services.");
        feedbackForm.reset();
    });
}
