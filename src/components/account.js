
function Account(){
  return(
    <div className="account">
      <div className="infoBox">
        <div className="infoBoxName">기본 정보</div>
        <ul>
          <li>
            <span className="infoNameBox">계정 이메일</span>
            <span className="infoBox">saliormoon917@naver.com</span>
            <span className="btnBox">
              <button>변경</button>
            </span>
          </li>
          <li>
            <span className="infoNameBox">비밀번호</span>
            <span className="infoBox">xxxxxxxx</span>
            <span className="btnBox">
              <button>변경</button>
            </span>
          </li>
          <li>
            <span className="infoNameBox">전화번호</span>
            <span className="infoBox">010-6274-0069</span>
            <span className="btnBox">
              <button>변경</button>
            </span>
          </li>
          <li>
            <span className="infoNameBox">알림 설정</span>
            <span className="infoBox">
              <input type={"checkbox"} />
              <input type={"checkbox"} />
            </span>
            <span className="btnBox">
            </span>
          </li>
        </ul>
      </div>
      <div className="infoBox">
        <div className="infoBoxName">결제 정보</div>
        <ul>
          <li>
            <span className="infoNameBox">결제 수단</span>
            <span className="infoBox">신용카드 **** **** **** ****</span>
            <span className="btnBox">
              <button>변경</button>
            </span>
          </li>
          <li>
            <span className="infoNameBox">예비 결제 수단</span>
            <span className="infoBox"></span>
            <span className="btnBox">
            </span>
          </li>
          <li>
            <span className="infoNameBox">결제일</span>
            <span className="infoBox">00일 00시 00분</span>
            <span className="btnBox">
              <button>변경</button>
            </span>
          </li>
        </ul>
      </div>
      <div className="infoBox">
        <div className="infoBoxName">시청 데이터</div>
        <ul>
          <li>
            <span className="infoNameBox">시청 목록</span>
            <span className="infoBox">
              <span>영화1</span>
              <span>영화2</span>
              <span>영화3</span>
            </span>
            <span className="btnBox">
              <button>전체 시청 기록</button>
            </span>
          </li>
          <li>
            <span className="infoNameBox">누적 시청 시간</span>
            <span className="infoBox">00일 00시 00분</span>
            <span className="btnBox">
            </span>
          </li>
          <li>
            <span className="infoNameBox">일별 시청 시간</span>
            <span className="infoBox"></span>
            <span className="btnBox">
              <button>전체 시청 시간</button>
            </span>
          </li>
          <li>
            <span className="infoNameBox">총 시청 편수</span>
            <span className="infoBox">00편</span>
            <span className="btnBox">
              <button>?</button>
            </span>
          </li>
        </ul>
      </div>
      <div className="infoBox">
        <div className="infoBoxName">시청 설정</div>
        <ul>
          <li>
            <span className="infoNameBox">건너뛰기 시간 설정</span>
            <span className="infoBox">10초</span>
            <span className="btnBox">
              <button>변경</button>
            </span>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Account;