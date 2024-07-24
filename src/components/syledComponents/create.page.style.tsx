import styled from "styled-components";
import { globalViewPorts } from "../../config/global-styles";

export const Box = styled.div<{ width: string }>`
  background: ${({ theme }) => theme.white10};
  > .create-container {
    width: 100% !important;
    height: calc(100vh - 210px);
    @media screen and (max-height: 760px) {
    height: fit-content !important;
  }
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: #000;
    > .image-part {
      /* width: 100%; */
      width: ${({ width }) => width};
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
      width: ${({ width }) => width};
      height: 100%;
      /* flex-basis: 1/2; */
      overflow: hidden;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: center;
      padding: 50px 40px;
      color: #fff;
      /* overflow-y: scroll; */
      gap:1rem;

      > h1 {
        /* color: ${({ theme }) => theme.black100}; */
        color: #fff;
        .text-color {
          background: text var(--button-hover2);
        }
      }

      > .check-list {
        /* margin-top: 100px; */

        > ul {
          list-style: none;
          margin: 0 !important;
          padding-inline-start: 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          text-transform: capitalize;
          font-weight: 400;

          > li {
            display: flex;
            align-items: center;
            gap: 1rem;
            /* margin-bottom: 10px; */

            > svg {
              /* margin-top: 5px;s */
            }
          }
        }
      }

      > .start-button {
        margin-left: auto;
      }
    }

    .p-right {
      float: right;
      margin-top: 50px;

      > button {
        border: none;

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
    > .create-container {
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
    > .create-container {
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
