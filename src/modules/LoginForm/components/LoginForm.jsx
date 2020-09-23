import React from 'react';
import {Form, Icon, Input} from 'antd';
import {Link} from 'react-router-dom'

import {Button} from '../../../components';
import Block from '../../../components/Block';
import validateField from '../../../utils/helpers/validateField';


const LoginForm = (props) => {
    const {values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting, isValid} = props;

    return (
        <React.Fragment>
            <div className='auth__title'>
                <h2>Sing In</h2>
                <p>Please, login in your account</p>
            </div>
            <Block>
                <Form onSubmit={handleSubmit} className='login-form'>
                    <Form.Item
                        validateStatus={validateField('email', touched, errors)}
                        help={!touched.email ? '' : errors.email}
                        hasFeedback
                    >
                        <Input
                            id='email'
                            size='large'
                            type='email'
                            placeholder='E-mail'
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            prefix={<Icon type='mail' style={{color: 'rgba(0,0,0,.25)'}}/>}
                        />
                    </Form.Item>
                    <Form.Item
                        validateStatus={validateField('password', touched, errors)}
                        help={!touched.password ? '' : errors.password}
                        hasFeedback
                    >
                        <Input
                            size='large'
                            prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type='password'
                            placeholder='Password'
                            id='password'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                        />
                    </Form.Item>
                    <Form.Item>
                        {isSubmitting && !isValid && <span>Error!</span>}
                        <Button type='primary' htmlType='submit' className='login-form-button' size='large'>
                            Sing Ip
                        </Button>
                    </Form.Item>
                    <Link to='/signup' className='auth__register-link'>Registration</Link>
                </Form>
            </Block>
        </React.Fragment>
    )
};

export default LoginForm;