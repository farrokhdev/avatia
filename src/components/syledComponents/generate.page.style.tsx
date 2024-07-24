import styled from "styled-components";
import { globalViewPorts } from "../../config/global-styles";

export const Box = styled.div<{ height: string }>`
  background: ${({ theme }) => theme.white10};

  > .container {
    /* //height: ${({ height }) => height};
    margin-bottom: 100px; */
    width: 100%;
    height: 900px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .row {
      display: grid;
      grid-template-columns: auto auto auto;
      margin: 0 auto 0 auto;
      width: 90%;
      gap: 40px;
      text-align: center;

      > .back {
        margin-left: 100px;
        margin-top: 20px;
        display: flex;
        cursor: pointer;
        width: 86px;
        height: 31px;

        > svg {
          margin-top: 25px;
          margin-right: 20px;
        }

        > p {
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0;
          text-align: left;
          color: ${({ theme }) => theme.black100};
        }
      }

      > .d-flex {
        display: grid;
        grid-template-columns: auto auto auto;
        margin: 30px auto 0 auto;
        width: 90%;
        padding-bottom: 40px;
        gap: 40px;
        text-align: center;

        > .item {
          padding: 10px 35px;
          border-radius: 38.5px;
          background: #89b4ff;

          > span {
            font-family: "Poppins", sans-serif;
            font-size: 20px;
            font-weight: 600;
            line-height: 31px;
            letter-spacing: 0em;
            text-align: center;
            color: ${({ theme }) => theme.white100};
          }

          &.active {
            background: linear-gradient(
                90deg,
                #165ade 5.32%,
                #9747ff 52.09%,
                #f60bb4 100%
              ),
              linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
          }
        }
      }
    }

    > .content {
      width: 80%;
      margin: 0 auto 20px auto;
      z-index: 99;
    }

    > .footer {
      margin: -30px 10% 20px auto;
      float: right;
      z-index: 100;

      > .create {
        text-decoration: none;
        width: 220px;
        height: 65px;
        margin: 0 auto;
        border-radius: 32.5px;
        display: flex;
        background: #165ade;
        justify-content: space-between;
        transition: ease-in all 100ms;
        border: none;
        cursor: pointer;
        position: relative;

        > .loader {
          width: 220px;
          height: 65px;
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
        }

        &:hover {
          transition: ease-in all 100ms;
          background: linear-gradient(
            270deg,
            rgba(246, 11, 180, 1) 0%,
            rgba(14, 33, 160, 1) 50%,
            rgba(22, 90, 222, 1) 100%
          );
          width: 240px;
        }

        > p {
          font-family: "Poppins", sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 26px;
          letter-spacing: 0;
          text-align: center;
          flex: 1;
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
    }
  }

  > .footer {
    background: ${({ theme }) => theme.black100};
    padding: 10px;

    > p {
      font-family: "Poppins";
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: center;
      color: ${({ theme }) => theme.white100};

      > a {
        font-family: "Poppins";
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0em;
        text-align: center;
        color: ${({ theme }) => theme.white100};
      }
    }
  }
`;
