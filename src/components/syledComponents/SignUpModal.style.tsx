import styled from "styled-components";
import SignUpBg from "../../assets/images/sign-up.jpg";

export const SignUpModal = styled.section<{
  opacity: boolean;
  visible: boolean;
  pointer: boolean;
}>`
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  visibility: ${({ visible }) => (visible ? "visible" : "none")};
  opacity: ${({ opacity }) => (opacity ? 1 : 0)};
  pointer-events: ${({ pointer }) => (pointer ? "auto" : "none")};
  transition: 0.5s ease;
  > .wrapper {
    width: 100%;
    height:100%;
    max-height: 809px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background: url("./sign-up.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    overflow: hidden;
    padding: 39px;
    /* background: ${({ theme }) => theme.white100}; */

    .inside-wrapper {
      width: 100%;
      height: 100%;
      border: 1px solid ${({ theme }) => theme.white100};
      border-radius: 20px;
      backdrop-filter: blur(50px);
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: start;
      justify-content: space-between;
      padding: 50px;
      .text-part {
        height: 100%;
        position: relative;
        z-index: 2;
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
        justify-content: space-between;
        color: ${({ theme }) => theme.white100};
        .sign-box {
          display: flex;
          width: 35px;
          height: 35px;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid ${({ theme }) => theme.white100};
          border-radius: 100px;
        }
        .sign-box.active {
          background: #ffffff49;
        }
      }
      .sign-part {
        overflow: hidden;
        padding: 40px;
        background: #000;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
        flex-basis: 40%;
        height: 100%;
      }
    }
    .inside-wrapper:before {
      content: " ";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.3;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(211, 211, 211, 1) 100%
      );
      /* 
      background-image: url("https://assets.digitalocean.com/labs/images/community_bg.png"); */
      background-repeat: no-repeat;
      background-position: 50% 0;
      background-size: cover;
    }
  }
`;
