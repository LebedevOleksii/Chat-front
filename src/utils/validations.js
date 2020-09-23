const validationForm = ({isAuth, values, errors }) => {
    const rules = {
        email: value => {
            if (!value) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Invalid email address';
            }
        },
        password: value => {
            if (!value) {
                errors.password = 'Required';
            } else if (values.passwordRepeat && values.passwordRepeat.length >= 8 && (value.toLowerCase() !== values.passwordRepeat.toLowerCase())) {
                errors.password = 'Passwords do not match';
            } else if (value.length < 8) {
                errors.password = isAuth ? 'Password is incorrect' : 'Password must contain min 8 characters';
            }
        },
        passwordRepeat: value => {
            if (!value) {
                errors.passwordRepeat = 'Required';
            } else if (value.length < 8) {
                errors.passwordRepeat = 'Password must contain min 8 characters';
            } else if (value && !values.password) {
                errors.passwordRepeat = 'Password do not match with empty field';
            } else if (value.toLowerCase() !== values.password.toLowerCase()) {
                errors.passwordRepeat = 'Passwords do not match';
            }
        },
        fullName: value => {
            if (!value) {
                errors.fullName = 'Required'
            }
        },
    };
    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};

export default validationForm;
