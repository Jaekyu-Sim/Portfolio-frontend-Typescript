import React, {useState, useEffect} from "react";
import {Row, Col, Divider, Typography} from "antd" ;
import HeaderStyles from '../styles/Header.module.css'
import zIndex from "@mui/material/styles/zIndex";
import HeaderText from "./HeaderText";


const { Title, Paragraph, Text, Link } = Typography;

/*
    Header Component
*/




const Header = () => {

    // let size :{width : number, height : number} = {
    //     width: window.innerWidth || document.body.clientWidth,
    //     height: window.innerHeight || document.body.clientHeight 
    //   };

    

    //States
    const [cardLoading, setCardLoading] = useState(false);
    const [browserWidth, setBrowserWidth] = useState(0);
    const [browserHeight, setBrowserHeight] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    //func
    const handleBrowserResize = () => {
        console.log("브라우저 크기 바뀜", window.innerHeight, window.innerWidth);
        setBrowserHeight(window.innerHeight);
        setBrowserWidth(window.innerWidth);
    }

    const handleBrowserScroll = () => {
        console.log("스크롤 변화 감지됨", window.scrollY);
        setScrollPosition(window.scrollY);
    }

    const handleBrowserLoad = () => {
        console.log("로드됨", window.innerHeight, window.innerWidth);
        setBrowserHeight(window.innerHeight);
        setBrowserWidth(window.innerWidth);
    }

    //useEffect


    useEffect(() => {
        window.addEventListener("resize", handleBrowserResize);
        return () => {
            window.removeEventListener("resize", handleBrowserResize);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleBrowserScroll);
        return () => {
            window.removeEventListener("scroll", handleBrowserScroll);
        }
    }, []);

    useEffect(() => {
        console.log("로딩완료")
        handleBrowserLoad()
        window.addEventListener("load", handleBrowserLoad);
        return () => {
            window.removeEventListener("load", handleBrowserLoad);
        }
    }, []);

    

    return (
        <div style={{width:browserWidth, height:browserHeight, background:"#91D1D3"}}>


                <HeaderText props = {scrollPosition}>
                    {/* 안녕하세요, 심재규 입니다. 부분 */}
                </HeaderText>
                <div className = {HeaderStyles.paperHeader} >
                    <div className={HeaderStyles.paperHeaderContent}>
                        <div style={{color:"#686561"}}>
                        <br></br>
                        <br></br>
                        <br></br>
                            오늘의 공부<br></br>
                            1. Programming Skill Up<br></br>
                            2. 업무 Logic 분석 및 개발
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;