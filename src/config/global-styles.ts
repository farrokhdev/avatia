import { createGlobalStyle } from "styled-components";

export const globalViewPorts = {
  xs: "640px",
  sm: "768px",
  md: "1024px",
  lg: "1200px",
  xl: "1360px",
};

export const LightTheme = {
  white10: "#EFF4FF",
  white100: "#FFFFFF",

  black50: "#000000",
  black100: "#000000",

  blue20: "#89B4FF",
  blue80: "#165ADE",
  blue90: "#165ADE",
  blue100: "#0E21A0",

  pink100: "#F60BB4",

  red100: "red",
  error100: "#F60BB4",
};
export const DarkTheme = {
  white100: "#FFFFFF",

  black100: "#000000",

  blue80: "#165ADE",
  blue90: "#165ADE",
  blue100: "#0E21A0",

  pink100: "#F60BB4",
};

// eslint-disable-next-line no-mixed-operators
const GlobalStyles = createGlobalStyle<{
  theme: {
    white100: string;
    black100: string;
    blue100: string;
    blue80: string;
    error100: string;
  };
}>`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    :root {
    --error-color:#F60BB4;
    --dark-gradient: linear-gradient(
    90deg,
    rgba(19, 19, 19, 1) 16%,
    rgba(40, 39, 39, 1) 57%,
    rgba(66, 66, 66, 1) 100%
  );
  --dark-gradient-hover: linear-gradient(
    90deg,
    rgba(19, 19, 19, 1) 12%,
    rgba(66, 66, 66, 1) 47%,
    rgba(66, 66, 66, 1) 100%
  );
  --button-hover:linear-gradient(90deg, rgba(0,163,255,1) 18%, rgba(22,90,222,1) 61%, rgba(14,33,160,1) 100%);
  --button-hover2:linear-gradient(90deg, rgba(255,0,107,1) 18%, rgba(254,64,223,1) 61%, rgba(195,24,255,1) 100%);
  --button-hover3: linear-gradient(90deg, rgba(22,90,222,1) 18%, rgba(14,33,160,1) 61%, rgba(246,11,180,1) 100%);
}
    body {
        font-family: "Poppins", sans-serif; 
        background: ${(props) => props.theme.white100};
    }
    .bottom-line {
        width: 100%;
        height: 1px;
        background: linear-gradient(
          90deg,
          rgba(39, 39, 39, 1) 0%,
          rgba(99, 99, 99, 1) 40%,
          rgba(39, 39, 39, 1) 100%
        );
        /* display: none; */
      }

    input {
  background-color: transparent;
  border: 2px solid #fff;
  padding: 10px 20px;
  border-radius: 20px;
  height: 80px;
  display: flex;
  align-items: center;
}
input.alert{
border: 2px solid ${({ theme }) => theme.error100} !important;
}

.back-btn{
    transition: 0.5s ease;
    padding: 10px !important;
    border-radius: 20px !important;
}
.back-btn:hover{
    background: var(--dark-gradient-hover);
}

    h1, h2, h3, h4, h5, h6, span, p, a {
        font-family: "Poppins", sans-serif;
    }

    a{
        color: ${(props) => props.theme.blue100};
    }

    .create-heading{
        font-size: 66px;
    }

    h1,.heading1{
        font-size: 64px;
        font-weight: 700;
        margin: 0px;
    }
    
    h2,.heading2{
        font-size: 48px;
        font-weight: 600;
        margin: 0px;
    }
    h3,.heading3{
        font-weight: 600;
        font-size: 40px;
    }
    h4,.heading4{
        font-weight: 600;
        font-size: 32px;
        line-height: 34px;
    }
    
    p,.para{
        font-weight: 400;
        font-size: 24px;
        margin: 0px;
    }
    .para2{
        font-weight: 400;
        font-size: 20px;
    }
    .para3{
        font-weight: 400;
        font-size: 18px;
    }
    .para4{
        font-weight: 400;
        font-size: 16px;
    }

    .padding-main{
        padding: 0px 60px;
    }
    .sec-padding-top{
        padding-top: 120px;
    }
    .sec-margin-top{
        padding-top: 120px;
    }


    #root {
        margin: 0 auto;
    }

    ::-webkit-scrollbar {
        background: ${(props) => props.theme.white100};
        width: 8px;
        margin-left: 10px;
    }

    /* Track */

    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    /* Handle */

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.black100};
        border-radius: 10px;
    }


    .swiper-button-prev,.swiper-button-next{
        background: ${(props) => props.theme.blue100} !important;
        width: 60px !important;
        height: 60px !important;
        border-radius: 100px;
        color:${(props) => props.theme.white100};
        transition: 0.5s ease;
        top: 95% !important;   
        
}
    .swiper-button-prev:hover,.swiper-button-next:hover{
        background: ${(props) => props.theme.blue80} !important;
    }
    .swiper-button-next{
        left: 53%;
        transform: translateX(-50%);
    }
    .swiper-button-prev{
        left:47%;
        transform: translateX(-50%);
    }

    .swiper-button-prev::after,.swiper-button-next::after{
    font-size: 20px;
    }

    /* media queries  */
    @media (max-width: ${globalViewPorts.lg}) {

input {
background-color: transparent;

padding: 5px 10px;
border-radius: 15px;
height: 60px;
}

.create-heading{
    font-size: 50px;
}

h1,.heading1{
    font-size: 54px;
}
h2,.heading2{
    font-size: 42px;
}
h3,.heading3{
    font-size: 36px;
}
h4,.heading4{
    font-size: 26px;
}

p,.para{
    font-size: 20px;
}
.para2{
    font-size: 18px;
}
.para3{
    font-size: 16px;
}

.padding-main{
    padding: 0px 40px;
}

.sec-padding-top{
    padding-top: 120px;
}
.sec-margin-top{
    padding-top: 120px;
}


.swiper-button-prev,.swiper-button-next{
    width: 40px !important;
    height: 40px !important;
    
}

.swiper-button-next{
    left: 54%;
    transform: translateX(-50%);
}
.swiper-button-prev{
    left:46%;
    transform: translateX(-50%);
}



.swiper-button-prev::after,.swiper-button-next::after{
font-size: 18px;
}


}

    /* media queries  */
@media (max-width: ${globalViewPorts.xl}) {

    input {
  background-color: transparent;

  padding: 5px 10px;
  border-radius: 15px;
  height: 60px;
}

    .create-heading{
        font-size: 50px;
    }

    h1,.heading1{
        font-size: 54px;
    }
    h2,.heading2{
        font-size: 42px;
    }
    h3,.heading3{
        font-size: 36px;
    }
    h4,.heading4{
        font-size: 26px;
    }

    p,.para{
        font-size: 20px;
    }
    .para2{
        font-size: 18px;
    }
    .para3{
        font-size: 16px;
    }

    .padding-main{
        padding: 0px 40px;
    }

    .sec-padding-top{
        padding-top: 120px;
    }
    .sec-margin-top{
        padding-top: 120px;
    }


    .swiper-button-prev,.swiper-button-next{
        width: 40px !important;
        height: 40px !important;
        
    }

    .swiper-button-next{
        left: 54%;
        transform: translateX(-50%);
    }
    .swiper-button-prev{
        left:46%;
        transform: translateX(-50%);
    }



    .swiper-button-prev::after,.swiper-button-next::after{
    font-size: 18px;
    }


}
    /* media queries  */
@media (max-width: ${globalViewPorts.xs}) {

    input {
  background-color: transparent;
  padding: 10px 10px;
  border-radius: 10px;
  height: 60px;
}

    .create-heading{
        font-size: 20px;
    }

    h1,.heading1{
        font-size: 15px;
    }
    h2,.heading2{
        font-size: 16px;
    }
    h3,.heading3{
        font-size: 20px;
    }
    h4,.heading4{
        font-size: 16px;
    }

    p,.para{
        font-size: 13px;
    }
    .para2{
        font-size: 13px;
    }
    .para3{
        font-size: 12px;
    }

    .padding-main{
        padding: 0px 20px;
    }

    .sec-padding-top{
        padding-top: 110px;
    }
    .sec-margin-top{
        padding-top: 110px;
    }

    .swiper-button-prev,.swiper-button-next{
        width: 35px !important;
        height: 35px !important;
        display: none;
        
    }

    .swiper-button-next{
        left: 55%;
        transform: translateX(-50%);
    }
    .swiper-button-prev{
        left:45%;
        transform: translateX(-50%);
    }



    .swiper-button-prev::after,.swiper-button-next::after{
    font-size: 15px;
    }

}

`;

export default GlobalStyles;
