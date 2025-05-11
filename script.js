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


const arrowright = document.querySelector('.portofolio-box .navigation .arrow-right');
const arrowleft = document.querySelector('.portofolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.img-slide');
    const portfolioDetails = document.querySelectorAll('.portofolio-details');
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
};

arrowright.addEventListener('click', () => {
    if (index < 1) {
        index++;
        arrowleft.classList.remove('disabled');
    }
    else {
        index = 2;
        arrowright.classList.add('disabled');
    }
    activePortfolio();
});

arrowleft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowright.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowleft.classList.add('disabled');
    }
    activePortfolio();
});