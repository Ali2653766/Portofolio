const resumeBtns = document.querySelectorAll('.resume-btn');


resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeSections = document.querySelectorAll('.resume-details');
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeSections.forEach(section => {
            section.classList.remove('active');
        });
        resumeSections[idx].classList.add('active');
    
    });
});