document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('affiliateModal');
    const affiliateLinks = document.querySelectorAll('.affiliate-link');
    const closeButtons = document.querySelectorAll('.close-modal, .close-modal-btn');

    // Open modal when affiliate links are clicked
    affiliateLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // In the future, this would redirect:
            // const targetUrl = link.getAttribute('data-url');
            // window.location.href = targetUrl;
            
            // Currently showing under construction modal
            modal.classList.add('active');
        });
    });

    // Close modal
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    });

    // Handle form submission
    const waitlistForm = document.getElementById('waitlist-form');
    const successMsg = document.getElementById('success-msg');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would send the data to a server here.
            waitlistForm.style.display = 'none';
            successMsg.style.display = 'block';
            
            // Optionally close modal after a few seconds
            setTimeout(() => {
                modal.classList.remove('active');
                // Reset form for next time
                waitlistForm.reset();
                waitlistForm.style.display = 'flex';
                successMsg.style.display = 'none';
            }, 3000);
        });
    }

    // Close modal on click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
});
