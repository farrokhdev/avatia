import React from "react";

type Props = {
  classN: string;
  activateFunc: () => void;
};

export const FancyShoeSvg = ({ classN, activateFunc }: Props) => {
  return (
    <svg
      width="61"
      height="60"
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classN}
      onClick={activateFunc}
    >
      <mask
        id="path-1-outside-1_251_1184"
        maskUnits="userSpaceOnUse"
        x="1.70508"
        y="13.4844"
        width="55"
        height="35"
        fill="black"
      >
        <rect fill="white" x="1.70508" y="13.4844" width="55" height="35" />
        <path d="M3.46056 33.8179C3.00751 35.8777 2.75349 37.9924 2.70508 40.1387L2.87482 44.7543C2.90112 45.4737 3.40259 46.0976 4.09531 46.2714C8.79617 47.4487 13.8198 47.561 18.1638 47.5741C18.9175 47.5741 19.5439 47.0081 19.6198 46.2576L19.6987 45.4755C20.8726 45.6248 22.4427 45.8206 24.2878 46.0403C32.6662 47.038 37.281 47.5878 40.1775 47.5878C40.4416 47.5878 40.6927 47.583 40.9312 47.5741C45.8245 47.3872 50.8015 45.9203 55.7247 43.214C56.2763 42.9095 56.58 42.2904 56.4789 41.6736C56.3839 41.0892 56.2614 40.4993 56.1144 39.9196C55.5979 37.8849 54.3888 36.3344 52.6179 35.4371C51.1977 34.7177 49.7961 34.6335 48.3127 34.5451L47.8226 34.5147C47.0497 34.4645 46.2835 34.4615 45.5424 34.4586C43.8138 34.452 42.1809 34.446 40.5851 33.8669C37.5566 32.7684 35.066 31.6997 32.7553 30.0537C31.4697 29.1378 28.4585 26.9927 26.103 23.0278C24.8245 20.8761 23.9292 18.5268 23.4432 16.0456C23.2669 15.1458 22.4708 14.4927 21.5492 14.4927H19.6413C19.578 14.4802 19.5128 14.4831 19.4459 14.4927H8.58578C7.87513 14.4927 7.21288 14.7751 6.72038 15.2873C6.22788 15.799 5.97327 16.4724 6.00255 17.1704L6.12687 22.5932L5.05401 28.6518C4.3828 30.3235 3.84667 32.0615 3.46056 33.8179ZM6.02766 29.4578C6.08802 29.5092 6.15855 29.5504 6.23864 29.5749C8.064 30.1402 10.6986 31.3391 12.8838 33.8394C15.2423 36.5386 15.8962 39.4485 16.0653 41.1542C12.0608 40.6091 7.98092 40.0778 3.92258 39.6605C3.99371 37.7834 4.22501 35.9063 4.62786 34.0747C4.97273 32.5075 5.4467 30.9582 6.02766 29.4578ZM17.7359 20.069C17.9104 20.6337 17.8046 21.226 17.446 21.6941C17.088 22.1603 16.5405 22.4087 15.9571 22.3944L7.3109 22.0827L7.25532 19.6457L17.6474 19.7824L17.7359 20.069ZM7.22065 23.2738L15.9135 23.5872C15.9512 23.589 15.9888 23.5896 16.0265 23.5896C16.9631 23.5896 17.8213 23.1675 18.3945 22.4206C18.9922 21.6415 19.1679 20.6564 18.8781 19.7167L17.6301 15.6885H19.0759C19.8392 18.4904 20.6448 21.3705 21.8115 24.1055C23.3918 27.807 25.3308 30.6495 30.1087 33.3797C30.306 33.492 30.5217 33.6072 30.7441 33.7254C31.3047 34.0233 31.8845 34.332 32.2879 34.6753C33.0918 35.3607 33.356 36.5117 32.9215 37.4204L26.8029 37.0079C25.9314 36.8932 24.2149 36.864 22.5049 37.9327C20.7088 39.0563 19.9886 40.7202 19.7136 41.6539C19.4626 41.6193 19.208 41.5847 18.9576 41.5507C18.4023 41.4742 17.8387 41.3978 17.2798 41.3214C17.14 39.5112 16.4921 36.1547 13.7845 33.0561C11.4153 30.345 8.56606 29.0471 6.59307 28.4363C6.49684 28.4071 6.40062 28.41 6.30857 28.4274L7.22065 23.2738ZM55.1473 42.168C50.389 44.7836 45.5902 46.2009 40.8845 46.3812C38.1208 46.4827 33.4953 45.9346 24.4241 44.854C22.2467 44.5949 20.4512 44.3686 19.2409 44.2134C19.2158 44.2104 19.1907 44.2086 19.165 44.2086C19.0305 44.2086 18.8996 44.254 18.7932 44.3382C18.6671 44.4385 18.5864 44.5854 18.5703 44.746L18.4298 46.1376C18.416 46.2756 18.3013 46.38 18.1626 46.38C13.8933 46.3675 8.95576 46.2582 4.38639 45.1137C4.20708 45.069 4.07678 44.903 4.06961 44.7107L3.92736 40.8623C8.90435 41.3763 13.9292 42.0641 18.7944 42.7322C23.0715 43.3197 27.4944 43.9274 31.8701 44.414C34.5699 44.7143 36.9924 44.8642 39.2283 44.8642C41.2085 44.8642 43.0422 44.7466 44.7917 44.5119C48.6193 43.9985 51.9556 42.3411 55.0475 40.6133C55.1437 41.0301 55.231 41.4486 55.2985 41.8653C55.3176 41.9841 55.2555 42.1089 55.1473 42.168ZM45.5376 35.6532C46.2602 35.6562 47.0079 35.6592 47.7443 35.7069L48.2409 35.7374C49.6563 35.8222 50.878 35.8956 52.0763 36.5022C53.3171 37.1315 54.1946 38.1195 54.7026 39.4372C51.6454 41.1566 48.3527 42.8295 44.6321 43.3286C41.0065 43.814 36.9935 43.783 32.0022 43.2271C28.3043 42.8164 24.5723 42.3172 20.918 41.8175C21.166 41.0748 21.7655 39.8026 23.1384 38.9434C24.5322 38.0724 25.9344 38.098 26.6845 38.1942L35.1419 38.7661C36.0187 38.8181 36.825 38.3231 37.1597 37.5171L38.4764 34.3481C39.0275 34.5636 39.5893 34.7768 40.1763 34.9893C41.9682 35.6407 43.7827 35.6472 45.5376 35.6532ZM22.27 16.276C22.5856 17.8856 23.0655 19.4427 23.7014 20.9317C23.295 20.9884 22.9812 21.3335 22.9812 21.755C22.9812 22.2159 23.3554 22.5896 23.8168 22.5896C24.0344 22.5896 24.2304 22.5048 24.3792 22.3687C24.5992 22.798 24.8275 23.2231 25.0743 23.6386C25.259 23.9496 25.4485 24.2464 25.6398 24.5365C25.3427 24.6649 25.1347 24.9592 25.1347 25.3025C25.1347 25.7634 25.5089 26.1372 25.9703 26.1372C26.2141 26.1372 26.4317 26.0309 26.5841 25.8649C27.0515 26.4733 27.5243 27.0267 27.9893 27.5264C27.801 27.6793 27.6785 27.9097 27.6785 28.1712C27.6785 28.6321 28.0527 29.0059 28.5141 29.0059C28.7759 29.0059 29.0066 28.8829 29.1596 28.6948C29.6622 29.1629 30.138 29.5671 30.5701 29.9122C30.3323 30.059 30.1721 30.3205 30.1721 30.6208C30.1721 31.0818 30.5462 31.4555 31.0077 31.4555C31.3902 31.4555 31.7087 31.1976 31.8086 30.8471C31.8976 30.911 31.9825 30.9713 32.0596 31.0268C33.714 32.2048 35.4443 33.0931 37.3671 33.8997L36.0564 37.0604C35.9189 37.393 35.589 37.6079 35.2238 37.575L34.1653 37.5034C34.5848 36.1881 34.17 34.7087 33.0631 33.766C32.5605 33.3379 31.8934 32.9827 31.3053 32.6704C31.0943 32.5582 30.8893 32.4495 30.7022 32.3421C26.195 29.7671 24.4324 27.1999 22.9113 23.6356C21.8181 21.0749 21.0429 18.3519 20.3149 15.6874H21.5498C21.9006 15.6879 22.2036 15.9351 22.27 16.276ZM7.58345 16.1154C7.84823 15.8396 8.20445 15.6879 8.58638 15.6879H16.3791L17.2756 18.5829L7.22782 18.451L7.19794 17.134C7.1818 16.7525 7.31867 16.3907 7.58345 16.1154Z" />
      </mask>
      <path
        d="M3.46056 33.8179C3.00751 35.8777 2.75349 37.9924 2.70508 40.1387L2.87482 44.7543C2.90112 45.4737 3.40259 46.0976 4.09531 46.2714C8.79617 47.4487 13.8198 47.561 18.1638 47.5741C18.9175 47.5741 19.5439 47.0081 19.6198 46.2576L19.6987 45.4755C20.8726 45.6248 22.4427 45.8206 24.2878 46.0403C32.6662 47.038 37.281 47.5878 40.1775 47.5878C40.4416 47.5878 40.6927 47.583 40.9312 47.5741C45.8245 47.3872 50.8015 45.9203 55.7247 43.214C56.2763 42.9095 56.58 42.2904 56.4789 41.6736C56.3839 41.0892 56.2614 40.4993 56.1144 39.9196C55.5979 37.8849 54.3888 36.3344 52.6179 35.4371C51.1977 34.7177 49.7961 34.6335 48.3127 34.5451L47.8226 34.5147C47.0497 34.4645 46.2835 34.4615 45.5424 34.4586C43.8138 34.452 42.1809 34.446 40.5851 33.8669C37.5566 32.7684 35.066 31.6997 32.7553 30.0537C31.4697 29.1378 28.4585 26.9927 26.103 23.0278C24.8245 20.8761 23.9292 18.5268 23.4432 16.0456C23.2669 15.1458 22.4708 14.4927 21.5492 14.4927H19.6413C19.578 14.4802 19.5128 14.4831 19.4459 14.4927H8.58578C7.87513 14.4927 7.21288 14.7751 6.72038 15.2873C6.22788 15.799 5.97327 16.4724 6.00255 17.1704L6.12687 22.5932L5.05401 28.6518C4.3828 30.3235 3.84667 32.0615 3.46056 33.8179ZM6.02766 29.4578C6.08802 29.5092 6.15855 29.5504 6.23864 29.5749C8.064 30.1402 10.6986 31.3391 12.8838 33.8394C15.2423 36.5386 15.8962 39.4485 16.0653 41.1542C12.0608 40.6091 7.98092 40.0778 3.92258 39.6605C3.99371 37.7834 4.22501 35.9063 4.62786 34.0747C4.97273 32.5075 5.4467 30.9582 6.02766 29.4578ZM17.7359 20.069C17.9104 20.6337 17.8046 21.226 17.446 21.6941C17.088 22.1603 16.5405 22.4087 15.9571 22.3944L7.3109 22.0827L7.25532 19.6457L17.6474 19.7824L17.7359 20.069ZM7.22065 23.2738L15.9135 23.5872C15.9512 23.589 15.9888 23.5896 16.0265 23.5896C16.9631 23.5896 17.8213 23.1675 18.3945 22.4206C18.9922 21.6415 19.1679 20.6564 18.8781 19.7167L17.6301 15.6885H19.0759C19.8392 18.4904 20.6448 21.3705 21.8115 24.1055C23.3918 27.807 25.3308 30.6495 30.1087 33.3797C30.306 33.492 30.5217 33.6072 30.7441 33.7254C31.3047 34.0233 31.8845 34.332 32.2879 34.6753C33.0918 35.3607 33.356 36.5117 32.9215 37.4204L26.8029 37.0079C25.9314 36.8932 24.2149 36.864 22.5049 37.9327C20.7088 39.0563 19.9886 40.7202 19.7136 41.6539C19.4626 41.6193 19.208 41.5847 18.9576 41.5507C18.4023 41.4742 17.8387 41.3978 17.2798 41.3214C17.14 39.5112 16.4921 36.1547 13.7845 33.0561C11.4153 30.345 8.56606 29.0471 6.59307 28.4363C6.49684 28.4071 6.40062 28.41 6.30857 28.4274L7.22065 23.2738ZM55.1473 42.168C50.389 44.7836 45.5902 46.2009 40.8845 46.3812C38.1208 46.4827 33.4953 45.9346 24.4241 44.854C22.2467 44.5949 20.4512 44.3686 19.2409 44.2134C19.2158 44.2104 19.1907 44.2086 19.165 44.2086C19.0305 44.2086 18.8996 44.254 18.7932 44.3382C18.6671 44.4385 18.5864 44.5854 18.5703 44.746L18.4298 46.1376C18.416 46.2756 18.3013 46.38 18.1626 46.38C13.8933 46.3675 8.95576 46.2582 4.38639 45.1137C4.20708 45.069 4.07678 44.903 4.06961 44.7107L3.92736 40.8623C8.90435 41.3763 13.9292 42.0641 18.7944 42.7322C23.0715 43.3197 27.4944 43.9274 31.8701 44.414C34.5699 44.7143 36.9924 44.8642 39.2283 44.8642C41.2085 44.8642 43.0422 44.7466 44.7917 44.5119C48.6193 43.9985 51.9556 42.3411 55.0475 40.6133C55.1437 41.0301 55.231 41.4486 55.2985 41.8653C55.3176 41.9841 55.2555 42.1089 55.1473 42.168ZM45.5376 35.6532C46.2602 35.6562 47.0079 35.6592 47.7443 35.7069L48.2409 35.7374C49.6563 35.8222 50.878 35.8956 52.0763 36.5022C53.3171 37.1315 54.1946 38.1195 54.7026 39.4372C51.6454 41.1566 48.3527 42.8295 44.6321 43.3286C41.0065 43.814 36.9935 43.783 32.0022 43.2271C28.3043 42.8164 24.5723 42.3172 20.918 41.8175C21.166 41.0748 21.7655 39.8026 23.1384 38.9434C24.5322 38.0724 25.9344 38.098 26.6845 38.1942L35.1419 38.7661C36.0187 38.8181 36.825 38.3231 37.1597 37.5171L38.4764 34.3481C39.0275 34.5636 39.5893 34.7768 40.1763 34.9893C41.9682 35.6407 43.7827 35.6472 45.5376 35.6532ZM22.27 16.276C22.5856 17.8856 23.0655 19.4427 23.7014 20.9317C23.295 20.9884 22.9812 21.3335 22.9812 21.755C22.9812 22.2159 23.3554 22.5896 23.8168 22.5896C24.0344 22.5896 24.2304 22.5048 24.3792 22.3687C24.5992 22.798 24.8275 23.2231 25.0743 23.6386C25.259 23.9496 25.4485 24.2464 25.6398 24.5365C25.3427 24.6649 25.1347 24.9592 25.1347 25.3025C25.1347 25.7634 25.5089 26.1372 25.9703 26.1372C26.2141 26.1372 26.4317 26.0309 26.5841 25.8649C27.0515 26.4733 27.5243 27.0267 27.9893 27.5264C27.801 27.6793 27.6785 27.9097 27.6785 28.1712C27.6785 28.6321 28.0527 29.0059 28.5141 29.0059C28.7759 29.0059 29.0066 28.8829 29.1596 28.6948C29.6622 29.1629 30.138 29.5671 30.5701 29.9122C30.3323 30.059 30.1721 30.3205 30.1721 30.6208C30.1721 31.0818 30.5462 31.4555 31.0077 31.4555C31.3902 31.4555 31.7087 31.1976 31.8086 30.8471C31.8976 30.911 31.9825 30.9713 32.0596 31.0268C33.714 32.2048 35.4443 33.0931 37.3671 33.8997L36.0564 37.0604C35.9189 37.393 35.589 37.6079 35.2238 37.575L34.1653 37.5034C34.5848 36.1881 34.17 34.7087 33.0631 33.766C32.5605 33.3379 31.8934 32.9827 31.3053 32.6704C31.0943 32.5582 30.8893 32.4495 30.7022 32.3421C26.195 29.7671 24.4324 27.1999 22.9113 23.6356C21.8181 21.0749 21.0429 18.3519 20.3149 15.6874H21.5498C21.9006 15.6879 22.2036 15.9351 22.27 16.276ZM7.58345 16.1154C7.84823 15.8396 8.20445 15.6879 8.58638 15.6879H16.3791L17.2756 18.5829L7.22782 18.451L7.19794 17.134C7.1818 16.7525 7.31867 16.3907 7.58345 16.1154Z"
        fill="#969697"
      />
      <path
        d="M3.46056 33.8179C3.00751 35.8777 2.75349 37.9924 2.70508 40.1387L2.87482 44.7543C2.90112 45.4737 3.40259 46.0976 4.09531 46.2714C8.79617 47.4487 13.8198 47.561 18.1638 47.5741C18.9175 47.5741 19.5439 47.0081 19.6198 46.2576L19.6987 45.4755C20.8726 45.6248 22.4427 45.8206 24.2878 46.0403C32.6662 47.038 37.281 47.5878 40.1775 47.5878C40.4416 47.5878 40.6927 47.583 40.9312 47.5741C45.8245 47.3872 50.8015 45.9203 55.7247 43.214C56.2763 42.9095 56.58 42.2904 56.4789 41.6736C56.3839 41.0892 56.2614 40.4993 56.1144 39.9196C55.5979 37.8849 54.3888 36.3344 52.6179 35.4371C51.1977 34.7177 49.7961 34.6335 48.3127 34.5451L47.8226 34.5147C47.0497 34.4645 46.2835 34.4615 45.5424 34.4586C43.8138 34.452 42.1809 34.446 40.5851 33.8669C37.5566 32.7684 35.066 31.6997 32.7553 30.0537C31.4697 29.1378 28.4585 26.9927 26.103 23.0278C24.8245 20.8761 23.9292 18.5268 23.4432 16.0456C23.2669 15.1458 22.4708 14.4927 21.5492 14.4927H19.6413C19.578 14.4802 19.5128 14.4831 19.4459 14.4927H8.58578C7.87513 14.4927 7.21288 14.7751 6.72038 15.2873C6.22788 15.799 5.97327 16.4724 6.00255 17.1704L6.12687 22.5932L5.05401 28.6518C4.3828 30.3235 3.84667 32.0615 3.46056 33.8179ZM6.02766 29.4578C6.08802 29.5092 6.15855 29.5504 6.23864 29.5749C8.064 30.1402 10.6986 31.3391 12.8838 33.8394C15.2423 36.5386 15.8962 39.4485 16.0653 41.1542C12.0608 40.6091 7.98092 40.0778 3.92258 39.6605C3.99371 37.7834 4.22501 35.9063 4.62786 34.0747C4.97273 32.5075 5.4467 30.9582 6.02766 29.4578ZM17.7359 20.069C17.9104 20.6337 17.8046 21.226 17.446 21.6941C17.088 22.1603 16.5405 22.4087 15.9571 22.3944L7.3109 22.0827L7.25532 19.6457L17.6474 19.7824L17.7359 20.069ZM7.22065 23.2738L15.9135 23.5872C15.9512 23.589 15.9888 23.5896 16.0265 23.5896C16.9631 23.5896 17.8213 23.1675 18.3945 22.4206C18.9922 21.6415 19.1679 20.6564 18.8781 19.7167L17.6301 15.6885H19.0759C19.8392 18.4904 20.6448 21.3705 21.8115 24.1055C23.3918 27.807 25.3308 30.6495 30.1087 33.3797C30.306 33.492 30.5217 33.6072 30.7441 33.7254C31.3047 34.0233 31.8845 34.332 32.2879 34.6753C33.0918 35.3607 33.356 36.5117 32.9215 37.4204L26.8029 37.0079C25.9314 36.8932 24.2149 36.864 22.5049 37.9327C20.7088 39.0563 19.9886 40.7202 19.7136 41.6539C19.4626 41.6193 19.208 41.5847 18.9576 41.5507C18.4023 41.4742 17.8387 41.3978 17.2798 41.3214C17.14 39.5112 16.4921 36.1547 13.7845 33.0561C11.4153 30.345 8.56606 29.0471 6.59307 28.4363C6.49684 28.4071 6.40062 28.41 6.30857 28.4274L7.22065 23.2738ZM55.1473 42.168C50.389 44.7836 45.5902 46.2009 40.8845 46.3812C38.1208 46.4827 33.4953 45.9346 24.4241 44.854C22.2467 44.5949 20.4512 44.3686 19.2409 44.2134C19.2158 44.2104 19.1907 44.2086 19.165 44.2086C19.0305 44.2086 18.8996 44.254 18.7932 44.3382C18.6671 44.4385 18.5864 44.5854 18.5703 44.746L18.4298 46.1376C18.416 46.2756 18.3013 46.38 18.1626 46.38C13.8933 46.3675 8.95576 46.2582 4.38639 45.1137C4.20708 45.069 4.07678 44.903 4.06961 44.7107L3.92736 40.8623C8.90435 41.3763 13.9292 42.0641 18.7944 42.7322C23.0715 43.3197 27.4944 43.9274 31.8701 44.414C34.5699 44.7143 36.9924 44.8642 39.2283 44.8642C41.2085 44.8642 43.0422 44.7466 44.7917 44.5119C48.6193 43.9985 51.9556 42.3411 55.0475 40.6133C55.1437 41.0301 55.231 41.4486 55.2985 41.8653C55.3176 41.9841 55.2555 42.1089 55.1473 42.168ZM45.5376 35.6532C46.2602 35.6562 47.0079 35.6592 47.7443 35.7069L48.2409 35.7374C49.6563 35.8222 50.878 35.8956 52.0763 36.5022C53.3171 37.1315 54.1946 38.1195 54.7026 39.4372C51.6454 41.1566 48.3527 42.8295 44.6321 43.3286C41.0065 43.814 36.9935 43.783 32.0022 43.2271C28.3043 42.8164 24.5723 42.3172 20.918 41.8175C21.166 41.0748 21.7655 39.8026 23.1384 38.9434C24.5322 38.0724 25.9344 38.098 26.6845 38.1942L35.1419 38.7661C36.0187 38.8181 36.825 38.3231 37.1597 37.5171L38.4764 34.3481C39.0275 34.5636 39.5893 34.7768 40.1763 34.9893C41.9682 35.6407 43.7827 35.6472 45.5376 35.6532ZM22.27 16.276C22.5856 17.8856 23.0655 19.4427 23.7014 20.9317C23.295 20.9884 22.9812 21.3335 22.9812 21.755C22.9812 22.2159 23.3554 22.5896 23.8168 22.5896C24.0344 22.5896 24.2304 22.5048 24.3792 22.3687C24.5992 22.798 24.8275 23.2231 25.0743 23.6386C25.259 23.9496 25.4485 24.2464 25.6398 24.5365C25.3427 24.6649 25.1347 24.9592 25.1347 25.3025C25.1347 25.7634 25.5089 26.1372 25.9703 26.1372C26.2141 26.1372 26.4317 26.0309 26.5841 25.8649C27.0515 26.4733 27.5243 27.0267 27.9893 27.5264C27.801 27.6793 27.6785 27.9097 27.6785 28.1712C27.6785 28.6321 28.0527 29.0059 28.5141 29.0059C28.7759 29.0059 29.0066 28.8829 29.1596 28.6948C29.6622 29.1629 30.138 29.5671 30.5701 29.9122C30.3323 30.059 30.1721 30.3205 30.1721 30.6208C30.1721 31.0818 30.5462 31.4555 31.0077 31.4555C31.3902 31.4555 31.7087 31.1976 31.8086 30.8471C31.8976 30.911 31.9825 30.9713 32.0596 31.0268C33.714 32.2048 35.4443 33.0931 37.3671 33.8997L36.0564 37.0604C35.9189 37.393 35.589 37.6079 35.2238 37.575L34.1653 37.5034C34.5848 36.1881 34.17 34.7087 33.0631 33.766C32.5605 33.3379 31.8934 32.9827 31.3053 32.6704C31.0943 32.5582 30.8893 32.4495 30.7022 32.3421C26.195 29.7671 24.4324 27.1999 22.9113 23.6356C21.8181 21.0749 21.0429 18.3519 20.3149 15.6874H21.5498C21.9006 15.6879 22.2036 15.9351 22.27 16.276ZM7.58345 16.1154C7.84823 15.8396 8.20445 15.6879 8.58638 15.6879H16.3791L17.2756 18.5829L7.22782 18.451L7.19794 17.134C7.1818 16.7525 7.31867 16.3907 7.58345 16.1154Z"
        stroke="#969697"
        stroke-width="0.14"
        mask="url(#path-1-outside-1_251_1184)"
      />
    </svg>
  );
};
