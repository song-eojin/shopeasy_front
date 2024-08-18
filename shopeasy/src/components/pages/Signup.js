import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import '../../styles/Signup.css';

function Signup() {
    return (
        <div id="signup-container">
            <div id="signup-title">
                <h1 className="center">SIGNUP</h1>
                <p id="login-title-comment">회원가입이 필요 없다면<br />
                    로그인 바로가기 <Link to="/login" className="link" id="signup-title-comment-click">&nbsp; LOGIN &nbsp;</Link> 클릭</p>
            </div>

            {/*SNS 간편회원가입*/}
            <div id="sns-container">
                <div id="signup-content-title-sns">SNS 계정으로 간편 회원가입</div>
                <Link href="#" className="link sns-button">Kakao </Link>
                <Link href="#" className="link sns-button">Naver </Link>
                <Link href="#" className="link sns-button">Google </Link>
            </div>

            <div id="signup-content-container">
                <div id="signup-content-title-shopeasy">SHOPEASY 계정으로 일반 회원가입</div>
                <div id="signup-content">
                    <div>
                        <form name="form">
                            <div className="inputset">
                                <label for="username-4c18">Username</label>
                                <input className="input signup-input" type="text" placeholder="아이디" id="username-4c18" name="username" required="required" />
                            </div>
                            <div className="inputset">
                                <label for="username-4c18">Nickname</label>
                                <input className="input signup-input" type="text" placeholder="닉네임" id="nickname-4c18" name="nickname" required="required" />
                            </div>
                            <div className="inputset">
                                <label for="email-4c18">Email</label>
                                <input className="input signup-input" type="text" placeholder="이메일" id="email-4c18" name="email" required="required" />
                            </div>
                            <div className="inputset">
                                <label for="password-4c18" >Password</label>
                                <input type="text" placeholder="비밀번호 (총 8자 이상, 숫자와 영어 조합)" id="password-4c18" name="password" className="input signup-input" required="required" maxlength="20" />
                            </div>

                            {/*회원가입 제출버튼*/}
                            <div className="signup-button-container">
                                <input type="submit" value="회원가입 하기" className="signup-button" id="signup-submit" />
                            </div>
                        </form>
                    </div>
                    <div id="go-login">
                        <Link to="/login"  className="link"><div className="signup-button">로그인 바로가기</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;