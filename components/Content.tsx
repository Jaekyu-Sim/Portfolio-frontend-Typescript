import React, {useEffect, useState} from "react";
import {Row, Col, Divider, Typography, Tag} from "antd" ;
import developerImg1 from '../img/개발자1.png'
import developerImg2 from '../img/개발자2.png'
import developerImg3 from '../img/개발자3.png'
import developerImg4 from '../img/개발자4.png'
import developerImg5 from '../img/개발자심재규입니다.png'
//import githubIcon from '../img/githubIcon.png';
import githubIcon from '../img/githubIcon.svg'
import title from '../img/Title.png';

// import title2 from '../img/Title2.PNG';
// import myPic from '../img/내사진2.jpg';
// import myPic2 from '../img/우리사진.jpg';
// import myPic3 from '../img/졸업작품.PNG';

import CarouselImg1 from '../img/TitlePage/001.jpg'
import CarouselImg2 from '../img/TitlePage/002.jpg'

import SubPageImg1 from '../img/SubPage/003.jpg'
import SubPageImg2 from '../img/SubPage/004.jpg'
import SubPageImg3 from '../img/SubPage/005.jpg'

import ButtonMui from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';

import githubResult1 from '../img/githubResult1.png'


import poseEstimationOutput from '../img/PoseEstimationOutput.PNG'
import handKeypointDetectionOutput from '../img/HandKeypointDetectionOutput.PNG'
import SKHynixLogo from '../img/SKHynix.jpg'
import SKCCLogo from '../img/SKCC.png'

import ContentStyles from "../styles/Content.module.css"

// import AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from "next/image";

//import Divider from '@mui/material/Divider';

/*
position: fixed;
  top: 0;
  left: 0;
  height: 56px;
  width: 100%;
  background-color: skyblue;


  position : relative;
  transform : translateY(-100%);
*/

