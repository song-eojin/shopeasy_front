import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../index.css';
import '../../styles/Mypage.css';

const API_URL = 'http://localhost:8090/api/users';

function Mypage() {
  const [formattedRealname, setFormattedRealname] = useState('');
  const [unformattedRealname, setUnformattedRealname] = useState('');
  const [username, setUsername] = useState('');
  const [formattedEmail, setFormattedEmail] = useState('');
  const [unformattedEmail, setUnformattedEmail] = useState('');
  const [formattedPassword, setFormattedPassword] = useState('');
  const [profileImage, setProfileImage] = useState('/images/profileImages/default-profile-grey-man.png');
  const [isEditing, setIsEditing] = useState(false);

  const fetchUserInfo = async () => {
    try {
      // 사용자 정보 가져오기 
      const response = await axios.get(`${API_URL}/1`);
      setFormattedRealname(formatRealname(response.data.realname));
      setUnformattedRealname(response.data.realname);
      setUsername(response.data.username);
      setFormattedEmail(formatEmail(response.data.email));
      setUnformattedEmail(response.data.email);
      setFormattedPassword(formatPassword(response.data.password));
      setProfileImage(response.data.profileImage || '/images/profileImages/default-profile-grey-man.png');
    } catch (error) {
      console.error('Failed to fetch user info:', error);
    }
  };

  // 포맷팅
  const formatRealname = (realname) => {
    if (!realname || realname.length === 0) return '';
    return realname[0] + '*'.repeat(realname.length - 2) + realname.slice(-1);
  };
  const formatEmail = (email) => {
    if (!email || email.length === 0) return '';
    const [localPart, domainPart] = email.split('@');
    return localPart.slice(0, 2) + '*'.repeat(localPart.length - 2) + '@' + domainPart;
  };
  const formatPassword = (password) => {
    if (!password || password.length === 0) return '';
    return '*'.repeat(password.length);
  }

  // 컴포넌트가 마운트될 때 fetchUserInfo 호출
  useEffect(() => {
     fetchUserInfo();
  }); 

  // 회원정보수정 클릭 핸들러
  const handleEditClick = () => {
    setIsEditing(!isEditing); // 상태를 토글
  };
  
  return (
    <div className="mypage-container">
      {/*좌측 패널*/}
      <div id="left-pannel">
        <p>{formattedRealname}</p>
        <div>주문배송조회</div>
        <div>취소/교환/반품</div>
        <button onClick={handleEditClick} className="button">회원정보수정</button>
      </div>
  
      {/*우측 본문*/}
      <div id="right-content">
        <div id="right-content-top">
          <div>멤버십 등급</div>
          <div>사용가능쿠폰</div>
          <div>포인트</div>
        </div>
          {isEditing? (
            <div id="mypage-edit">
              <h2>회원정보수정</h2>
              <div id="right-content-middle"> 
                <form method="patch">
                  <div id="mypage-profileImage">
                    {/*프로필 이미지*/}
                    <label>
                      <input type="file" accept="images/*" onChange = {profileImage} />
                      <img src={profileImage} id="profile_image" alt="Profile" />
                    </label>
                  </div>
                  <div id="mapage-content">
                    {/*이름*/}
                    <div className="mypage-content">이름 : {unformattedRealname}</div>

                    {/*아이디*/}
                    <div className="mypage-content">아이디 : {username}</div>

                    {/*이메일*/}
                    <div className="mypage-content">이메일 : {unformattedEmail}</div>

                    {/*비밀번호*/}
                    <div className="mypage-content">비밀번호 : {formattedPassword}</div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div id="right-content-middleAndBottom">
              <div id="right-content-middle"> 
                <div id="mypage-profileImage">
                  {/*프로필 이미지*/}
                  <img src={profileImage} id="profile_image" alt="Profile" />
                </div>
                <div id="mapage-content">
                  {/*이름*/}
                  <div className="mypage-content">이름 : {formattedRealname}</div>

                  {/*아이디*/}
                  <div className="mypage-content">아이디 : {username}</div>

                  {/*이메일*/}
                  <div className="mypage-content">이메일 : {formattedEmail}</div>
                </div>
              </div>
              <div id="right-content-bottom">
                <h2>최근 주문상품</h2>
                <div id="recent-purchase-products"></div>
              </div>
            </div>
          )}
            

        </div>
      </div>
  );
}

export default Mypage;