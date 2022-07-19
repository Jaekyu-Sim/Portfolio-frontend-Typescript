import React, {useEffect, useState} from "react";
import {Row, Col, Divider, Typography, Tag} from "antd" ;


import poseEstimationOutput from '../img/PoseEstimationOutput.PNG'
import handKeypointDetectionOutput from '../img/HandKeypointDetectionOutput.PNG'
import SKHynixLogo from '../img/SKHynix.jpg'
import SKCCLogo from '../img/SKCC.png'

import ContentStyles from "../styles/Content.module.css"

// import AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from "next/image";

import { introductionData, techstackData, techstackFrontendData, techstackCssData, techstackBackendData, techstackSQLData, techstackAIData, techstackCVData, projectList } from "../datas/contentData";

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
                        {introductionData.line1} <span style={{color:"blue"}}>{introductionData.line2}</span> {introductionData.line3}<br></br>
                    </div>
                    <div style={{height:"fit-content"}}>
                        {introductionData.line4}<br></br><br></br>
                    </div>
                    <div style={{height:"fit-content"}}>
                        <span style={{color:"blue", justifyContent:"center", alignItems:"center"}}>{introductionData.line5}</span><br></br><br></br>
                    </div>
                    <div style={{height:"fit-content"}}>
                        {introductionData.line6}<br></br>
                    </div>
                    <div style={{height:"fit-content"}}>
                        {introductionData.line7}<br></br><br></br>
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
            Language : {techstackData.techstackLanguage}<br></br>
            Framework/Library : {techstackData.techstackFramework}<br></br>
            Domain : {techstackData.techstackDomain}
            

            </div>
            <div style={{display:"flex"}}>
                <div data-aos="flip-right" style={{paddingLeft:"17.5%", paddingBottom:"20px", paddingTop:"60px", position:"absolute", zIndex:"2"}}>
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
                                    {techstackFrontendData.techstackFrontendLine1}
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    {techstackFrontendData.techstackFrontendLine2}
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    {techstackFrontendData.techstackFrontendLine3}
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    {techstackFrontendData.techstackFrontendLine4}
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    {techstackFrontendData.techstackFrontendLine5}
                                </li>
                            </ul>
                            <br></br>CSS<br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    {techstackCssData.techstackCssLine1}
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    {techstackCssData.techstackCssLine2}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>              
                <div  data-aos="flip-left" style={{paddingLeft:"60.5%", paddingBottom:"20px", paddingTop:"60px", position:"absolute", zIndex:"2"}}>
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
                                    {techstackBackendData.techstackBackendLine1}
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    {techstackBackendData.techstackBackendLine2}
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    {techstackBackendData.techstackBackendLine3}
                                </li>
                            </ul>
                            <br></br>SQL<br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    {techstackSQLData.techstackSQLLine1}
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    {techstackSQLData.techstackSQLLine2}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="flip-up" style={{display:"flex", paddingTop:"30px", justifyContent:"center"}}>
                <div style={{paddingBottom:"20px", paddingTop:"60px", paddingRight:"8%",position:"absolute", zIndex:"2"}}>
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
                                    {techstackAIData.techstackAILine1}
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    {techstackAIData.techstackAILine2}
                                </li>
                                
                            </ul>
                            <br></br>Computer Vision <br></br>
                            <ul>
                                <li style={{fontSize:"20px"}}>
                                    {techstackCVData.techstackCVLine1}
                                </li>
                                <li style={{fontSize:"20px"}}>
                                    {techstackCVData.techstackCVLine2}
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
                                 {projectList[0].projectName}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project1Content}}>
                                * 프로젝트 수행 인원<br></br>
                                {projectList[0].projectTO}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project1Content}}>
                                * 회사명<br></br>
                               {projectList[0].corpName}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project1Content}}>
                                * 주요 기술<br></br>
                                {projectList[0].mainTech}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project1Content}}>
                                * 내용<br></br>
                                <ul>
                                    <li>
                                        {projectList[0].content[0]}
                                    </li>
                                    <li >
                                        {projectList[0].content[1]}
                                    </li>
                                    <li>
                                        {projectList[0].content[2]}
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
                                {projectList[1].projectName}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 프로젝트 수행 인원<br></br>
                                 {projectList[1].projectTO}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 회사명<br></br>
                                {projectList[1].corpName}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 주요 기술<br></br>
                                 {projectList[1].mainTech}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 내용<br></br>
                                <ul>
                                    <li>
                                        {projectList[1].content[0]}
                                    </li>
                                    <li >
                                         {projectList[1].content[1]}
                                    </li>
                                    <li>
                                         {projectList[1].content[2]}
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
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 프로젝트명<br></br>
                                {projectList[2].projectName}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 프로젝트 수행 인원<br></br>
                                 {projectList[2].projectTO}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 회사명<br></br>
                                {projectList[2].corpName}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 주요 기술<br></br>
                                 {projectList[2].mainTech}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 내용<br></br>
                                <ul>
                                    <li>
                                        {projectList[2].content[0]}
                                    </li>
                                    <li >
                                         {projectList[2].content[1]}
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
                                {projectList[3].projectName}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 프로젝트 수행 인원<br></br>
                                 {projectList[3].projectTO}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 회사명<br></br>
                                {projectList[3].corpName}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 주요 기술<br></br>
                                 {projectList[3].mainTech}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 내용<br></br>
                                <ul>
                                    <li>
                                        {projectList[3].content[0]}
                                    </li>
                                    <li >
                                         {projectList[3].content[1]}
                                    </li>
                                    <li>
                                         {projectList[3].content[2]}
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
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 프로젝트명<br></br>
                                {projectList[4].projectName}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 프로젝트 수행 인원<br></br>
                                 {projectList[4].projectTO}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 회사명<br></br>
                                {projectList[4].corpName}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 주요 기술<br></br>
                                 {projectList[4].mainTech}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 내용<br></br>
                                <ul>
                                    <li>
                                        {projectList[4].content[0]}
                                    </li>
                                    <li >
                                         {projectList[4].content[1]}
                                    </li>
                                    <li>
                                         {projectList[4].content[2]}
                                    </li>
                                    <li>
                                         {projectList[4].content[3]}
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
                                {projectList[5].projectName}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 프로젝트 수행 인원<br></br>
                                 {projectList[5].projectTO}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 회사명<br></br>
                                {projectList[5].corpName}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 주요 기술<br></br>
                                 {projectList[5].mainTech}
                            </div>
                            <br></br>
                            <div className={ContentStyles.typingDemo}  style={{ width:"100%", animationPlayState:project2Content}}>
                                * 내용<br></br>
                                <ul>
                                    <li>
                                        {projectList[5].content[0]}
                                    </li>
                                    <li >
                                         {projectList[5].content[1]}
                                    </li>
                                    <li>
                                         {projectList[5].content[2]}
                                    </li>
                                    <li>
                                         {projectList[5].content[3]}
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