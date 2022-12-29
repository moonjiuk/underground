import { useState } from "react";

function Singin(){

  const [pwWarnig, setPwWarnig] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const changePw = (e) => {
    const copyPwWarning = pwWarnig
    setPw(e.target.value);
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g.test(pw) ? setPwWarnig('') : setPwWarnig('조건에 일치하지 않습니다.');
  }

  return(
    <div className="signin">
      <h1>회원가입</h1>
      <div className="inputs">
        <div className="inputBox">
          <span className="inputName">이메일</span>
          <input />
          <span className="rhfqoddl">@</span>
          <select />
          <button className="confirmNumBtn">인증번호 받기</button>
        </div>
        <div className="inputBox">
          <span className="inputName">인증번호</span>
          <input />
          <button className="confirmBtn">인증</button>
        </div>
        <div className="inputBox">
          <span className="inputName">비밀번호</span>
          <input type="password" value={pw} onChange={(e) => changePw(e)} />
        </div>
        <div>{pwWarnig}</div>
        <div className="inputBox">
          <span className="inputName">비밀번호 확인</span>
          <input type="password" />
        </div>
        <div className="inputBox">
          <span className="inputName">전화번호</span>
          <input type="tel" />
        </div>
        <div className="inputBox">
          <span className="inputName">수신 동의</span>
          <div className="checkboxContainer">
          <input type="checkbox" /> 
          <span className="checkboxName">SMS 수신 동의</span>
          <input type="checkbox" /> 
          <span className="checkboxName">이메일 수신 동의</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singin;