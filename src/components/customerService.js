import { useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import FAQData from "../FAQData";
import inquiryData from "../inquiryData";

function CustomerService(){

  
  return(
    <div className="customerService">
    <Routes>
      <Route path="/" element={<FAQ />} />
      <Route path={"/inquiry/*"} element={<Inquiry />} />
    </Routes>
    </div>
  )
}

function FAQ() {
  const FAQ = [];
  const FAQCategorys = ['계정', '결제', '영화 등록 문의', '오류'];
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [selectedFAQ, setSelectedFAQ] = useState();

  const navigate = useNavigate();
  
  for (let i=0; i<5; i++) {
    FAQ[i] = FAQData.filter((FAQ) => FAQ.category===FAQCategorys[i]);
  }

  return(
    <div className="FAQ">
      <h1>고객센터</h1>
      <div className="FAQBox">
        <div className="FAQCategorys">
          {
            FAQCategorys.map((category, idx) => {
              return(
                <div>
                  <button className="categoryBtn" onClick={() => {setSelectedCategory(selectedCategory===idx ? -1 : idx)}}>{category}</button>
                  {
                    selectedCategory === idx ? 
                    FAQ[idx].map((FAQ) => {
                      return(
                        <button className="FAQBtn" onClick={() => setSelectedFAQ(FAQ)}>{FAQ.title}</button>
                      )
                    }):
                    null
                  }
                </div>
              )
            })
          }
        </div>
        <div className="FAQContent">
        {
          selectedFAQ ?
          <div>
            <h2>{selectedFAQ.title}</h2>
            <div className="content">{selectedFAQ.content}</div>
          </div>
          :
          <div className="FAQComment">FAQ 카테고리에서 문의하실 내용을 선택해주세요.</div>
        }
        </div>
      </div>
      <button className="inquiryBtn" onClick={() => {navigate('/customerService/inquiry')}}>1대1 문의</button>
    </div>
  )
}

function Inquiry() {
  const data = inquiryData.sort((a, b) => b.no - a.no);
  const inquiries = [];
  const pages = [];
  const [currPage, setCurrPage] = useState(1);
  const totalPages = Math.ceil(data.length/10);
  
  for (let i=0; i<totalPages; i++) {
    inquiries[i] = data.filter((inquiry, idx) => idx>=i*10 && idx<i*10+10);
    pages[i] = i+1;
  }

  return(
    <div className="inquiry">
    <h1>1대1 문의</h1>
      <Routes>
        <Route path="/" element={<InquiryList inquiries={inquiries} pages={pages} currPage={currPage} setCurrPage={setCurrPage}/>} />
        <Route path={"/:id"} element={<InquiryDetail data={data} />} />
        <Route path="/post" element={<InquiryPost />} />
      </Routes>
    </div>
  )
}

function InquiryList(props) {

  const navigate = useNavigate();
  const inquiries = props.inquiries;
  const pages = props.pages;

  const nextPage = () => {
    if (props.currPage !== pages[pages.length-1]) props.setCurrPage(props.currPage+1);
  }
  const prevPage = () => {
    if (props.currPage !== 1) props.setCurrPage(props.currPage-1);
  }

  return (
    <div className="inquiryList">
      <button className="postBtn" onClick={() => {navigate('/customerService/inquiry/post')}}>글쓰기</button>
      <div className="listBox">
        <ul>
          <li>
            <span className="no">No</span>
            <span className="title">제목</span>
          </li>
          {
            inquiries[props.currPage-1].map((inquiry) => {
              return (
                <li onClick={() => {navigate('/customerService/inquiry/'+inquiry.no)}}>
                  <span className="no">{inquiry.no}</span>
                  <span className="title">{inquiry.title}</span>
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

function InquiryDetail(props) {
  
  const n = parseInt(useParams().id);
  const inquiry = props.data.filter((inquiry) => inquiry.no===n);
  return(
    <div className="inquiryDetail">
      <h2>{inquiry[0].title}</h2>
      <div className="content">{inquiry[0].content}</div>
    </div>
  )
}

function InquiryPost() {

  const [inquiryTitle, setInquiryTitle] = useState('')
  const [inquiryCategory, setInquiryCategory] = useState('선택하기')
  const [inquiryContent, setInquiryContent] = useState('')

  const post = () =>{
    if (inquiryCategory === '선택하기') alert('분류를 선택해주세요.');
    else console.log(inquiryTitle, inquiryCategory, inquiryContent);
  }

  return(
    <div className="inquiryPost">
      <div className="inputs">
        <div className="inputBox">
          <span className="inputName">제목</span>
          <input value={inquiryTitle} onChange={(e) => {setInquiryTitle(e.target.value)}}></input>
        </div>
        <div className="inputBox">
          <span className="inputName">분류</span>
          <select value={inquiryCategory} onChange={(e) => {setInquiryCategory(e.target.value)}}>
            <option key='선택하기' value='선택하기'>선택하기</option>
            <option key='계정' value='계정'>계정</option>
            <option key='결제' value='결제'>결제</option>
            <option key='영화 등록 문의' value='영화 등록 문의'>영화 등록 문의</option>
            <option key='오류' value='오류'>오류</option>
          </select>
        </div>
        <div className="inputBox">
          <textarea placeholder="1대1 문의 내용을 입력해주세요" value={inquiryContent} onChange={(e) => {setInquiryContent(e.target.value)}}></textarea>
        </div>
      </div>
      <button className="postBtn" onClick={post}>1대1 문의 등록</button>
    </div>
  )
}

export default CustomerService;