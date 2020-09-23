import { withFormik } from 'formik';
import get from 'lodash/get';

import RegisterForm from '../components/RegisterForm';
import { userActions } from '../../../redux/actions';
import validationForm from '../../../utils/validations';
import openNotification  from '../../../utils/helpers/openNotification';
import store from '../../../redux/store';


export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        fullName: '',
        password: '',
        passwordRepeat: ''
    }),
    validate: values => {
        let errors = {};
        validationForm({ isAuth: false, values, errors });

        return errors;
    },
    handleSubmit: (values, { setSubmitting, props }) => {
        store
            .dispatch(userActions.fetchUserRegister(values))
            .then(() => {
                props.history.push('/signup/verify');
                setSubmitting(false);
            })
            .catch(err => {
                if (get(err, 'response.data.message.errmsg', '').indexOf('dup') >= 0) {
                    openNotification({
                        title: 'Error',
                        text: 'This email already exist',
                        type: 'error',
                        duration: 5000
                    });
                } else {
                    openNotification({
                        title: 'Error',
                        text: 'Something going wrong, please try again later',
                        type: 'error',
                        duration: 5000
                    });
                }
                setSubmitting(false);
            });
    },
    displayName: 'RegisterForm'
})(RegisterForm);