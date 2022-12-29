import { useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import noticeData from "../noticeData"

function Notice() {
  const data = noticeData.sort((a, b) => b.no - a.no);
  const notices = [];
  const pages = [];
  const [currPage, setCurrPage] = useState(1);
  const totalPages = Math.ceil(data.length/10);
  
  for (let i=0; i<totalPages; i++) {
    notices[i] = data.filter((notice, idx) => idx>=i*10 && idx<i*10+10);
    pages[i] = i+1;
  }

  return(
    <div className="notice">
    <h1>공지</h1>
      <Routes>
        <Route path="/" element={<NoticeList notices={notices} pages={pages} currPage={currPage} setCurrPage={setCurrPage}/>} />
        <Route path={"/:id"} element={<NoticeDetail data={data} />} />
      </Routes>
    </div>
  )
}

function NoticeList(props) {

  const navigate = useNavigate();
  const notices = props.notices;
  const pages = props.pages;

  const nextPage = () => {
    if (props.currPage !== pages[pages.length-1]) props.setCurrPage(props.currPage+1);
  }
  const prevPage = () => {
    if (props.currPage !== 1) props.setCurrPage(props.currPage-1);
  }

  return (
    <div className="noticeList">
      <div className="listBox">
        <ul>
          <li>
            <span className="no">No</span>
            <span className="title">제목</span>
          </li>
          {
            notices[props.currPage-1].map((notice) => {
              return (
                <li onClick={() => {navigate('/notice/'+notice.no)}}>
                  <span className="no">{notice.no}</span>
                  <span className="title">{notice.title}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="pages">
        <button onClick={() => {props.setCurrPage(1)}}>{'<<'}</button>
        <button onClick={prevPage}>{'<'}</button>
        {
          pages.map((page) => {
            return(
              <button className={page === props.currPage ? "currPageBtn" : "pageBtn"} onClick={() => {props.setCurrPage(page)}}>{page}</button>
            )
          })
        }
        <button onClick={nextPage}>{'>'}</button>
        <button onClick={() => {props.setCurrPage(pages[pages.length-1])}}>{'>>'}</button>
      </div>
    </div>  
  )
}

function NoticeDetail(props) {
  
  const n = parseInt(useParams().id);
  const notice = props.data.filter((notice) => notice.no===n);
  return(
    <div className="noticeDetail">
      <h2>{notice[0].title}</h2>
      <div className="content">{notice[0].content}</div>
    </div>
  )
}

export default Notice;