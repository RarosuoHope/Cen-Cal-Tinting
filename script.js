document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.how-much-div, .how-much-desktop, .how-much-desktop2');
    sections.forEach((section) => {
        section.addEventListener('click', function() {
            const expandElement = section.querySelector('.expand');
            const toggleIcon = section.querySelector('.toggle-icon-1');
            if (expandElement.style.display === 'block' || expandElement.style.display === '') {
                expandElement.style.display = 'none';
                toggleIcon.classList.remove('rotate');
            } else {
                expandElement.style.display = 'block';
                toggleIcon.classList.add('rotate');
            }
        });
    });
});