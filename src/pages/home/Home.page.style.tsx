import styled from "styled-components";
import { globalViewPorts } from "../../config/global-styles";
import HeroBack from "../../assets/images/hero-back.jpg";

export const TopSection = styled.section`
  position: relative;
  max-width: 1660px;
  width: 100%;
  height: 898px;
  z-index: 1;
  margin: 0 auto;
  overflow: hidden;
  background: #fff;
  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0px;
    overflow: hidden;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
      .slide {
        display: flex;
        border-radius: 50px 50px 0px 0px;
        width: 100%;
        height: 100%;
        gap: 0;
        overflow: hidden;
        position: relative;
        .hero-back {
          width: 100%;
          height: 100%;
          z-index: 0;
          position: absolute;

          top: 0;
          left: 0;
        }
        > .avatar {
          max-width: 866px;
          width: 50%;
          flex-basis: 50%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        > .text {
          /* margin-left: -200px; */
          width: 50%;
          flex-basis: 50%;
          height: 100%;
          backdrop-filter: blur(50px);
          border-left: 2px solid #fff;
          box-shadow: 0px 0px 65px #0000005c;
          position: relative;
          z-index: 1;
          background-position: center;
          background-size: cover;
          /* padding: 125px 150px; */
          padding: 100px 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          background-color: #ffffff24;

          > h1 {
            font-size: 60px;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0;
            text-align: left;
            color: ${({ theme }) => theme.white100};
            margin: 0px;
          }

          > p {
            margin: 0px;
            font-size: 20px;
            font-weight: 400;
            line-height: 30px;
            letter-spacing: 0;
            text-align: left;
            color: ${({ theme }) => theme.white100};
          }
        }
      }
    }
  }
  @media (max-width: ${globalViewPorts.lg}) {
    height: fit-content;
    overflow: hidden;
    .swiper {
      height: fit-content;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .slide {
          flex-direction: column;
          width: 100%;
          height: 100%;
          gap: 0;
          /* margin: 0 auto 0 auto; */
          border-radius: 50px 50px 0px 0px;
          overflow: hidden;
          .avatar {
            max-width: none;
            width: 100%;
            flex-basis: 400px;
            object-fit: cover;
          }

          .text {
            width: 100%;
            padding: 30px;
            flex-basis: 700px;
            justify-content: flex-start;
            border-left: none;

            > h1 {
              font-size: 60px;
              font-weight: 700;
              line-height: 70px;
              letter-spacing: 0;
              text-align: left;
              color: ${({ theme }) => theme.white100};
              margin: 0px;
            }

            > p {
              margin: 0px;
              font-size: 20px;
              font-weight: 400;
              line-height: 30px;
              letter-spacing: 0;
              text-align: left;
              color: ${({ theme }) => theme.white100};
            }
          }
        }
      }
    }
  }
  @media (max-width: ${globalViewPorts.xs}) {
    height: fit-content;
    overflow: hidden;
    display: none;
  }

  /* pagination styles  */
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    top: 83% !important;
    width: 100% !important;
    height: fit-content !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center;

    gap: 0.2rem !important;
    .swiper-pagination-bullet {
      background-color: #fff;
      width: 10.5px !important;
      height: 10.5px !important;
      opacity: 1 !important;
      cursor: pointer;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      width: 14px !important;
      height: 14px !important;
    }
  }
`;

export const TopSectionMobile = styled.section`
  .slide {
    width: 100%;
    height: 430px;
    background-color: #fff;
    border-radius: 30px;
    display: none;
    position: relative;
    overflow: hidden;
    @media (max-width: ${globalViewPorts.xs}) {
      display: block;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      object-position: center;
    }
    .text-content {
      position: absolute;
      bottom: 0;
      left: 0;
      backdrop-filter: blur(50px);
      box-shadow: 0px 0px 65px #0000005c;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.2rem;
      padding: 2rem;
      color: ${({ theme }) => theme.white100};
      h1 {
      }
    }
  }
`;

export const WhatIsAvatia = styled.section`
  position: relative;
  background: #0e0e0e;
  border-radius: 50px;
  text-align: center;
  padding: 60px 0;
  z-index: 2;
  max-width: 1660px;
  margin: -80px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;

  > h2 {
    color: #ffffff;
  }

  > p {
    color: #ffffff;
    margin-bottom: 40px;
    width: 70%;
  }

  > video {
    width: 60%;
    border-radius: 50px;
    margin-bottom: 40px;
  }

  > .create {
    text-decoration: none;
    width: 250px;
    height: 65px;
    margin: 0 auto;
    border-radius: 32.5px;
    display: flex;
    background: rgb(246, 11, 180);
    background: linear-gradient(
      270deg,
      rgba(246, 11, 180, 1) 0%,
      rgba(14, 33, 160, 1) 50%,
      rgba(22, 90, 222, 1) 100%
    );
    justify-content: space-around;
    transition: ease-in all 100ms;
    align-items: center;

    &:hover {
      transition: ease-in all 100ms;
      width: 280px;
    }

    > p {
      color: #fff;
    }

    > .icon {
      width: 65px;
      height: 65px;
      border-radius: 100%;
      background: transparent;
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }
  @media (max-width: ${globalViewPorts.xs}) {
    margin: -20px auto 0 auto;
    padding: 40px 0;
    > .create {
      width: 130px;
      height: 34px;

      &:hover {
        width: 200px;
      }
      > .icon {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    > video {
      width: 80%;
      border-radius: 20px;
    }
    > p {
      width: 80%;
    }
  }
`;

