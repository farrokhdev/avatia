import styled from "styled-components";
import { globalViewPorts } from "../../config/global-styles";

export const CreateStepsBox = styled.div`
  background: ${({ theme }) => theme.black100};
  width: 100%;
  height: fit-content;
  overflow: hidden;

  > .upload-container {
    padding: 20px 94px;
    width: 100%;
    max-width: 1660px;
    margin: 0 auto;
    height: calc(100vh - 210px);
    @media screen and (max-height: 760px) {
      height: fit-content !important;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    div {
      > .steps {
        width: fit-content;
        /* min-height: 100px; */
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 957px;
        margin: 0 auto;
        gap: 40px;
        position: relative;
        overflow: hidden;

        > .line-bg {
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: ${({ theme }) => theme.blue20};
          top: 50%;
          left: 0;
          z-index: 0;
          transform: translateY(-50%);
        }
        > .step-but {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          border-radius: 50px;
          background-color: ${({ theme }) => theme.blue20};
          color: ${({ theme }) => theme.white100};
        }
        > .step-but.active {
          background-color: ${({ theme }) => theme.blue80};
        }
      }
    }

    @media (max-width: ${globalViewPorts.lg}) {
      padding: 80px 20px;
      gap: 40px;
      div {
        > .steps {
          gap: 20px;

          > .step-but {
            padding: 10px;
          }
        }
      }
    }
    @media (max-width: ${globalViewPorts.xs}) {
      padding: 40px 20px;
      gap: 40px;
      div {
        > .steps {
          gap: 20px;
          width: 100%;
          justify-content: space-between;
          > .step-but {
            padding: 10px;
          }
        }
      }
    }
  }

  > .footer {
    background: ${({ theme }) => theme.black100};
    padding: 20px;
    height: 90px;

    > p {
      font-family: "Poppins";
      text-align: center;
      color: ${({ theme }) => theme.white100};

      > a {
        font-family: "Poppins";
        text-align: center;
        color: ${({ theme }) => theme.white100};
      }
    }
  }
`;

export const UploadAvatar = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  gap: 2rem;
  .upload-part {
    height: 100%;
    width: 100%;
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    .upload-box {
      width: 544px;
      max-height: 517px;
      margin: 0 auto;
      border-radius: 40px;
      background-color: #1c1b1b;
      overflow: hidden;
      position: relative;
    }

    .upload-username-box {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 4;
      width: 100%;
      height: 67px;
      background-color: #27272797;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.white100};
    }
    .upload-buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
  }
  .upload-contents {
    color: ${({ theme }) => theme.white100};
    width: 100%;
    height: 100%;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    position: relative;

    .title-part {
      display: flex;
      /* align-items: center; */
      flex-direction: column;
      gap: 1rem;
      text-transform: capitalize;
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
    }
    .text-part {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      /* sample  */
      border: 1px solid #ffffff30;
      border-radius: 50px;
      padding: 30px;
      background: var(--dark-gradient);
      position: relative;

      .guid-head {
        display: flex;
        width: 100%;
        gap: 2rem;
        justify-content: space-between;
        align-items: center;
        .guid-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          p {
            font-size: 14px;
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

      .guid-contents {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(154px, 1fr));

        width: 100%;
        gap: 1rem;
        .guid-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 214px;
          overflow: hidden;
          gap: 1rem;
          .guid-img {
            /* width: 154px; */
            width: 100%;
            height: 168px;
            object-fit: cover;
            @media (max-width: ${globalViewPorts.xl}) {
              width: 100%;
            }
          }
          .content-bottom {
            width: 100%;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            justify-content: center;
            text-align: center;
            p {
              font-size: 12px;
            }
          }
        }
      }
    }
    .button-part {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .button {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        gap: 0.2rem;
        width: fit-content;
        background: ${({ theme }) => theme.blue20};
        border-radius: 50px;
        cursor: pointer;
        transition: 0.3s ease;

        &:hover {
          background: ${({ theme }) => theme.blue80};
        }
      }
    }
  }

  @media (max-width: ${globalViewPorts.lg}) {
    flex-direction: column;
    gap: 4rem;
    height: fit-content;
    .upload-part {
      gap: 40px;
      .upload-box {
        width: 100%;
        max-width: 280px;
        height: 273px;
        margin: 0 auto;
      }
      .upload-buttons {
        flex-direction: column;
        gap: 1rem;
      }
    }
    .upload-contents {
      .guidlines {
        display: none;
      }
      .title-part {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        gap: 1rem;
        .bottom-line {
          display: block;
        }
      }

      .button-part {
        justify-content: center;
      }
    }
  }

  @media (max-width: ${globalViewPorts.xs}) {
    flex-direction: column;
    gap: 4rem;
    height: fit-content;
    .upload-part {
      gap: 40px;
      .upload-box {
        width: 100%;
        max-width: 280px;
        height: 273px;
        margin: 0 auto;
      }
      .upload-buttons {
        flex-direction: column;
        gap: 1rem;
      }
    }
    .upload-contents {
      .guidlines {
        display: none;
      }
      .title-part {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        gap: 1rem;
        .bottom-line {
          display: block;
        }
      }
      .text-part {
        padding: 20px 10px;
        border-radius: 20px;
        .guid-head {
          display: flex;
          width: 100%;
          gap: 0rem;
          justify-content: space-between;
          align-items: center;
          .guid-button {
            p {
              font-size: 11px;
            }
          }
        }

        .guid-contents {
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          .guid-item {
            width: 100%;
            height: fit-content;
            overflow: hidden;
            border-radius: 20px;
            gap: 1rem;
            .guid-img {
              width: 100%;
              height: 150px;
              object-fit: cover;
            }
            .content-bottom {
              width: 100%;
              display: flex;
              gap: 0.2rem;
              align-items: center;
              justify-content: center;
              text-align: center;
              p {
                font-size: 10px;
              }
            }
          }
        }
      }
      .button-part {
        justify-content: center;
      }
    }
  }
