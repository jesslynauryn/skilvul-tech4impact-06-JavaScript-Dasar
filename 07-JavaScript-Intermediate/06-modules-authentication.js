export const validateLoginData = (email, password) => {
    const emailValidator = new RegExp(/^\S+@\S+\.\S+$/);
    const passwordValidator = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/);

    if (emailValidator.test(email) && passwordValidator.test(password)) {
        alert(`Welcome To The Jungle`);
    }else if (!passwordValidator.test(password)) {
        alert(`Tolong masukkan password sesuai ketentuan`);
    }else{
        alert(`tolong masukkan email sesuai ketentuan`);

    }
};