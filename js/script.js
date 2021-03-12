/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-useless-escape */
/* eslint-disable no-use-before-define */
/* eslint-disable strict */
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //? Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime();
            const dateNow = new Date().getTime();
            const timeRemaining = (dateStop - dateNow) / 1000;
            const seconds = Math.floor(timeRemaining % 60);
            const minutes = Math.floor((timeRemaining / 60) % 60);
            const hours = Math.floor(timeRemaining / 60 / 60);

            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        }


        function updateClock() {
            const timer = getTimeRemaining();
            if (timer.hours < 10 && timer.hours >= 0) {
                timer.hours = '0' + timer.hours;
            }
            if (timer.minutes < 10 && timer.minutes >= 0) {
                timer.minutes = '0' + timer.minutes;
            }
            if (timer.seconds < 10 && timer.seconds >= 0) {
                timer.seconds = '0' + timer.seconds;
            }
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if (timer.timeRemaining <= 0) {
                clearInterval(idInterval);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }

        const idInterval = setInterval(updateClock, 1000);
    }

    //? Menu
    const toggleMenu = () => {
        const menu = document.querySelector('menu');

        document.addEventListener('click', e => {
            if (!e.target.classList.contains('menu')) {
                const targetMenu = e.target.closest('.menu');
                if (targetMenu) {
                    menu.classList.add('active-menu');
                }
                if (e.target.classList.contains('close-btn')) {
                    const closeTarget = e.target.closest('.close-btn');
                    if (closeTarget) {
                        menu.classList.remove('active-menu');
                    }
                }
                if (!e.target.matches('ul>li')) {
                    const liTarget = e.target.closest('ul>li');
                    if (liTarget) {
                        menu.classList.remove('active-menu');
                    }
                }
            }
        });
    };

    //! popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup');
        const popupContent = popup.querySelector('.popup-content');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const width = document.documentElement.clientWidth;
        let count = 100;

        if (width > 768) {
            popupBtn.forEach(item => {
                item.addEventListener('click', () => {
                    popup.style.display = 'block';
                    count = 100;
                    popupInterval = requestAnimationFrame(showPopup);
                });
            });
        } else {
            popupBtn.forEach(item => {
                item.addEventListener('click', () => {
                    popup.style.display = 'block';
                });
            });
        }
        popup.addEventListener('click', event => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');

                if (!target) {
                    popup.style.display = 'none';
                }
            }
        });

        let popupInterval;
        const showPopup = function() {
            popupInterval = requestAnimationFrame(showPopup);
            count--;
            if (count !== 10) {
                popupContent.style.top = count + '%';
            } else {
                cancelAnimationFrame(popupInterval);
            }
        };

    };

    //! tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header');
        const tab = tabHeader.querySelectorAll('.service-header-tab');
        const tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };

    //! Slider
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

    //! command
    const command = () => {
        const img = document.querySelectorAll('.command__photo');

        img.forEach(item => {
            const standartImg = item.src;
            item.addEventListener('mouseenter', e => {
                e.target.src = e.target.dataset.img;

            });
            item.addEventListener('mouseleave', e => {
                e.target.src = standartImg;
            });
        });
    }

    //! Calc

    const calc = (price = 100) => {

        const calcItem = document.querySelectorAll('.calc-item');
        const calcBlock = document.querySelector('.calc-block');
        const calcType = document.querySelector('.calc-type');
        const calcSquare = document.querySelector('.calc-square');
        const calcDay = document.querySelector('.calc-day');
        const totalValue = document.getElementById('total');
        const calcCount = document.querySelector('.calc-count');

        const countSum = () => {
            let total = 0;
            let countValue = 1;
            let dayValue = 1;

            const typeValue = calcType.options[calcType.selectedIndex].value;
            const squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            } else {
                total = 0;
            }

            totalValue.textContent = Math.floor(total);
        };

        calcBlock.addEventListener('change', e => {
            const target = e.target;
            if (target.matches('.calc-type') || target.matches('.calc-square') ||
                target.matches('.calc-day') || target.matches('.calc-count')) {
                countSum();
            }
        });

        calcItem.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D\./ig, ''); //? Ввод только цифр
            });
        });



    };

    const formValid = () => {
        const name = document.querySelectorAll('.form-name');
        const email = document.querySelectorAll('.form-email');
        const phone = document.querySelectorAll('.form-phone');
        const message = document.querySelector('.mess');

        name.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^а-яА-ЯёЁ\s\-]/g, '');
            });
            item.addEventListener('blur', () => {
                // eslint-disable-next-line max-len
                item.value = item.value.replace(/\s+/g, ' ').replace(/\-+/g, '-').replace(/^-+|-+$/g, '').replace(/[А-Я]/g, x => x.toLowerCase()).replace(/^[а-я]/g, x => x.toUpperCase()).trim();
            });
        });
        email.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^a-zA-Z@_.!`*'\-]/g, '').replace(/^[@_.!`*']/g, '');
            });
            item.addEventListener('bulr', () => {
                // eslint-disable-next-line max-len
                item.value = item.value.replace(/[^a-zA-Z@_.!`*'\-]/g, '').replace(/\s+/g, ' ').replace(/\-+/g, '-').trim();
            });
        });
        phone.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/([^0-9()\-\+])/g, '').replace(/(^[\(\)])/g, '').trim();
            });
            item.addEventListener('blur', () => {
                // eslint-disable-next-line max-len
                item.value = item.value.replace(/^\+?[78]+[\-\(]?(\d{3})[\-\)]?(\d{3})[-]?(\d{2})[-]?(\d{2})$/gm, '+7($1)$2-$3-$4').trim();
            });
        });
        message.addEventListener('input', () => {
            message.value = message.value.replace(/[^а-яА-ЯёЁ\s\-\,\.\!\0-9]/g, '');
        });
        message.addEventListener('blur', () => {
            // eslint-disable-next-line max-len
            message.value = message.value.replace(/\s+/g, ' ').replace(/\-+/g, '-').replace(/^-+|-+$/g, '').replace(/[А-Я]/g, x => x.toLowerCase()).replace(/^[а-я]/g, x => x.toUpperCase()).trim();
        });
    }

    //! send-ajax-form

    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так...';
        const loadMessage = 'Загрузка...';
        const successMessage = 'Спасибо! Мы скоро с вами свяжемся';
        const form = document.querySelectorAll('form[name="user_form"]');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `font-size: 2rem;
        color: #fff;`;

        form.forEach(item => {
            item.addEventListener('submit', event => {
                event.preventDefault();
                item.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(item);

                postData(formData)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200.');
                        }
                        console.log(response);
                        statusMessage.textContent = successMessage;
                        const inputs = document.querySelectorAll('input');
                        inputs.forEach(item => {
                            item.value = '';
                        })

                    })
                    .catch(error => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    })
            });
        });

        // eslint-disable-next-line arrow-body-style
        const postData = formData => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formData
            });
        }
    }

    countTimer('7 april 2021 19:40:00');
    toggleMenu();
    togglePopUp();
    tabs();
    slider();
    command();
    calc(100);
    formValid();
    sendForm();
});