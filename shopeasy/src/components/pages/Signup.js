import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate  추가
import { createUser } from '../../api/userApi';
import { Link } from 'react-router-dom';
import '../../index.css';
import '../../styles/Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        nickname: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        let isValid = true;
        let emailError = '';
        let passwordError = '';

        // 이메일 정규식
        const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
        if (!emailReg.test(formData.email)) {
            emailError = 'Invalid email address';
            isValid = false;
        }

        // 비밀번호 정규식
        const passwordReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
        if (!passwordReg.test(formData.password)) {
            passwordError = 'Password must be 8-20 characters long and include at least one uppercase letter, one lowercase letter, and one special character';
            isValid = false;
        }

        setErrors({ email: emailError, password: passwordError });
        return isValid;
    };

    //폼 제출을 처리 (검증에 실패하면 API 호출을 하지 않음)
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await createUser(formData);
            console.log(response.data); // 성공 시 응답 데이터 확인
            navigate('/login'); // 로그인 페이지로 리디렉션
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div id="signup-container">
            <div id="signup-title">
                <h1 className="center">SIGNUP</h1>
                <p id="login-title-comment">
                    회원가입이 필요 없다면<br />
                    로그인 바로가기 <Link to="/login" className="link" id="signup-title-comment-click">&nbsp; LOGIN &nbsp;</Link> 클릭
                </p>
            </div>

            {/* SNS 간편회원가입 */}
            <div id="sns-container">
                <div id="signup-content-title-sns">SNS 계정으로 간편 회원가입</div>
                <Link to="#" className="link sns-button">Kakao</Link>
                <Link to="#" className="link sns-button">Naver</Link>
                <Link to="#" className="link sns-button">Google</Link>
            </div>

            <div id="signup-content-container">
                <div id="signup-content-title-shopeasy">SHOPEASY 계정으로 일반 회원가입</div>
                <div id="signup-content">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="inputset">
                                <label htmlFor="username">Id</label>
                                <input
                                    className="input signup-input"
                                    type="text"
                                    placeholder="아이디"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="inputset">
                                <label htmlFor="realname">Name</label>
                                <input
                                    className="input signup-input"
                                    type="text"
                                    placeholder="이름"
                                    id="realname"
                                    name="realname"
                                    value={formData.realname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="inputset">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="input signup-input"
                                    type="text"
                                    placeholder="이메일"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                            <div className="inputset">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    placeholder="비밀번호 (총 8자 이상, 숫자와 영어 조합)"
                                    id="password"
                                    name="password"
                                    className="input signup-input"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    maxLength="20"
                                />
                                {errors.password && <p className="error">{errors.password}</p>}
                            </div>

                            {/* 회원가입 제출버튼 */}

                            <div className="signup-button-container">
                                <input type="submit" value="회원가입 하기" className="signup-button" id="signup-submit" />
                            </div>
                        </form>
                    </div>
                    <div id="go-login">
                        <Link to="/login" className="link">
                            <div className="signup-button">로그인 바로가기</div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
