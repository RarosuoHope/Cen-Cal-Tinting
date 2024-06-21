document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.how-much-div, .how-much-desktop, .how-much-desktop2');
    sections.forEach((section) => {
        section.addEventListener('click', function() {
            const expandElement = section.querySelector('.expand');
             const  headerOne = section.querySelector('.highlight');
           
           
            if (expandElement.style.display === 'block' || expandElement.style.display === '') {
                expandElement.style.display = 'none';
                
                 headerOne.style.backgroundColor = 'initial';
                 headerOne.style.color = 'initial';
               
               
            } else {
                expandElement.style.display = 'block';
                 headerOne.style.backgroundColor = '#F5FCFF';
                   headerOne.style.color = '#00ADEE';
               
            }
        });
    });
});
