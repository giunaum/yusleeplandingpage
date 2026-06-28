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
