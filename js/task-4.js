const mainForm = document.querySelector('.login-form');
const userEvent = (event) => {
    event.preventDefault();
    const main = event.target;
    const email = main.elements.email.value;
    const password = main.elements.password.value;
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }
    const mainInfo = {};
    mainInfo[main.elements.email.name] = email.trim();
    mainInfo[main.elements.password.name] = password.trim();
    console.log(mainInfo);
    mainForm.reset();
}
mainForm.addEventListener('submit', userEvent);