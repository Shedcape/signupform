const passwords = [document.querySelector('.password'), document.querySelector('.confpassword')];
passwords.forEach(x => x.addEventListener('click', (e) => {
    console.log(passwords);
    if (passwords[0].textContent !== passwords[1].textContent){
        passwords[0].classList.add('wrongpw');
        document.querySelector('.pwcheck').style.display = "block"
    }
}))