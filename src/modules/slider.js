/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable strict */

const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item');
    const slider = document.querySelector('.portfolio-content');
    const portfolio = document.querySelector('#portfolio');
    const ul = portfolio.querySelector('.portfolio-dots');

    class AddDots {
        constructor(elem, newClass) {
            this.elem = elem;
            this.newClass = newClass;
        }
        addNewClass() {
            this.elem = document.createElement('li');
            this.elem.classList.add('dot');
            ul.append(this.elem);
        }
    }
    const appData = new AddDots();

    slide.forEach(item => {
        if (item) {
            appData.addNewClass();
        }
    });

    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');

    let currentSlide = 0; //?  это номер слайда
    let interval;

    const prevSlide = (elem, i, strClass) => {
        elem[i].classList.remove(strClass);
    };

    const nextSlide = (elem, i, strClass) => {
        elem[i].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        const dot = document.querySelectorAll('.dot');

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', e => { //? Слушаем слайдер
        const dot = document.querySelectorAll('.dot');

        e.preventDefault();
        const target = e.target;

        if (!target.matches('.portfolio-btn, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) { //? минусуем или плюсуем счётчик
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', e => {
        if (e.target.matches('.portfolio-btn') || //? matches(если евент таргет является так-то классом)
            e.target.matches('.dot')) {
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', e => {
        if (e.target.matches('.portfolio-btn') || //? matches(если евент таргет является так-то классом)
            e.target.matches('.dot')) {
            startSlide();
        }
    });

    startSlide(1500);
};


export default slider;