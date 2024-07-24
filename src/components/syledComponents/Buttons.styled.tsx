import styled from "styled-components";
import { globalViewPorts } from "../../config/global-styles";

export const ButtonOneStyled = styled.div`
  a {
    font-family: "Poppins", sans-serif;
    background: ${({ theme }) => theme.white100};
    transition: all 0.3s ease;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${({ theme }) => theme.blue90};
    text-decoration: none;

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
`;
export const ButtonTwoStyled = styled.div`
  a {
    font-family: "Poppins", sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 10px 20px;
    border-radius: 50px;
    background: linear-gradient(
      92.97deg,
      ${({ theme }) => theme.blue80} 9.7%,
      ${({ theme }) => theme.blue100} 50.04%,
      ${({ theme }) => theme.pink100} 93.79%
    );
    transition: all 0.3s ease;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    color: ${({ theme }) => theme.white100};
    position: relative;
    overflow: hidden;

    .back-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: ${({ theme }) => theme.blue100};
      opacity: 0;
      transition: 0.3s ease;
      z-index: 0;
    }

    > .text {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
    }

    &:hover {
      .back-overlay {
        opacity: 1;
      }
    }

    @media (max-width: ${globalViewPorts.xs}) {
      .icon {
        width: 17px;
        height: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* &:hover {
        width: 200px;
      } */
    }
  }
`;

export const ButtonThreeStyled = styled.div`
  a {
    text-decoration: none;
    width: fit-content;
    height: 65px;
    margin: 0px;
    border-radius: 32.5px;
    display: flex;
    padding: 0px 0px 0px 10px;
    background: ${({ theme }) => theme.white100};
    justify-content: space-between;
    transition: 0.3s ease;
    align-items: center;
    position: relative;
    /* padding: 0 10px; */
    gap: 0.5rem;
    /* overflow: hidden; */

    > .icon-back {
      position: absolute;
      z-index: 0;
      right: 0;
      top: 0;
      width: 65px;
      background: ${({ theme }) => theme.blue90};
      height: 65px;
      transition: 0.3s ease;
      border-radius: 100px;
    }

    &:hover {
      transition: ease-in all 100ms;

      > .icon-back {
        width: 100%;
      }
      > p {
        color: ${({ theme }) => theme.white100};
      }
      /* width: 280px; */
    }

    > p {
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: 0;
      text-align: center;
      flex: 1;
      color: ${({ theme }) => theme.blue90};
      position: relative;
      z-index: 1;
    }

    > .icon {
      width: 65px;
      height: 65px;
      border-radius: 100px;
      background: ${({ theme }) => theme.blue90};
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      position: relative;
      z-index: 1;
    }

    @media (max-width: ${globalViewPorts.xs}) {
      text-decoration: none;
      width: fit-content;
      height: 34px;
      margin: 0px;
      border-radius: 32.5px;
      display: flex;
      background: ${({ theme }) => theme.white100};
      justify-content: space-between;
      transition: 0.3s ease;
      align-items: center;

      > .icon-back {
        width: 34px;
        height: 34px;
      }

      &:hover {
        > .icon-back {
          width: 100%;
        }
        > p {
          color: ${({ theme }) => theme.white100};
        }
      }

      > p {
        font-family: "Poppins", sans-serif;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0;
        text-align: center;
        flex: 1;
        color: ${({ theme }) => theme.blue90};
      }

      > .icon {
        width: 34px;
        height: 34px;
        border-radius: 100px;
        background: ${({ theme }) => theme.blue90};
        text-align: center;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
`;

export const ButtonFourStyled = styled.div`
  a {
    width: fit-content;
    font-family: "Poppins", sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 10px 20px;
    border-radius: 50px;
    background: linear-gradient(
      92.97deg,
      ${({ theme }) => theme.blue80} 9.7%,
      ${({ theme }) => theme.blue100} 50.04%,
      ${({ theme }) => theme.pink100} 93.79%
    );
    transition: 0.3s ease;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    color: ${({ theme }) => theme.white100};

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    &:hover {
      width: 250px;
    }

    @media (max-width: ${globalViewPorts.xs}) {
      width: 150px;
      .icon {
        width: 17px;
        height: 17px;
      }

      &:hover {
        width: 200px;
      }
    }
  }
`;

export const ButtonFiveStyled = styled.div`
  a {
    width: fit-content;
    font-family: "Poppins", sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 10px 20px;
    border-radius: 50px;
    background: transparent;
    border: 1px solid #fff;
    transition: 0.3s ease;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    color: ${({ theme }) => theme.white100};

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      transition: 0.3s ease;
      svg {
        path {
          transition: 0.3s ease;
        }
      }
    }
    p {
      transition: 0.3s ease;
    }

    &:hover {
      background: ${({ theme }) => theme.white100};
      color: ${({ theme }) => theme.blue100};

      p {
        font-weight: 500;
      }
      .icon {
        svg {
          path {
            stroke: ${({ theme }) => theme.blue100};
          }
        }
        transform: rotate(90deg);
      }
    }

    @media (max-width: ${globalViewPorts.xs}) {
      .icon {
        width: 17px;
        height: 17px;
      }

      &:hover {
        width: 200px;
      }
    }
  }
`;

export const ButtonSixStyled = styled.div`
  a {
    font-family: "Poppins", sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 10px 20px;
    border-radius: 50px;
    background: ${({ theme }) => theme.blue80};
    transition: 0.3s ease;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    color: ${({ theme }) => theme.white100};

    &:hover {
      /* background: linear-gradient(
        92.97deg,
        ${({ theme }) => theme.blue80} 9.7%,
        ${({ theme }) => theme.blue100} 50.04%,
        ${({ theme }) => theme.pink100} 93.79%
      ); */
      background: var(--button-hover);
      .icon {
        transform: translateX(5px);
      }
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      transition: 0.3s ease;
    }

    @media (max-width: ${globalViewPorts.xs}) {
      .icon {
        width: 17px;
        height: 17px;
      }

      &:hover {
        /* width: 200px; */
      }
    }
  }
`;
export const GenderButtonStyled = styled.button<{
  width: string;
  height: string;
  beforeOpacity: string;
}>`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50px;
  background: var(--dark-gradient);
  transition: 0.3s ease;
  text-decoration: none;
  padding: 0px 20px;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.white100};
  /* border: 1px solid #505050; */
  box-sizing: border-box;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
    width: 101%;
    height: 105%;
    z-index: -1;
    border-radius: 50px;
    transform: translate(-50%, -50%);
    transition: 0.2s ease;
    opacity: ${({ beforeOpacity }) => beforeOpacity};
  }
  &:nth-child(1)::before {
    background: var(--button-hover) !important;
  }
  &:nth-child(2)::before {
    background: var(--button-hover2) !important;
  }
  &:nth-child(3)::before {
    background: var(--button-hover3) !important;
  }

  &:hover {
    background: var(--dark-gradient-hover);
    /* border: 2px solid transparent; */
  }
  &:hover {
    &:before {
      opacity: 1;
    }
  }

  @media (max-width: ${globalViewPorts.xs}) {
    width: fit-content;
    min-width: 200px;
    padding: 10px 20px;
    /* height: fit-content; */
    height: 50px;
  }
`;

export const ButtonCotinueStyled = styled.button`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: center;
  gap: 0.5rem;
  padding: 10px 20px;
  border-radius: 50px;
  background: ${({ theme }) => theme.blue80};
  transition: 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 65px;
  text-align: center;
  color: ${({ theme }) => theme.white100};

  &:hover {
    background: var(--button-hover);
  }

  @media (max-width: ${globalViewPorts.xs}) {
  }
`;
