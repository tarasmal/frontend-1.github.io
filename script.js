let flag1 = true;
const task1 = () => {
    const element = document.getElementById('student');
    flag1 ? element.classList.add('primary-1') : element.classList.remove('primary-1');
    flag1 = !flag1;
}

