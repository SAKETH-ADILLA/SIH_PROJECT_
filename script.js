// script.js

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menu Toggle for Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});

// Dynamic Content Loading (Simulated)
document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading additional content after 2 seconds
    setTimeout(() => {
        const jobList = document.querySelector('.job-list');
        const additionalJobs = `
            <div class="job-card">
                <h3>Data Scientist</h3>
                <p>Company: Data Insights</p>
                <p>Location: San Francisco, CA</p>
                <a href="#" class="btn">Apply Now</a>
            </div>
            <div class="job-card">
                <h3>Product Manager</h3>
                <p>Company: Product Pros</p>
                <p>Location: Austin, TX</p>
                <a href="#" class="btn">Apply Now</a>
            </div>
        `;
        jobList.innerHTML += additionalJobs;
    }, 2000);
});

// Form Validation Example (if you have a form)
function validateForm(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;
    let isValid = true;

    if (!name) {
        alert('Name is required');
        isValid = false;
    }

    if (!email || !email.includes('@')) {
        alert('Valid email is required');
        isValid = false;
    }

    if (!message) {
        alert('Message is required');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // You can handle form submission here
        // e.g., send data to server
    }
}

// Attach form validation if a form exists
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', validateForm);
});
