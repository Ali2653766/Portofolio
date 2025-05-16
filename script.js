const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const resumeBtns = document.querySelectorAll('.resume-btn');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
    
    
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');
    header.classList.remove('active');


    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

    setTimeout(() => {
        header.classList.add('active');
    }, 1100)
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    barsBox.classList.remove('active');

    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100)

    sections.forEach(section => {
        section.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100)
            
        };
    });
});

const logo = document.querySelector('header .logo');
logo.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
                sections[0].classList.add('active');
        }, 1100)
    };
});



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
    if (index < 2) {
        index++;
        arrowleft.classList.remove('disabled');
    }
    else {
        index = 3;
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