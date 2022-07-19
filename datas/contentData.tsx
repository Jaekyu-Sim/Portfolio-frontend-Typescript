import React from "react";

export const introductionData = {
    line1 : "안녕하세요, 깊이있게 실력을 키우고자 하는 개발자",
    line2 : "심재규",
    line3 : "입니다.",
    line4 : "낯선 분야로의 도전을 두려워 하지 않고, 꾸준히 역량향상을 하며 개발 영역을 서서히 넓히고 있습니다.",
    line5 : "현실에 안주하지 말자",
    line6 : "제가 가장 추구하고있는 인생모토입니다. 이 말을 모토로 업무에 임하며, 타협없이 일하고 꾸준히 역량 향상을 추구해오고 있습니다.",
    line7 : "또한, 낯선분야에서의 시작을 두려워 하지 않고, 문제를 빠르게 정의하고 해결하는 개발자가 되도록 노력하고있습니다."
}

export const techstackData = {
    techstackLanguage : "Javascript / Java / Oracle SQL / Python",
    techstackFramework : "React / Vue / Springboot / Tensorflow",
    techstackDomain : "반도체, AI, Computer Vision",

}

export const techstackFrontendData = {
    techstackFrontendLine1: "Redux, Saga 패턴을 적용한 상태관리 라이브러리를 사용한 경험이 있습니다.",
    techstackFrontendLine2: "Antd, Ag-grid, MUI 등의 라이브러리를 사용하여 기업 시스템 개발을 한 경험이 있습니다.",
    techstackFrontendLine3: "Socket 통신 기반의 React Chatting 프로그램을 구현해본 경험이 있습니다.",
    techstackFrontendLine4: "실시간 가상 반도체장비 모니터링 시스템 UI 구축 경험이 있습니다.",
    techstackFrontendLine5: "NextJS 기반 Typescript 구현 경험이 있습니다.",
}

export const techstackCssData = {
    techstackCssLine1: "CSS 파일을 통하여 UI Component들의 Style 값을 관리할 수 있습니다.",
    techstackCssLine2: "CSS 문법에 익숙합니다.",

}

export const techstackBackendData = {
    techstackBackendLine1: "Springboot를 활용한 REST API 구축을 할 수 있습니다.",
    techstackBackendLine2: "F/E 의 API 호출에 따른 내부 Core Logic을 구현할 수 있습니다.",
    techstackBackendLine3: "Service/Implement 의 추상화 구조로 프로젝트를 구축한 경험이 있습니다.",
}

export const techstackSQLData = {
    techstackSQLLine1: "Oracle SQL 기반의 Table 설계, Query문 설계 업무를 수행한 경험이 있습니다.",
    techstackSQLLine2: "index 를 설정하여 탐색 속도 향상을 구현할 수 있습니다.",

}                

export const techstackAIData = {
    techstackAILine1: "Object Detection, GAN, STN 등 다양한 Network를 학습하고 구현하였습니다.",
    techstackAILine2: "구현한 Network의 한계점을 찾고, 이를 개선하는 활동을 해왔습니다.",
}

export const techstackCVData = {
    techstackCVLine1: "Computer Vision 분야 중 Human Pose Estimation 분야에 대해 연구하고 개발한 경험이 있습니다.",
    techstackCVLine2: "Edge detection, Optical Flow 등 고전 영상처리 알고리즘의 동작 원리에 대해 이해하고 구현한 경험이 있습니다.",
}

export const projectList = [
    {
        projectName : "- 가려짐이 있는 신체의 키포인트 검출 (18.03 ~ 19.02)",
        projectTO : "- 1명",
        corpName : "- 로보메이션(산학과제)",
        mainTech : "- Tensorflow, Python, Computer Vision",
        content: ["Pose Estimation 분야 SOTA 논문(Open Pose) 학습",
                  "Base Line Network 구현 및 및 한계점 확인",
                  "Recurrent 구조 Network 고안 및 적용, 개발"],
    },
    {
        projectName : "- 가려짐이 있는 손 이미지의 키포인트 검출 (19.03 ~ 20.02)",
        projectTO : "- 1명",
        corpName : "- 로보메이션(산학과제)",
        mainTech : "- Tensorflow, Python, Computer Vision",
        content: ["Hand Keypoint Detection 분야 SOTA 논문 학습",
                  "Base Line Network 구현 및 기존 Hand Keypoint Detection 한계점 확인",
                  "Hand Image Cropping 방식 개선 및 Recurrnt구조  Network 고안 및 적용"],
    },
    {
        projectName : "- SK Hynix M16 생산정보시스템 smartMCC 구축 (20.04 ~ 21.02)",
        projectTO : "- 2명",
        corpName : "- SK Hynix",
        mainTech : "- C#, Java, Oracle SQL",
        content: ["SK Hynix 신규 Fab 증설에 따른 Legacy 시스템 횡전개",
                  "smartMCC 시스템 기능 고도화"],
    },
    {
        projectName : "- SK Hynix R4 CPS 가상장비시스템 구축 (21.03 ~ 22.02)",
        projectTO : "- 3명",
        corpName : "- SK Hynix",
        mainTech : "- React, Javascript, Springboot, Java, Oracle SQL",
        content: ["React 기반의 SK Hynix 가상장비 시스템 UI 컴포넌트 개발",
                  "Spingboot 기반의 가상장비 시스템 API 개발",
                  "DB Table 설계 및 Query문 작성"],
    },
    {
        projectName : "- SK C&C Log Anomaly Detection (21.12 ~ 22.02)",
        projectTO : "- 1명",
        corpName : "- SK C&C",
        mainTech : "- Python, Tensorflow",
        content: ["팀 내 Log Anomaly Detection PoC 업무 수행",
                  "System Log Anomaly Detection 분야 Research 수행",
                  "DeepLog(Log Anomaly Detection 분야 SOTA) Paper 리뷰 및 구현 결과 발표(to 파트)",
                  "SK Hynix 내 Legacy 시스템 Log로 학습 및 결과 발표"],
    },
    {
        projectName : "- SK Hynix CPS 기능 고도화 (22.03 ~ 현재)",
        projectTO : "- 1명",
        corpName : "- SK Hynix",
        mainTech : "- React, Javascript, Springboot, Java, JUnit5, Oracle SQL",
        content: ["React 기반의 SK Hynix 가상장비 시스템 UI 컴포넌트 추가 개발",
                  "Javascript 를 이용한 가상장비 XML 형태 로그파일 Parsing Modal 개발",
                  "가상장비 Recovery 기능 구현",
                  "가상장비 Backend 서버 API 개발 및 TDD 적용(JUnit4)"],
    }
]