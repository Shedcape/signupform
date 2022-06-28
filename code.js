const password = document.querySelectorAll('.password');
password.forEach(x => x.addEventListener('keyup', (e) => {
    console.log(password)
    console.log(password[0].value)
    console.log(password[1].value)
    let check = document.querySelector('.pwcheck');
    if (password[0].value !== password[1].value || !validate(password[0].value)){
        password.forEach(x => x.classList.add('wrongpw'));
        check.style.visibility = "visible"
    } else {
        password.forEach(x => x.classList.remove('wrongpw'));
        check.style.visibility = "hidden"
    }
}))

function validate(password) {
    return /((?!.*\W)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})/g.test(password);
  }

  