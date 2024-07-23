const input = document.querySelector('#name-input');
const user = document.querySelector('#name-output');
const name = (event) => {
    user.textContent = event.currentTarget.value.trim();
    if (!user.textContent) {
        user.textContent = 'Anonymous';
    }
}
input.addEventListener('input', name);