export const Technologies = styled.section`
  background: #f4f4f4;
  padding: 150px;
  box-sizing: border-box;
  z-index: 1;
  max-width: 1660px;
  margin: -80px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 120px;
  align-items: center;

  > h2 {
    color: #000000;

    display: block;
    text-align: center;
  }

  > .box {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    > .img-box {
      width: 100%;
      max-width: 546px;
      border-radius: 50px;
      transition: 0.3s ease;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.3s ease;
      }
    }

    > .info {
      width: 100%;
      max-width: 546px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      > h5 {
        color: #aac9ff;
        font-size: 200px;
        font-weight: 800;
        line-height: 180px;
        text-align: left;
        margin: 0 auto 10px 0;
        transition: ease-in all 100ms;
      }

      > h3 {
        color: #0e0e0e;
        text-align: left;
        margin: 0 auto 10px 0;
      }

      > p {
        color: #515151;
        font-weight: 400;
        text-align: left;
        margin: 0;
      }
    }

    &:hover {
      > .img-box {
        > img {
          transform: scale(1.2);
        }
      }
    }
  }

  .box:nth-child(odd) {
    flex-direction: row-reverse !important;
  }

  @media (max-width: ${globalViewPorts.lg}) {
    gap: 60px;
    padding: 100px 30px;
    margin: -20px auto 0 auto;
    > .box {
      flex-direction: column-reverse;

      &:hover {
        > img {
          transform: scale(0.9) rotate(-2deg);
        }

        > .info {
          > h5 {
            transition: ease-in all 100ms;
            transform: scale(0.9);
          }
        }
      }

      .info {
        align-items: center;
        text-align: center;
        width: 100%;
        gap: 0;
        > h5 {
          font-size: 100px;
          line-height: 120px;
          width: 100%;
          text-align: center;
        }

        > h3 {
          width: 100%;
          text-align: center;
        }
        > p {
          text-align: center;
          width: 100%;
        }
      }
    }
    .box:nth-child(odd) {
      flex-direction: column-reverse !important;
    }
  }

  @media (max-width: ${globalViewPorts.xs}) {
    gap: 60px;
    padding: 100px 30px;
    margin: -20px auto 0 auto;
    > .box {
      flex-direction: column-reverse;

      &:hover {
        > img {
          transform: scale(0.9) rotate(-2deg);
        }

        > .info {
          > h5 {
            transition: ease-in all 100ms;
            transform: scale(0.9);
          }
        }
      }

      .info {
        align-items: center;
        text-align: center;
        width: 100%;
        gap: 0;
        > h5 {
          font-size: 100px;
          line-height: 120px;
          width: 100%;
          text-align: center;
        }

        > h3 {
          width: 100%;
          text-align: center;
        }
        > p {
          text-align: center;
          width: 100%;
        }
      }
    }
    .box:nth-child(odd) {
      flex-direction: column-reverse !important;
    }
  }
`;

export const Ready = styled.section`
  position: relative;
  background: #0e0e0e;
  border-radius: 50px;
  text-align: center;
  padding: 60px 0;
  margin-top: -50px;
  z-index: 2;
  max-width: 1660px;
  margin: -80px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;

  > h2 {
    color: #ffffff;
  }

  > p {
    color: #ffffff;
    text-align: center;
    width: 60%;
  }

  @media (max-width: ${globalViewPorts.xs}) {
    margin: -20px auto 0 auto;
    > .create {
      width: 130px;
      height: 34px;

      &:hover {
        width: 200px;
      }
      > .icon {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const Problems = styled.section`
  background: #f4f4f4;
  padding: 150px 36px 150px 36px;
  box-sizing: border-box;
  z-index: 1;
  max-width: 1660px;
  margin: -80px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  .swiper {
    .swiper-wrapper {
      padding-bottom: 100px;
    }
  }

  > h4 {
  }

  & .box {
    height: fit-content;
    min-height: 700px;
    background: #fff;
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 50px;
    -webkit-box-shadow: 0px 50px 66px -30px rgba(217, 230, 253, 0.55);
    -moz-box-shadow: 0px 50px 66px -30px rgba(217, 230, 253, 0.55);
    box-shadow: 0px 50px 66px -30px rgba(217, 230, 253, 0.55);
    border: 1px solid transparent;

    > img {
      display: block;
      width: 100%;
      border-radius: 50px;
      /* margin-bottom: 30px; */
      transition: ease-in all 100ms;
    }

    > h4 {
      color: #0e0e0e;
      text-align: left;
    }

    > p {
      color: #000000;
      text-align: left;
      margin: 0;
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.blue20};
      /* > img {
        transition: ease-in all 100ms;
        transform: scale(0.9) rotate(-4deg);
      } */
    }
  }

  @media (max-width: ${globalViewPorts.lg}) {
    padding: 100px 30px;
    & .box {
      height: fit-content;
      min-height: 0;
      gap: 20px;
    }

    .swiper {
      .swiper-wrapper {
        padding-bottom: 80px;
      }
    }
  }
  @media (max-width: ${globalViewPorts.xs}) {
    padding: 100px 30px;
    & .box {
      height: fit-content;
      min-height: 0;
      gap: 15px;
    }

    .swiper {
      .swiper-wrapper {
        padding-bottom: 0px;
      }
    }
  }
`;
