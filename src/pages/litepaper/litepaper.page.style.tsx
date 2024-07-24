import styled from "styled-components";
import { globalViewPorts } from "../../config/global-styles";
import LiteBack from "../../assets/images/litepaper-back.jpg";

export const TopSectionLitepaper = styled.section`
  position: relative;
  max-width: 1660px;
  width: 100%;
  height: 898px;
  z-index: 1;
  margin: 0 auto;
  /* padding: 0px 34px; */
  /* overflow: hidden; */
  background: #fff;
  top: 0px;

  .slide {
    background: url(${LiteBack});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    display: flex;
    width: 100%;
    height: 100%;
    gap: 0;
    border-radius: 50px 50px 0px 0px;
    overflow: hidden;

    > .avatar {
      max-width: 866px;
      width: 50%;
      flex-basis: 50%;
      height: 100%;
      object-fit: cover;
    }

    > .text {
      /* margin-left: -200px; */
      width: 50%;
      flex-basis: 50%;
      height: 100%;
      backdrop-filter: blur(50px);
      box-shadow: 0px 0px 65px #0000005c;
      position: relative;
      background-position: center;
      background-size: cover;
      padding: 125px 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

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

  @media (max-width: ${globalViewPorts.lg}) {
    height: fit-content;
    overflow: hidden;
  
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
        flex-basis: 100%;
        justify-content: flex-start;

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

      /* @media (max-width: ${globalViewPorts.xs}) {

    flex-direction: column;

} */
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

export const TopSectionMobileLitepaper = styled.section`
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

export const Items = styled.section`
  background: #f4f4f4;
  /* padding: 150px 120px 160px 120px; */
  padding: 150px 100px 60px;
  box-sizing: border-box;
  z-index: 1;
  max-width: 1660px;
  margin: -80px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h1 {
    display: block;
    text-align: center;
  }

  .accordions-list {
    width: 100%;
    display: flex;

    flex-direction: column;
    gap: 1rem;
  }

  & .MuiAccordion-root {
    font-family: Poppins;
    background-color: transparent;
    box-shadow: none;

    &:before {
      background-color: transparent;
    }

    > .MuiAccordionSummary-root {
      border-radius: 60px;
      background-color: #fff;
      margin-bottom: 10px;

      > .MuiAccordionSummary-expandIconWrapper {
        background-color: #003cb1;
        border-radius: 60px;
        width: 24px;
        height: 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        > svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    & .MuiAccordionDetails-root {
      background-color: #fff;
      border-radius: 60px;
      padding: 50px;

      & img {
        display: block;
        width: 100%;
      }
    }
  }

  @media (max-width: ${globalViewPorts.xs}) {
    padding: 120px 40px 60px;
    & .MuiAccordionDetails-root {
      border-radius: 20px !important;
      padding: 20px !important;

      /* & img {
        display: block;
        width: 100%;
      } */
    }
  }
`;