`;

export const SelectStyle = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  overflow: hidden;
  gap: 4rem;
  .style-part {
    height: 100%;
    width: 100%;
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    .style-box {
      width: 100%;
      height: 595px;
      border-radius: 20px;
      background-color: #1c1b1b;
      overflow: hidden;
      /* .my-canvas{
        canvas{
          width: 100%;
          height:100%;
        }
      } */
    }
  }
  .style-contents {
    color: ${({ theme }) => theme.white100};
    width: 100%;
    height: 100%;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    position: relative;

    .style-tabs-part {
      width: 100%;
      /* width: fit-content; */
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 70px;
      background: var(--dark-gradient);
      border-radius: 50px;
      padding: 10px;
      svg {
        transition: 0.3s ease;
      }
      svg.active_svg {
        path {
          fill: ${({ theme }) => theme.blue20};
          /* stroke: ${({ theme }) => theme.blue20}; */
        }
      }
      .style-selector {
        cursor: pointer;
        width: 60px;
        height: 60px;
        object-fit: contain;
      }
    }
    .choose-style-part {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
     
      .choose-items {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
        transition: transform 0.3s ease-in-out; /* Add transition for animation */
        gap: 2rem;

        .choose-item {
          width: 145px;
          height: fit-content ;
          @media  (max-height:700px){
            height: 145px;
          }
          overflow: hidden;
          border-radius: 20px;
          background: #383838;
          border: 1px solid #505050;
        }
      }
    }
    .button-part {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .button {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        gap: 0.2rem;
        width: fit-content;
        background: ${({ theme }) => theme.blue20};
        border-radius: 50px;
        cursor: pointer;
        transition: 0.3s ease;

        &:hover {
          background: ${({ theme }) => theme.blue80};
        }
      }
    }
  }

  @media (max-width: ${globalViewPorts.lg}) {
    flex-direction: column;
    height: fit-content;
    .style-part {
      .style-box {
        width: 100%;
        max-width: 280px;
        height: 595px;
        max-height: 272px;
        margin: 0 auto;
      }
    }
    .style-contents {
      .style-tabs-part {
        gap: 1rem;
        justify-content: space-between;
        .style-selector {
          cursor: pointer;
          width: 45px;
          height: 45px;
          object-fit: contain;
        }
      }
      .choose-style-part {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .choose-items {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
          transition: transform 0.3s ease-in-out; /* Add transition for animation */
          gap: 1rem;
          justify-content: space-between;
          width: 100%;
          .choose-item {
            width: 100%;
            /* max-width: 91px; */
            margin: 0 auto;
            height: 91px;
            border-radius: 10px;
            background: #383838;
            border: 1px solid #505050;
          }
        }
      }
      .button-part {
        justify-content: center;
      }
    }
  }

  @media (max-width: ${globalViewPorts.xs}) {
    flex-direction: column;
    height: fit-content;
    .style-part {
      .style-box {
        width: 100%;
        max-width: 280px;
        height: 595px;
        max-height: 272px;
        margin: 0 auto;
      }
    }
    .style-contents {
      .style-tabs-part {
        gap: 1rem;
        justify-content: space-between;
        .style-selector {
          cursor: pointer;
          width: 45px;
          height: 45px;
          object-fit: contain;
        }
      }
      .choose-style-part {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .choose-items {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
          transition: transform 0.3s ease-in-out; /* Add transition for animation */
          gap: 1rem;
          justify-content: space-between;
          width: 100%;
          .choose-item {
            width: 100%;
            /* max-width: 91px; */
            margin: 0 auto;
            height: 91px;
            border-radius: 10px;
            background: #383838;
            border: 1px solid #505050;
          }
        }
      }
      .button-part {
        justify-content: center;
      }
    }
  }
`;

