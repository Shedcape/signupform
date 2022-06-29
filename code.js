const password = document.querySelectorAll('.password');
password.forEach(x => x.addEventListener('keyup', (e) => {
    let check = document.querySelector('.pwcheck');
    if (password[0].value !== password[1].value || !validate(password[0].value)){
        password.forEach(x => x.classList.add('wrongpw'));
        check.style.visibility = "visible"
    } else {
        password.forEach(x => x.classList.remove('wrongpw'));
        check.style.visibility = "hidden"
    }
}))
/* const stars = document.querySelectorAll('input');
stars.forEach(x => x.addEventListener('keyup', (e) => {
    let target = e.target.id;
    let star = document.querySelector(`.${target} > span`);
    if (e.target.value){
        star.style.visibility = 'hidden';
    } else {
        star.style.visibility = 'visible';
    }
})) */

function validate(password) {
    return /((?!.*\W)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})/g.test(password);
  }
function formValidation(){
    stars.forEach(x => {
        if (x.value === ''){
            alert(`You need to fill in all fields before submitting`);
            return false;
        }
    })
};