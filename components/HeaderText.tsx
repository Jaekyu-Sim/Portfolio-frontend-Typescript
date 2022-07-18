import React, {useState, useEffect} from "react";
import {Row, Col, Divider, Typography} from "antd" ;
import HeaderStyles from '../styles/Header.module.css'
import zIndex from "@mui/material/styles/zIndex";


const { Title, Paragraph, Text, Link } = Typography;

/*
    Header Component
*/

interface ParamProps {
    children: never[];
    props: number;
  }


const HeaderText = ({children, props}: ParamProps) => {

    const scrollData = props;
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        setScrollPosition(scrollData)
    }, [scrollData])
    return(
    <div>

        <div style={{fontFamily:"ParkYongJun", fontSize:"12vw", paddingTop:"15vh", position: "relative", zIndex:"3", transform:`translateX(${scrollPosition}px)`, float:"left"}}>
            안녕하세요<br/>
        </div>


        <div style={{fontFamily:"ParkYongJun", fontSize:"12vw", position: "relative", zIndex:"2", transform:`translateX(-${scrollPosition}px)`, float:"right"}}>
            심재규 입니다
        </div>
    </div>
    )


}


export default HeaderText;