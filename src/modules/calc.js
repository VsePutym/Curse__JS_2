/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable strict */

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

export default calc;