export const GenerateAvatar = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  .generate-part {
    height: 100%;
    width: 100%;
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    .generate-box {
      width: 483px;
      height: 598px;
      border-radius: 20px;
      background-color: #1c1b1b;
      overflow: hidden;
    }
    .generate-buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .generate-contents {
    color: ${({ theme }) => theme.white100};
    width: 100%;
    height: 100%;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    position: relative;

    .title-part {
      display: flex;
      text-transform: capitalize;
      flex-direction: column;
      gap: 1rem;
      .bottom-line {
        width: 100%;
        height: 1px;
        background: linear-gradient(
          90deg,
          rgba(39, 39, 39, 1) 0%,
          rgba(99, 99, 99, 1) 40%,
          rgba(39, 39, 39, 1) 100%
        );
      }
    }
    .desc {
    }
    .text-part {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .button-part {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .button {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        gap: 0.2rem;
        width: fit-content;
        background: ${({ theme }) => theme.blue20};
        border-radius: 50px;
        cursor: pointer;
        transition: 0.3s ease;

        &:hover {
          background: ${({ theme }) => theme.blue80};
        }
      }
    }
  }

  @media (max-width: ${globalViewPorts.lg}) {
    height: fit-content;
    flex-direction: column;
    .generate-part {
      .generate-box {
        width: 280px;
        height: 272px;
        margin: 0 auto;
      }
    }
    .generate-contents {
      .title-part {
        text-align: center;
        align-items: center;
        justify-content: center;
        .bottom-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(39, 39, 39, 1) 0%,
            rgba(99, 99, 99, 1) 40%,
            rgba(39, 39, 39, 1) 100%
          );
        }
      }
      .text-part {
        text-align: center;
        align-items: center;
      }
      .button-part {
        justify-content: center;
      }
    }
  }

  @media (max-width: ${globalViewPorts.xs}) {
    height: fit-content;
    flex-direction: column;
    .generate-part {
      .generate-box {
        width: 280px;
        height: 272px;
        margin: 0 auto;
      }
    }
    .generate-contents {
      .title-part {
        text-align: center;
        align-items: center;
        justify-content: center;
        .bottom-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(39, 39, 39, 1) 0%,
            rgba(99, 99, 99, 1) 40%,
            rgba(39, 39, 39, 1) 100%
          );
        }
      }
      .text-part {
        text-align: center;
        align-items: center;
      }
      .button-part {
        justify-content: center;
      }
    }
  }
