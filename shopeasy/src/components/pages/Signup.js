import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import '../../styles/Signup.css';

function Signup() {
    return (
        <div className="signup-container">
            <div id="login-title">
                <h1 className="center">SIGNUP</h1>
                <p id="login-title-comment"className="center">Welocome to <span>&nbsp; SHOPEASY &nbsp;</span></p>
                <p id="login-title-comment"className="center">처음이시고요?<span>&nbsp; SIGNUP &nbsp;</span></p>
            </div>
            <div id="login-content">
                <div>
                    <form name="form">
                        <div className="inputset">
                            <label for="name-4c18">Username</label>
                            <input className="input login-input" type="text" placeholder="아이디" id="name-4c18" name="username" required="required" />
                        </div>
                        <div className="inputset">
                            <label for="email-4c18" >Password</label>
                            <input type="text" placeholder="비밀번호 (총 8자 이상, 숫자와 영어 조합)" id="email-4c18" name="password" className="input login-input" required="required" maxlength="20" />
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

                        {/*로그인 제출버튼*/}
                        <div>
                            <input type="submit" value="로그인 하기" id="login-button" />
                        </div>
                    </form>
                </div>
                <div id="login-link-container">
                    <Link href="#" className="link login-link">아이디/비밀번호 찾기 </Link>
                    <Link href="signup.html" className="link login-link">회원 가입 </Link>
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
}

export default Signup;