import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Login.css';

function Login() {
    return (
        <div className="login-container">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h1 className="u-text u-title u-text-1">로그인 </h1>
            </div>
            <section className="u-align-center u-clearfix u-white u-section-2" id="carousel_efaf" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">
                <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-black u-form u-radius-20 u-form-1">
                    <form action="https://forms.nicepagesrv.com/v2/form/process" className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" source="email" name="form">
                        <div className="u-form-group u-form-name">
                            <label for="name-4c18" className="u-label">Username</label>
                            <input type="text" placeholder="아이디" id="name-4c18" name="username" className="u-border-2 u-border-grey-50 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-none u-input-1" required="" />
                        </div>
                        <div className="u-form-group">
                            <label for="email-4c18" className="u-label">Password</label>
                            <input type="text" placeholder="비밀번호 (총 8자 이상, 숫자와 영어 조합)" id="email-4c18" name="password" className="u-border-2 u-border-grey-50 u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-none u-input-2" required="required" maxlength="20" />
                        </div>
                        <div className="u-form-agree u-form-group u-form-group-3">
                            <label className="u-field-label"></label>
                            <input type="checkbox" id="agree-a472" name="remember" className="u-active-palette-2-base u-agree-checkbox u-field-input u-hover-palette-2-base u-white" required="" />
                            <label for="agree-a472" className="u-agree-label u-block-a35c-16 u-field-label" style="">로그인 기억하기</label>
                        </div>
                        <div className="u-align-right u-form-group u-form-submit">
                            <Link href="#" className="u-border-active-palette-4-light-1 u-border-hover-palette-4-light-1 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-black u-palette-2-base u-radius-10 u-text-hover-white u-btn-1">로그인 하기</Link>
                            <input type="submit" value="submit" className="u-form-control-hidden" />
                        </div>
                        <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                        <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                        <input type="hidden" value="" name="recaptchaResponse" />
                        <input type="hidden" name="formServices" value="a0cba69c-fe80-860e-1e9a-e2f3443016c7" />
                    </form>
                </div>
                </div>
                <div className="u-container-style u-expanded-width-xs u-group u-group-1">
                    <div className="u-container-layout">
                    <Link href="#" className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-btn u-button-style u-none u-text-palette-2-base u-btn-2">아이디/비밀번호 찾기 </Link>
                    <Link href="signup.html" className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-btn u-button-style u-none u-text-palette-2-base u-btn-3">회원 가입 </Link>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-white u-section-3" id="sec-4b06">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <div className="u-clearfix u-expanded-width-xs u-group-elements u-valign-top-xs u-group-elements-1">
                        <Link href="#" className="u-btn u-button-style u-hover-palette-2-base u-text-hover-white u-btn-1">Kakao </Link>
                        <Link href="#" className="u-border-2 u-border-palette-2-base u-btn u-btn-round u-button-style u-hover-palette-2-base u-none u-radius u-text-hover-white u-btn-2">Naver </Link>
                        <Link href="#" className="u-border-2 u-border-palette-2-base u-btn u-btn-round u-button-style u-hover-palette-2-base u-none u-radius u-text-hover-white u-btn-3">Google </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;