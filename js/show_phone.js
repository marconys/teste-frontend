document.querySelectorAll('.show-phone').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const phoneElement = this.nextElementSibling;
        const phone = this.getAttribute('data-phone');

        
        const formattedPhone = `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;

        phoneElement.textContent = formattedPhone;
        this.style.display = 'none';
    });
});
