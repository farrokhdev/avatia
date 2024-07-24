import styled from "styled-components";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right.svg";
import { globalViewPorts } from "../../config/global-styles";

export const Join = styled.section`
  width: 100%;
  position: relative;
  background: rgb(0, 133, 255);
  background: linear-gradient(
    310deg,
    rgba(0, 133, 255, 1) 25%,
    rgba(22, 90, 222, 1) 50%,
    rgba(151, 71, 255, 1) 75%,
    rgba(229, 71, 255, 1) 100%
  );
  border-radius: 50px;
  text-align: center;
  padding: 60px 0;
  z-index: 2;
  max-width: 1660px;
  margin: -80px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    color: #ffffff;
    margin-bottom: 60px;
    margin-top: 0;
  }

  > p {
    color: #ffffff;
    font-weight: 400;
    text-align: center;
    width: 60%;
    margin: 0 auto 60px auto;
  }

  @media (max-width: ${globalViewPorts.xs}) {
    margin: -40px auto 0px;
    padding: 45px 0;

    > p {
      width: 80%;
    }
  }
`;

export const FooterBox = styled.section`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 812px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 150px 100px 60px 100px;
  border-radius: 50px;
  overflow: hidden;
  background-color: #0e0e0e;
  /* max-width: 1660px; */
  margin: -80px auto 0 auto;
  > .logo-part {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > .logo {
      width: 286px;
      height: 108px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  > .bottom-part {
    width: 100%;
    > .bottom-top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      > .menu {
        display: flex;
        align-items: center;
        gap: 120px;
        a {
          color: #fff;
          text-decoration: none;
          transition: all 0.5s ease;
          &:hover {
            /* font-weight: 500; */
            background: -webkit-linear-gradient(
              30deg,
              ${({ theme }) => theme.blue80} 4%,
              ${({ theme }) => theme.blue100} 50.04%,
              ${({ theme }) => theme.pink100} 93.79%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
      > .socials {
        display: flex;
        align-items: center;
        gap: 10px;
        a {
          img {
            width: 35px;
            height: 35px;
            object-fit: contain;
          }
        }
      }
    }
    > .border-line {
      width: 100%;
      height: 2px;
      margin: 30px auto 50px auto;
      /* background: rgb(14, 33, 160); */
      background: var(--button-hover3) !important;
    }

    > .bottom-bottom {
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      > .copyright {
        max-width: 352px;
        text-align: center;
        color: #fff;
      }
    }
  }

  @media (max-width: ${globalViewPorts.lg}) {
    padding: 100px 50px 60px 50px;
    height: 543px;
    > .logo-part {
      > .logo {
        width: 177px;
        height: 67px;
      }
    }

    > .bottom-part {
      > .bottom-top {
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        > .menu {
          gap: 1rem;
          width: 100%;
          justify-content: space-between;
        }

        > .socials {
          gap: 5px;
          a {
            img {
              width: 25px;
              height: 25px;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
  @media (max-width: ${globalViewPorts.xs}) {
    padding: 100px 50px 60px 50px;
    height: 543px;
    > .logo-part {
      > .logo {
        width: 177px;
        height: 67px;
      }
    }

    > .bottom-part {
      > .bottom-top {
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        > .menu {
          gap: 1rem;
          width: 100%;
          justify-content: space-between;
        }

        > .socials {
          gap: 5px;
          a {
            img {
              width: 25px;
              height: 25px;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
`;