const Content = () => {

    //Variables
    //AOS.init();

    // let size = {
    //     width: window.innerWidth || document.body.clientWidth,
    //     height: window.innerHeight || document.body.clientHeight 
    //   };

    

    //States
    const [cardLoading, setCardLoading] = useState(false);
    //const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
    //const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
    const [browserWidth, setBrowserWidth] = useState(0);
    const [browserHeight, setBrowserHeight] = useState(0);
    const [project1Content, setProject1Content] = useState("pause");
    const [project2Content, setProject2Content] = useState("pause");
    const [project3Content, setProject3Content] = useState("pause");
    const [project4Content, setProject4Content] = useState("pause");
    const [project5Content, setProject5Content] = useState("pause");
    const [project6Content, setProject6Content] = useState("pause");

    //func
    const handleBrowserResize = () => {
        console.log("브라우저 크기 바뀜", window.innerHeight, window.innerWidth);
        setBrowserHeight(window.innerHeight);
        setBrowserWidth(window.innerWidth);
    }

    const handleBrowserLoad = () => {
        console.log("로드됨", window.innerHeight, window.innerWidth);
        setBrowserHeight(window.innerHeight);
        setBrowserWidth(window.innerWidth);
    }

    //useEffect
    // useEffect(()=>{
    //     console.log('가로 값이 바뀜', window.innerWidth)
    //     setBrowserWidth(window.innerWidth);
    //   }, [window.innerWidth]);
    
    // useEffect(()=>{
    //     console.log('세로 값이 바뀜', window.innerHeight)
    //     setBrowserHeight(window.innerHeight);
    // }, [window.innerHeight]);

    const handleBrowserScroll = () => {
        console.log("스크롤 변화 감지됨", window.scrollY, project1Content);
        if(window.scrollY < 2300)
        {
            console.log("스크롤 pause")
            setProject1Content("pause");
        }
        else{
            console.log("스크롤 running")
            setProject1Content("running");
        }

        if(window.scrollY < 3200)
        {
            console.log("스크롤 pause")
            setProject2Content("pause");
        }
        else{
            console.log("스크롤 running")
            setProject2Content("running");
        }

        if(window.scrollY < 3900)
        {
            console.log("스크롤 pause")
            setProject3Content("pause");
        }
        else{
            console.log("스크롤 running")
            setProject3Content("running");
        }

        if(window.scrollY < 4600)
        {
            console.log("스크롤 pause")
            setProject4Content("pause");
        }
        else{
            console.log("스크롤 running")
            setProject4Content("running");
        }

        if(window.scrollY < 5400)
        {
            console.log("스크롤 pause")
            setProject5Content("pause");
        }
        else{
            console.log("스크롤 running")
            setProject5Content("running");
        }

        if(window.scrollY < 6100)
        {
            console.log("스크롤 pause")
            setProject6Content("pause");
        }
        else{
            console.log("스크롤 running")
            setProject6Content("running");
        }
        
        
    }

    useEffect(() => {
        AOS.init();
    })

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
        <div style={{width:"100%"}}>
        <div style={{background:"#91D1D3", position: "relative",  height: "100%", width:browserWidth, minHeight:"50px", flex:"1"}}>
            <div style={{paddingLeft:"5%", paddingBottom:"20px"}}>
                <div className={ContentStyles.pape} style={{fontFamily:"ParkYongJun", fontSize:"30px"}}>

                    1. Introduction

                </div>
            </div>
            <div className={ContentStyles.paper}>
                <div className={ContentStyles.paperContent}>
                    <div style={{height:"fit-content"}}>
                        안녕하세요, 깊이있게 실력을 키우고자 하는 개발자 <span style={{color:"blue"}}>심재규</span> 입니다.<br></br>
                        낯선 분야로의 도전을 두려워 하지 않고, 꾸준히 역량향상을 하며 개발 영역을 서서히 넓히고 있습니다.<br></br><br></br>
                        <span style={{color:"blue", justifyContent:"center", alignItems:"center"}}>현실에 안주하지 말자</span><br></br><br></br>
                        제가 가장 추구하고있는 인생모토입니다. 이 말을 모토로 업무에 임하며, 타협없이 일하고 꾸준히 역량 향상을 추구해오고 있습니다.<br></br>
                        또한, 낯선분야에서의 시작을 두려워 하지 않고, 문제를 빠르게 정의하고 해결하는 개발자가 되도록 노력하고있습니다.<br></br><br></br>
                    </div>
                    <div style={{}}>
                        <div>Contact
                        
                        <ul>
                            <li>
                                Github : 
                                <a href="https://github.com/JAEKYU-SIM" style={{color:"blue"}}>
                                    {/* <img style={{width:"2%"}} src={githubIcon}></img>*/}
                                    https://github.com/JAEKYU-SIM
                                </a>
                            </li>
                        
                            <br></br>
                            <li>
                                Blog : 
                                <a href="https://blog.naver.com/worb1605" style={{color:"blue"}}>
                                    {/* <img style={{width:"2%"}} src={githubIcon}></img>*/}
                                    https://blog.naver.com/worb1605
                                </a>
                            </li>
                            <br></br>
                            <li>
                                Mail : worb1605@naver.com
                            </li>
                            {/* <img style={{width:"2%"}} src={githubIcon}></img>*/}
                        </ul>
                        </div>
                    </div>


                </div>
            </div>

            <div style={{paddingLeft:"5%", paddingBottom:"20px", paddingTop:"50px"}}>
                <div className={ContentStyles.pape} style={{fontFamily:"ParkYongJun", fontSize:"30px"}}>

                    2. Tech Stack

                </div>
            </div>
            <div style={{fontFamily:"ParkYongJun", fontSize:"30px", alignItems:"center", justifyContent:"center", display:"flex"}} >
            Language : Javascript / Java / Oracle SQL / Python<br></br>
            Framework/Library : React / Vue / Springboot / Tensorflow<br></br>
            Domain : 반도체, AI, Computer Vision
            {/* <Chip label="React" color="primary"></Chip>
            <Chip label="Javascript" color="secondary"></Chip>
            <Chip label="Springboot" color="primary"></Chip>
            <Chip label="Java" color="primary"></Chip>
            <Chip label="Tensorflow" color="primary"></Chip>
            <Chip label="Python" color="primary"></Chip>
            <Chip label="AI" color="primary"></Chip>
            <Chip label="Compurter Vision" color="primary"></Chip>
            <Chip label="Pose Estimation" color="primary"></Chip> */}
            </div>
            <div style={{display:"flex"}}>
                <div data-aos="flip-right" style={{paddingLeft:"17.5%", paddingBottom:"20px", paddingTop:"55px", position:"absolute", zIndex:"2"}}>
                    <div className={ContentStyles.papeTag} style={{fontFamily:"ParkYongJun", fontSize:"30px", alignItems:"center", justifyContent:"center", display:"flex", width:"100%"}}>

                        Frontend

                    </div>
                </div>
                <div  className={ContentStyles.sticker} style={{zIndex:"1", left: "0%", transform: "translate(10%, 10%)"}} >
                    <div data-aos="flip-right" className={ContentStyles.stickerContent}>
                        <div data-aos="flip-right" style={{height:"fit-content"}}>
                            <br></br>React <br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    Redux, Saga 패턴을 적용한 상태관리 라이브러리를 사용한 경험이 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    Antd, Ag-grid, MUI 등의 라이브러리를 사용하여 기업 시스템 개발을 한 경험이 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    Socket 통신 기반의 React Chatting 프로그램을 구현해본 경험이 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    실시간 가상 반도체장비 모니터링 시스템 UI 구축 경험이 있습니다.
                                </li>
                            </ul>
                            <br></br>CSS<br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    CSS 파일을 통하여 UI Component들의 Style 값을 관리할 수 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    CSS 문법에 익숙합니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>              
                <div  data-aos="flip-left" style={{paddingLeft:"60.5%", paddingBottom:"20px", paddingTop:"55px", position:"absolute", zIndex:"2"}}>
                    <div className={ContentStyles.papeTag} style={{fontFamily:"ParkYongJun", fontSize:"30px", alignItems:"center", justifyContent:"center", display:"flex", width:"100%"}}>

                        Backend

                    </div>
                </div>
                <div  className={ContentStyles.sticker} style={{zIndex:"1", left: "-7%", transform: "translate(10%, 10%)"}}>
                    <div data-aos="flip-left" className={ContentStyles.stickerContent}>
                        <div data-aos="flip-left" style={{height:"fit-content"}}>
                            <br></br>Springboot <br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    Springboot를 활용한 REST API 구축을 할 수 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    F/E 의 API 호출에 따른 내부 Core Logic을 구현할 수 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    Service/Implement 의 추상화 구조로 프로젝트를 구축한 경험이 있습니다.
                                </li>
                            </ul>
                            <br></br>SQL<br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    Oracle SQL 기반의 Table 설계, Query문 설계 업무를 수행한 경험이 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    index 를 설정하여 탐색 속도 향상을 구현할 수 있습니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="flip-up" style={{display:"flex", paddingTop:"30px", justifyContent:"center"}}>
                <div style={{paddingBottom:"20px", paddingTop:"55px", paddingRight:"8%",position:"absolute", zIndex:"2"}}>
                    <div className={ContentStyles.papeTag} style={{fontFamily:"ParkYongJun", fontSize:"30px",width:"100%"}}>

                        AI / Computer Vision

                    </div>
                </div>
                <div className={ContentStyles.sticker} style={{zIndex:"1", left: "0%", transform: "translate(0%, 10%)"}}>
                    <div className={ContentStyles.stickerContent}>
                        <div style={{height:"fit-content"}}>
                            <br></br>AI <br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    Object Detection, GAN, STN 등 다양한 Network를 학습하고 구현하였습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    구현한 Network의 한계점을 찾고, 이를 개선하는 활동을 해왔습니다.
                                </li>
                                
                            </ul>
                            <br></br>Computer Vision <br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    Computer Vision 분야 중 Human Pose Estimation 분야에 대해 연구하고 개발한 경험이 있습니다.
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    Edge detection, Optical Flow 등 고전 영상처리 알고리즘의 동작 원리에 대해 이해하고 구현한 경험이 있습니다.
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div> 
            </div>

            <div style={{paddingLeft:"5%", paddingBottom:"0px", paddingTop:"100px"}}>
                <div className={ContentStyles.pape} style={{fontFamily:"ParkYongJun", fontSize:"30px"}}>

                    3. Projects

                </div>
            </div>
            <div style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                <div className={ContentStyles.frame} style={{width:"30%"}}>
                    <Image style={{width:"100%"}} src={poseEstimationOutput} alt="poseEstimationImg"></Image>
                </div>


                <div className={ContentStyles.projectPaper}>
                    <div className={ContentStyles.projectPaperContent}>
                        <div style={{height:"fit-content"}}>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project1Content}}>
                                * 프로젝트명<br></br>
                                 - 가려짐이 있는 신체의 키포인트 검출 (18.03 ~ 19.02)
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project1Content}}>
                                * 프로젝트 수행 인원<br></br>
                                 - 1명
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project1Content}}>
                                * 회사명<br></br>
                                 - 로보메이션(산학과제)
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project1Content}}>
                                * 주요 기술<br></br>
                                 - Tensorflow, Python, Computer Vision
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project1Content}}>
                                * 내용<br></br>
                                <ul>
                                    <li>
                                        Pose Estimation 분야 SOTA 논문(Open Pose) 학습
                                    </li>
                                    <li >
                                        Base Line Network 구현 및 및 한계점 확인
                                    </li>
                                    <li>
                                        Recurrent 구조 Network 고안 및 적용, 개발
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                


                <div className={ContentStyles.projectPaper}>
                    <div className={ContentStyles.projectPaperContent}>
                        <div style={{height:"fit-content"}}>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 프로젝트명<br></br>
                                 - 가려짐이 있는 손 이미지의 키포인트 검출 (19.03 ~ 20.02)
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 프로젝트 수행 인원<br></br>
                                 - 1명
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 회사명<br></br>
                                 - 로보메이션(산학과제)
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 주요 기술<br></br>
                                 - Tensorflow, Python, Computer Vision
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 내용<br></br>
                                <ul>
                                    <li>
                                        Hand Keypoint Detection 분야 SOTA 논문 학습
                                    </li>
                                    <li >
                                        Base Line Network 구현 및 기존 Hand Keypoint Detection 한계점 확인
                                    </li>
                                    <li>
                                        Hand Image Cropping 방식 개선 및 Recurrnt구조  Network 고안 및 적용
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ContentStyles.frame} style={{width:"30%"}}>
                    <Image style={{width:"100%"}} src={handKeypointDetectionOutput} alt="handKyepointDetectionImg"></Image>
                </div>
            </div>


            <div style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                
                <div className={ContentStyles.frame} style={{width:"30%"}}>
                    <Image style={{width:"100%"}} src={SKHynixLogo} alt="SKHynixLogo"></Image>
                </div>


                <div className={ContentStyles.projectPaper}>
                    <div className={ContentStyles.projectPaperContent}>
                        <div style={{height:"fit-content"}}>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project3Content}}>
                                * 프로젝트명<br></br>
                                 - SK Hynix M16 생산정보시스템 smartMCC 구축 (20.04 ~ 21.02)
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project3Content}}>
                                * 프로젝트 수행 인원<br></br>
                                 - 2명
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project3Content}}>
                                * 회사명<br></br>
                                 - SK Hynix
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project3Content}}>
                                * 주요 기술<br></br>
                                 - C#, Java, Oracle SQL
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project3Content}}>
                                * 내용<br></br>
                                <ul>
                                    <li>
                                        SK Hynix 신규 Fab 증설에 따른 Legacy 시스템 횡전개
                                    </li>
                                    <li >
                                        smartMCC 시스템 기능 고도화
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

            <div style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                <div className={ContentStyles.projectPaper}>
                    <div className={ContentStyles.projectPaperContent}>
                        <div style={{height:"fit-content"}}>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project4Content}}>
                                * 프로젝트명<br></br>
                                 - SK Hynix R4 CPS 가상장비시스템 구축 (21.03 ~ 22.02)
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project4Content}}>
                                * 프로젝트 수행 인원<br></br>
                                 - 3명
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project4Content}}>
                                * 회사명<br></br>
                                 - SK Hynix
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project4Content}}>
                                * 주요 기술<br></br>
                                 - React, Javascript, Springboot, Java, Oracle SQL
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project4Content}}>
                                * 내용<br></br>
                                <ul>
                                    <li>
                                        React 기반의 SK Hynix 가상장비 시스템 UI 컴포넌트 개발
                                    </li>
                                    <li >
                                        Spingboot 기반의 가상장비 시스템 API 개발
                                    </li>
                                    <li >
                                        DB Table 설계 및 Query문 작성
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ContentStyles.frame} style={{width:"30%"}}>
                    <Image style={{width:"100%"}} src={SKHynixLogo} alt="SKHynixLogo"></Image>
                </div>
                
            </div>

            <div style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                <div className={ContentStyles.frame} style={{width:"30%"}}>
                    <Image style={{width:"100%"}} src={SKCCLogo} alt="SKCCLogo"></Image>
                </div>
                <div className={ContentStyles.projectPaper}>
                    <div className={ContentStyles.projectPaperContent}>
                        <div style={{height:"fit-content"}}>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project5Content}}>
                                * 프로젝트명<br></br>
                                 - SK C&C Log Anomaly Detection (21.12 ~ 22.02)
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project5Content}}>
                                * 프로젝트 수행 인원<br></br>
                                 - 1명
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project5Content}}>
                                * 회사명<br></br>
                                 - SK C&C
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project5Content}}>
                                * 주요 기술<br></br>
                                 - Python, Tensorflow
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project5Content}}>
                                * 내용<br></br>
                                <ul>
                                    <li>
                                        팀 내 Log Anomaly Detection PoC 업무 수행
                                    </li>
                                    <li >
                                        System Log Anomaly Detection 분야 Research 수행
                                    </li>
                                    <li >
                                        DeepLog(Log Anomaly Detection 분야 SOTA) Paper 리뷰 및 구현 결과 발표(to 파트)
                                    </li>
                                    <li >
                                        SK Hynix 내 Legacy 시스템 Log로 학습 및 결과 발표
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>

            <div style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                
                <div className={ContentStyles.projectPaper}>
                    <div className={ContentStyles.projectPaperContent}>
                        <div style={{height:"fit-content"}}>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project6Content}}>
                                * 프로젝트명<br></br>
                                 - SK Hynix CPS 기능 고도화 (22.03 ~ 현재)
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project6Content}}>
                                * 프로젝트 수행 인원<br></br>
                                 - 1명
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project6Content}}>
                                * 회사명<br></br>
                                 - SK Hynix
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project6Content}}>
                                * 주요 기술<br></br>
                                 - React, Javascript, Springboot, Java, JUnit5, Oracle SQL
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project6Content}}>
                                * 내용<br></br>
                                <ul>
                                    <li>
                                        React 기반의 SK Hynix 가상장비 시스템 UI 컴포넌트 추가 개발
                                    </li>
                                    <li >
                                        Javascript 를 이용한 가상장비 XML 형태 로그파일 Parsing Modal 개발
                                    </li>
                                    <li >
                                        가상장비 Recovery 기능 구현
                                    </li>
                                    <li >
                                        가상장비 Backend 서버 API 개발 및 TDD 적용(JUnit5)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ContentStyles.frame} style={{width:"30%"}}>
                    <Image style={{width:"100%"}} src={SKHynixLogo} alt="SKHynixLogo"></Image>
                </div>
                
                
            </div>
            
            
            
        </div>
        </div>
    )
}

export default Content;