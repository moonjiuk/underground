import { useState } from "react";

function Find(){

  const [findMode, setFindMode] = useState(true);

  return(
    <div className="find">
      <div className="findBtns">
        <button className={findMode ? "selectedFindBtn" : null} onClick={() => {setFindMode(true)}}>아이디 찾기</button>
        <button className={findMode ? null : "selectedFindBtn"} onClick={() => {setFindMode(false)}}>비밀번호 찾기</button>
      </div>
      <div className="confirmBtns">
        <div className="confirmBtnBox">
          <button>
            <img src={process.env.PUBLIC_URL + '/assets/telephone.png'} />
          </button>
          <div>전화번호 인증</div>
        </div>
        <div className="confirmBtnBox">
          <button>
            <img src={process.env.PUBLIC_URL + '/assets/messege.png'} />
          </button>
          <div>이메일 인증</div>
        </div>
      </div>
    </div>
  )
}

export default Find;
