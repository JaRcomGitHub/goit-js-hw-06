
const formEl = document.querySelector('form.login-form');

formEl.addEventListener('submit', function(event){
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (!email || !password){
        window.alert('All fields must be filled!');
        return;
    }

    const formData = {
        email,
        password,
    }

    console.log(formData);

    event.currentTarget.reset();
});
