import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/userApi'; // 로그인 API 호출 함수
import '../../index.css';
import '../../styles/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await login({ username, password });
            if (response.status === 200) {
                navigate('/'); // 로그인 성공 후 리디렉션
            }
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div id="login-container">
            <div id="login-title">
                <h1 className="center">LOGIN</h1>
                <p id="login-title-comment">회원가입이 필요하다면<br />회원가입 바로가기 <Link to="/signup" className="link" id="login-title-comment-click">&nbsp; SIGNUP &nbsp;</Link> 클릭</p>
            </div>
            <div id="login-content">
                <form  className="inputset" onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            className="input login-input" 
                            placeholder="아이디"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required="required"
                        />
                    </div>
                    <div className="inputset">
                        <label>Password</label>
                        <input
                            className="input login-input"
                            placeholder="비밀번호 (총 8자 이상, 영문 대문자, 소문자, 숫자, 영어 조합)"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            maxlength="20"
                            required="required"
                        />
                    </div>
                    <div className="inputset">
                        <input
                            type="checkbox"
                            className="checkbox"
                            name="remember"
                        />
                        <label htmlFor="remember" className="checkbox-label">
                            로그인 기억하기
                        </label>
                    </div>
                    {error && <p>{error}</p>}
                    <input type="submit" value="로그인 하기" id="login-button" />
                </form>
                <div id="login-link-container">
                    <Link href="#" className="link login-link">아이디/비밀번호 찾기</Link>
                    <Link to="/signup" className="link login-link">회원 가입</Link>
                </div>   
            </div>             

            {/*SNS 간편로그인*/}
            <div id="sns-container">
                <Link href="#" className="link sns-button">Kakao </Link>
                <Link href="#" className="link sns-button">Naver </Link>
                <Link href="#" className="link sns-button">Google </Link>
            </div>
        </div>
    );
};

export default Login;
