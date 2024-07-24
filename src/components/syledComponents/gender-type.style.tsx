import styled from "styled-components";
import { globalViewPorts } from "../../config/global-styles";

export const GenderTypeBox = styled.div`
  background: ${({ theme }) => theme.white10};
  width: 100%;
  height: calc(100vh - 210px);
  @media screen and (max-height: 760px) {
    height: fit-content !important;
  }

  .gender-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: #000;
    margin: 0 auto !important;
    > .image-part {
      width: 100%;
      height: 100%;
      /* flex-basis: 1/2; */
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    > .right {
      position: relative;
      z-index: 4 !important;
      width: 100%;
      height: 100%;
      /* flex-basis: 1/2; */
      overflow: hidden;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: center;
      gap: 2rem;
      padding: 50px 40px;
      color: #fff;
      text-align: center;

      .top-bg,
      .bottom-bg {
        position: absolute;
        z-index: 1;
        pointer-events: none;
      }
      > .top-bg {
        top: 0;
        left: 0;
        width: 317px;
        height: 459px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      > .bottom-bg {
        bottom: 0;
        right: 0;
        width: 336px;
        height: 336px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      > h1 {
        font-weight: 500;
        text-transform: capitalize;
        color: #fff;
      }
      > p {
      }

      > .gender-types {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 50px;
      }

      > .buttons {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: space-between;
        z-index: 4;
        position: relative;

        button {
          :hover {
            transition: all 50ms;
            background: linear-gradient(
              92.97deg,
              ${({ theme }) => theme.blue80} 9.7%,
              ${({ theme }) => theme.blue100} 50.04%,
              ${({ theme }) => theme.pink100} 93.79%
            );
          }
        }
      }

      > .start-button {
        margin-left: auto;
        position: relative;
        z-index: 4;
      }
    }

    .b-span {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      font-weight: 400;
      line-height: 31px;
      letter-spacing: 0;
      text-align: left;
      color: ${({ theme }) => theme.white100};
    }

    .text-color {
      /* background: -webkit-linear-gradient(
        30deg,
        ${({ theme }) => theme.blue80} 4%,
        ${({ theme }) => theme.blue100} 50.04%,
        ${({ theme }) => theme.pink100} 93.79%
      ); */
      background: #fff;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (max-width: ${globalViewPorts.lg}) {
    height: fit-content;
    > .gender-container {
      height: fit-content;
      flex-direction: column;
      background-color: #fff;

      > .image-part {
        /* width: 100%; */
        width: 100%;
        height: 430px;
        flex-basis: 1;
        border-radius: 50px 50px 0px 0px;
        overflow: hidden;
      }

      > .right {
        width: 100%;
        height: fit-content;
        flex-basis: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        padding: 50px 40px;
        background-color: #000;

        > h3 {
          font-family: "Poppins", sans-serif;
          font-size: 66px;
          font-weight: 800;
          line-height: 89px;
          letter-spacing: 0;
          text-align: left;
          color: ${({ theme }) => theme.black100};
        }

        > .check-list {
          margin-top: 100px;

          > ul {
            list-style: none;
            margin: 0 !important;
            padding-inline-start: 0;

            > li {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 10px;

              > svg {
                margin-top: 5px;
              }
            }
          }
        }

        > .start-button {
          margin-left: auto;
        }
      }
    }
  }

  @media (max-width: ${globalViewPorts.xs}) {
    > .gender-container {
      height: fit-content;
      flex-direction: column;
      background-color: #fff;

      > .image-part {
        /* width: 100%; */
        width: 100%;
        height: 430px;
        flex-basis: 1;
        border-radius: 50px 50px 0px 0px;
        overflow: hidden;
      }

      > .right {
        width: 100%;
        height: fit-content;
        flex-basis: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        padding: 50px 40px;
        background-color: #000;

        > h3 {
          font-family: "Poppins", sans-serif;
          font-size: 66px;
          font-weight: 800;
          line-height: 89px;
          letter-spacing: 0;
          text-align: left;
          color: ${({ theme }) => theme.black100};
        }

        > .check-list {
          margin-top: 100px;

          > ul {
            list-style: none;
            margin: 0 !important;
            padding-inline-start: 0;

            > li {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 10px;

              > svg {
                margin-top: 5px;
              }
            }
          }
        }

        > .start-button {
          margin-left: auto;
        }
      }
    }
  }
`;
