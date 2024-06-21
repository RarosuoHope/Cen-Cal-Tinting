document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.how-much-div, .how-much-desktop, .how-much-desktop2');
    sections.forEach((section) => {
        section.addEventListener('click', function() {
            const expandElement = section.querySelector('.expand');
            const toggleIcon = section.querySelector('.toggle-icon-1');
            const  headerOne = section.querySelector('.highlight')
            if (expandElement.style.display === 'block' || expandElement.style.display === '') {
                expandElement.style.display = 'none';
                 headerOne.style.backgroundColor = 'initial';
                 highlight.style.color = 'initial';
                toggleIcon.classList.remove('rotate');
               
            } else {
                expandElement.style.display = 'block';
                 headerOne.style.backgroundColor = '#F5FCFF';
                  headerOne.style.color = '#00ADEE';
                toggleIcon.classList.add('rotate');
            }
        });
    });
});
