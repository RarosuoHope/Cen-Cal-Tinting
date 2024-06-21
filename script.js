document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.how-much-div, .how-much-desktop, .how-much-desktop2');
    sections.forEach((section) => {
        section.addEventListener('click', function() {
            const expandElement = section.querySelector('.expand');
            const toggleIcon = section.querySelector('.toggle-icon-1');
            const highlight = section.querySelector('.highlight')
            if (expandElement.style.display === 'block' || expandElement.style.display === '') {
                expandElement.style.display = 'none';
                 highlight.style.backgroundColor = 'initial'
                 highlight.style.color = 'initial'
                toggleIcon.classList.remove('rotate');
               
            } else {
                expandElement.style.display = 'block';
                 highlight.style.backgroundColor = '#F5FCFF'
                 highlight.style.color = '#00ADEE'
                toggleIcon.classList.add('rotate');
            }
        });
    });
});