`;

export const GuidModal = styled.div<{
  visiblity: string;
  opacity: string;
  pointer: string;
}>`
  visibility: ${({ visiblity }) => visiblity};
  opacity: ${({ opacity }) => opacity};
  pointer-events: ${({ pointer }) => pointer};
  color: ${({ theme }) => theme.white100};
  position: fixed;
  width: fit-content;
  height: 600px;
  overflow: hidden;
  max-width: 1000px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 9999;
  transition: all 0.3s ease;
  @media (max-width: ${globalViewPorts.lg}) {
    height: 500px;
    padding: 0 20px;
  }
  @media (max-width: ${globalViewPorts.sm}) {
    /* height: 500px; */
    padding: 0 0px;
  }

  .upload-guid-modal {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.black100};
    border-radius: 30px;
    /* position: relative; */
    overflow-y: scroll;
    &::-webkit-scrollbar {
      /* Chrome, Safari, etc. */
      display: none;
    }
    .modal-bottom {
      position: sticky;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 81px;
      background: #ffffff1f;
      backdrop-filter: blur(20px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 20;
    }
    .modal-header {
      width: 100%;
      height: 124px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 57px;
      @media (max-width: ${globalViewPorts.lg}) {
        padding: 0px 20px;
      }
    }
    .modal-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .top-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0px 57px;
        @media (max-width: ${globalViewPorts.lg}) {
          padding: 0px 20px;
        }
        gap: 2rem;
        .top-title {
        }
        .top-box {
          border: 1px solid #ffffff67;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 19px;

          .image-part {
            flex-basis: 50%;
            display: flex;
            gap: 2rem;
            .image-content {
              position: relative;
              background-color: ${({ theme }) => theme.dark80};
              .check-icon {
                position: absolute;
                top: 2px;
                right: 20px;
              }
            }
          }

          @media (max-width: ${globalViewPorts.lg}) {
            flex-direction: column;
            .image-part {
              flex-basis: 100%;
              width: 100%;
              .image-content {
                width: 100%;
              }
            }
          }

          > .text-sec {
            flex-basis: 50%;
            display: flex;
            flex-direction: column;
            background: transparent;
            gap: 1rem;
            p {
              font-size: 15px !important;
            }
          }
        }
      }
      /* line dvider goes here  */
      .bottom-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0px 57px;
        gap: 2rem;
        @media (max-width: ${globalViewPorts.lg}) {
          padding: 0px 20px;
        }
        .top-title {
        }
        .bottom-box,
        .bottom-box2 {
          width: 100%;
          display: grid;
          /* grid-template-columns: repeat(3, minmax(204px, 1fr)); */
          grid-template-columns: minmax(auto, 284px) minmax(auto, 204px) minmax(
              auto,
              284px
            );
          justify-content: space-between;
          gap: 2rem;

          @media (max-width: ${globalViewPorts.lg}) {
            grid-template-columns: repeat(1, 1fr);
          }
          .bottom-item {
            width: 100%;
            height: 247px;
            overflow: hidden;
            border: 1px solid #ffffff3d;
            padding: 16px;
            border-radius: 30px;
            background: #222222;
            position: relative;
            .guid-item-bg {
              position: absolute;
              top: 0;
              right: 0px;
              z-index: 0;
              width: 100%;
              height: 100%;
            }
            > .content-box {
              position: relative;
              z-index: 1;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              gap: 12px;
              align-items: center;

              img {
                border-radius: 20px;
                width: 100%;
                height: 160px;
              }

              > .btn {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #000;
                gap: 0.2rem;
                background-color: ${({ theme }) => theme.dark100};
                font-size: 12px;
                height: 40px;
                width: 100%;
                padding: 10px;
                border-radius: 50px;
                > img {
                  width: 20px;
                  height: 20px;
                  object-fit: contain;
                }
              }
            }
          }
        }
        .bottom-box2 {
          grid-template-columns: minmax(auto, 251px) minmax(auto, 251px) !important;
          justify-content: center !important;
          @media (max-width: ${globalViewPorts.lg}) {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      }
    }
  }
`;

export const SamplePhotosModal = styled.div<{
  visiblity: string;
  opacity: string;
  pointer: string;
}>`
  visibility: ${({ visiblity }) => visiblity};
  opacity: ${({ opacity }) => opacity};
  pointer-events: ${({ pointer }) => pointer};
  color: ${({ theme }) => theme.white100};
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  > .upload-wrapper {
    position: relative;
    z-index: 10002;
    width: fit-content;
    max-width: 1000px;
    height: 779px;

    @media (max-width: ${globalViewPorts.lg}) {
    }
    @media (max-width: ${globalViewPorts.sm}) {
    }

    .upload-guid-modal {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.black100};
      border-radius: 30px;
      /* position: relative; */
      overflow-y: scroll;
      &::-webkit-scrollbar {
        /* Chrome, Safari, etc. */
        display: none;
      }
      .modal-bottom {
        position: sticky;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 81px;
        background: #ffffff1f;
        backdrop-filter: blur(20px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 20;
      }
      .modal-header {
        width: 100%;
        height: 124px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 57px;
        @media (max-width: ${globalViewPorts.lg}) {
          padding: 0px 20px;
        }
      }
      .modal-content {
        padding: 0px 57px;
        display: grid;
        grid-template-columns: repeat(4, minmax(170px, 1fr));
        gap: 37px;
        .photo {
          width: 100%;
          /* max-width: 170px; */
          margin: 0 auto;
          height: 165px;
          overflow: hidden;
          border-radius: 15px;
          background: var(--dark-gradient);
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        @media (max-width: ${globalViewPorts.lg}) {
          padding: 0px 20px;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        }
        @media (max-width: ${globalViewPorts.sm}) {
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        }
      }
    }
  }
`;
