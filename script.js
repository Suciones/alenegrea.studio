document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Navigation ---
    const scrollLinks = document.querySelectorAll('.scroll-link');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link has a hash (i.e., it's an internal link)
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;

                // Scroll to the target section
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- Scroll-triggered Fade-In Animation ---
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.4, // Trigger when 40% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Start trigger slightly before the bottom of the viewport
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                // Stop observing the element once it has faded in
                appearOnScroll.unobserve(entry.target); 
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });


    // --- Simple Contact Form Submission Feedback (Front-end only) ---
    const form = document.getElementById('booking-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real website, you would use fetch() or AJAX here to send data to a server/email service.
        
        alert('Thank you for your message! Ale Negra will be in touch with you shortly.');
        form.reset();
    });
});