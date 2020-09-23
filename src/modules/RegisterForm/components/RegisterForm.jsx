import React from 'react';
import {Form, Icon, Input} from 'antd';
import {Link} from 'react-router-dom'

import {Button} from '../../../components';
import Block from '../../../components/Block';
import validateField from '../../../utils/helpers/validateField';

const RegisterForm = (props) => {
    const {values, touched, errors, handleChange, handleBlur, handleSubmit} = props;
    let {success} = true;

    return (
        <React.Fragment>
            <div className='auth__title'>
                <h2>Sing Up</h2>
                <p>Please, register in your account</p>
            </div>
            <Block>
                {!success ? (
                    <Form onSubmit={handleSubmit} className='login-form'>
                        <Form.Item
                            validateStatus={validateField('email', touched, errors)}
                            help={!touched.email ? '' : errors.email}
                            hasFeedback>
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
                            validateStatus={validateField('fullName', touched, errors)}
                            help={!touched.fullName ? '' : errors.fullName}
                            hasFeedback>
                            <Input
                                size='large'
                                prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder='Username'
                                id='fullName'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.fullName}
                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus={validateField('password', touched, errors)}
                            help={!touched.password ? '' : errors.password}
                            hasFeedback>
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
                        <Form.Item
                            validateStatus={validateField('passwordRepeat', touched, errors)}
                            help={!touched.passwordRepeat ? '' : errors.passwordRepeat}
                            hasFeedback>
                            <Input
                                size='large'
                                prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type='password'
                                placeholder='Repeat password'
                                id='passwordRepeat'
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='login-form-button' size='large'>
                                Sing Up
                            </Button>
                        </Form.Item>
                        <Link to='/signin' className='auth__register-link'>Sing in</Link>
                    </Form>
                ) : (
                    <div className='auth__success-block'>
                        <Icon type='info-circle' style={{fontSize: '48px', color: '#08c'}}/>
                        <h3>Please verify your account</h3>
                        <p>We sent a message on your e-mail</p>
                    </div>
                )}
            </Block>
        </React.Fragment>
    )
};

export default RegisterForm;