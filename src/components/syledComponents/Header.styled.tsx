import styled from "styled-components";
import { globalViewPorts } from "../../config/global-styles";

export const PageStyle = styled.section`
  overflow: hidden;
  > .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 115px;
    overflow: hidden;
    background-color: #fff;
    transition: 0.3s ease !important;
    z-index: 999;
    > .wrapper {
      width: 100%;
      height: 100%;
      max-width: 1660px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      > .menu-icon {
        display: none;
      }

      > .logo {
        width: 194px;
        height: 73px;
        > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      > .links {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  > .content {
    width: 100%;
    transition: 0.5s ease;
    height: fit-content;
  }

  /* media query  */
  @media (max-width: ${globalViewPorts.xs}) {
    > .menu {
      height: 100px;
      > .wrapper {
        > .menu-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          align-items: center;
        }

        > .logo {
          width: 81px;
          height: 30px;
        }

        > .links {
          > .type-one {
            display: none;
          }
        }
      }
    }
  }
`;

export const MobileNav = styled.div<{ display: string; opacity: string }>`
  width: 100%;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  height: fit-content;
  background: ${({ theme }) => theme.white100};
  display: none;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.5s ease;
  .wrapp {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    position: relative;
    .close-but {
      top: 20px;
      right: 20px;
      position: absolute;
    }
    .logo {
    }
    .links {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
    }
  }

  /* media query  */
  @media (max-width: ${globalViewPorts.xs}) {
    display: block !important;
    transform: ${({ display }) => display};
    opacity: ${({ opacity }) => opacity} !important;
  }
`;
