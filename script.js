let flag1 = true;
let flag2 = true;
const task1 = () => {
    const element = document.getElementById('student');
    flag1 ? element.classList.add('primary-1') : element.classList.remove('primary-1');
    flag1 = !flag1;
}

const task2 = () => {
    const element = document.querySelector('#general-info')
    flag2 ? element.classList.add('primary-2') : element.classList.remove('primary-2');
    flag2 = !flag2;
}

