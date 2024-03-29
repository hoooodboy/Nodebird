import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import {Form, Input, Checkbox, Button} from 'antd';
import styled from 'styled-components';

import AppLayout from '../components/AppLayout';
import useinput from '../hooks/useinput';

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {

    const [id, onChangeId] = useinput('');
    const [nickname, onChangeNickname] = useinput('');
    const [password, onChangePassword] = useinput('');

    const [passwordError, setPasswordError] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState('');
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const [termError, setTermError] = useState(false);
    const [term, setTerm] = useState('');
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, [])

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if(!term) {
            return setTermError(true);
        }
        console.log(id, nickname, password);
    }, [password, passwordCheck, term]);
    return(
        <AppLayout>
        <Head>
            <title>
                회원가입 | NodeBird
            </title>
        </Head>
        <Form onFinish={onSubmit} >
            <div>
                <label>아이디</label>
                <br/>
                <Input name="user-id" value={id} required onChange={onChangeId} />
            </div>
            <div>
                <label>닉네임</label>
                <br/>
                <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
            </div>
            <div>
                <label>비밀번호</label>
                <br/>
                <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
            </div>
            <div>
                <label htmlFor="user-password-check">비밀번호 체크</label>
                <br/>
                <Input 
                    name="user-password-check" 
                    type="password" 
                    value={passwordCheck} 
                    required 
                    onChange={onChangePasswordCheck} 
                />
                {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage> }
            </div>
            <div>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm} >동의합니다.</Checkbox>
                {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
            </div>
            <div>
                <Button type="primary" htmlType="submit" >가입하기</Button>
            </div>
        </Form>
        </AppLayout>

    )
}

export default Signup;