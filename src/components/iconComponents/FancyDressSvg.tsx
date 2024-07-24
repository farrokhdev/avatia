import React from "react";

type Props = {
  classN: string;
  activateFunc: () => void;
};

export const FancyDressSvg = ({ classN, activateFunc }: Props) => {
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
      <path
        d="M41.3785 50.3277C39.2654 52.0747 36.1892 52.3741 33.6725 51.3793C33.0676 51.1403 32.5424 50.7399 31.9282 50.5262C30.0982 49.8897 29.1964 50.6206 27.6756 51.3419C25.4823 52.3823 22.5203 52.0751 20.5015 50.8217C20.1319 50.5922 19.8712 50.3301 19.5442 50.0485C17.164 47.9989 15.7011 49.8639 13.2616 49.2262C10.6758 48.5502 8.32468 45.6481 8.05474 42.9672C7.88136 41.2453 8.35339 39.7617 9.35892 38.3665L10.2857 37.0953C13.2155 33.1142 16.6367 29.5241 20.4011 26.3235L22.2044 24.8007C22.1708 22.939 21.9716 21.0906 21.7709 19.243C21.4868 16.6263 21.1412 13.9946 20.6066 11.4164C20.2171 9.53828 21.5737 7.99574 23.3563 7.65285C25.6329 7.44168 27.5051 9.36478 27.6311 11.5565C27.6509 11.8996 27.6102 12.2597 27.6715 12.5979L27.68 12.6408C28.27 15.802 33.5372 16.1317 33.7158 11.8237C33.8193 9.32476 35.9057 7.01007 38.5131 7.77285C39.9826 8.20281 40.8792 9.49433 40.8558 11.0001C40.8468 11.5748 40.6746 12.1057 40.5916 12.6681L40.0056 16.6383L39.2651 24.4917C39.213 25.0302 39.1772 24.8356 39.5861 25.1949L42.3394 27.6005C45.4916 30.5629 48.2928 33.8422 50.7835 37.3752C51.3195 38.1355 51.9472 38.8823 52.3152 39.7404L52.4334 40.0333C54.0282 44.0053 51.0996 48.6401 46.9104 49.1894C44.4778 49.5084 43.7769 48.3621 41.3785 50.3277ZM23.5514 9.35312C22.6863 9.50822 22.0421 10.2545 22.2044 11.1586L22.7277 13.9152L23.2642 17.9021C23.2974 18.2114 23.342 18.5028 23.3457 18.816C25.0827 19.8086 28.0713 19.751 29.9911 19.7481C30.7351 19.747 31.4933 19.7774 32.235 19.7286L33.4167 19.5994C34.9673 19.4614 36.5281 19.292 38.0594 19.0053L38.8328 13.3067L39.0199 12.0988C39.17 11.2988 39.4183 10.6455 38.868 9.9264C37.7712 8.49296 35.5403 9.82808 35.3797 11.4996L35.3704 11.5961C35.3395 11.9165 35.3737 12.2416 35.3382 12.5603C35.0261 15.363 32.1341 17.3784 29.4252 16.5484C27.5813 15.9835 26.0919 14.3941 26.0073 12.4076C25.9953 12.1235 26.0195 11.8359 25.9941 11.5524C25.8782 10.2615 24.8541 9.308 23.5514 9.35312ZM23.6058 20.751L23.8158 24.4023L37.6413 24.4045L37.6871 23.5318L37.9023 20.7609C37.5229 20.7815 37.1503 20.8746 36.7747 20.9305L33.0095 21.3512C32.7508 21.3748 32.5013 21.4236 32.2387 21.4385L29.817 21.4768C27.4988 21.4949 25.8495 21.4763 23.6058 20.751ZM23.3249 26.1447C23.0689 26.1943 22.7761 26.5189 22.5707 26.6843L19.8547 29.0032L15.2249 33.63C13.8833 35.1095 12.6596 36.683 11.4776 38.2907L10.3125 39.8576C9.18964 41.5172 9.5545 43.522 10.5999 45.0888C10.9438 45.6042 11.337 46.1816 11.8214 46.5747C12.5929 47.2652 13.65 47.7505 14.7037 47.6882C15.4548 47.6438 16.1644 47.3139 16.9261 47.3102L17.9221 43.7732L20.5262 36.2737L23.5616 29.0426C23.883 28.3504 24.5367 27.4626 24.4325 26.6593L24.4292 26.6264C24.3634 26.0515 23.8351 26.1255 23.3249 26.1447ZM26.308 26.1612L26.051 26.1594C26.0367 26.2149 26.0475 26.2558 26.056 26.3113C26.2756 27.7354 25.3925 29.0258 24.8072 30.254L21.5068 38.2992L19.6914 43.6332L18.5197 47.602C20.1843 48.2214 20.7794 49.2507 22.3849 49.8659C23.93 50.4009 25.684 50.4313 27.1814 49.709C27.9139 49.3557 28.5885 48.8877 29.4055 48.7508C29.5393 48.7284 29.6927 48.7377 29.8175 48.6831L29.8177 26.166L26.308 26.1612ZM37.0691 26.1497L36.7883 26.1648C36.6962 26.3038 36.7088 26.7822 36.7479 26.95L36.7957 27.0988C37.0466 27.8089 37.4346 28.4859 37.7697 29.1604L38.7277 31.171C39.0226 31.7604 39.3309 32.3711 39.5777 32.9832L42.4167 39.7257L45.0168 47.1566C45.0642 47.2938 45.0538 47.3969 45.1476 47.5189C45.7946 47.5213 46.5915 47.6065 47.2067 47.3976C48.0999 47.0944 48.8101 46.8252 49.5324 46.1547C50.4202 45.3026 51.1493 44.0158 51.1731 42.7579C51.2135 40.6217 50.677 40.0967 49.4362 38.3502L45.8091 33.6391L43.6452 31.2336L38.3192 26.2999C38.2081 26.1831 38.1783 26.1553 38.0122 26.1524L37.0691 26.1497ZM31.5534 26.1669L31.4534 26.1948C31.4083 26.3272 31.428 26.5282 31.4277 26.6689L31.4256 48.6828C32.7314 48.8938 33.1136 49.3398 34.1796 49.7699C35.9936 50.5016 38.4331 50.4241 40.0564 49.2592L41.3296 48.288C41.9921 47.8652 42.6109 47.687 43.3513 47.4909C43.22 46.9673 43.0344 46.453 42.8652 45.9403L40.0064 38.0851L36.1237 29.5527C35.5665 28.4412 35.0369 27.4794 34.9942 26.2052L31.5534 26.1669Z"
        fill="#969697"
      />
    </svg>
  );
};
