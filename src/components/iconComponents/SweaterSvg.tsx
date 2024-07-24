import React from "react";

type Props = {
  classN: string;
  activateFunc: () => void;
};

export const SweaterSvg = ({ classN, activateFunc }: Props) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classN}
      onClick={activateFunc}
    >
      <path
        d="M22.3747 49.8811L21.4395 49.7634C20.6265 49.6611 19.8091 49.5002 19.0102 49.3196C16.8707 48.8361 15.8336 48.3473 14.6551 46.3964C14.5377 46.2019 14.4629 46.0158 14.3203 45.8328C13.5906 46.8033 12.9734 48.2341 12.922 49.4517C12.8949 50.0943 12.8158 50.9743 11.862 50.7676L5.93644 49.238C5.63231 49.1585 5.30558 49.1089 5.00867 49.0102C4.27298 48.7653 4.59954 47.8805 4.60349 47.3423C4.60964 46.5029 4.50948 45.7388 4.38039 44.9104C4.09537 43.0813 4.28871 41.2096 4.72797 39.42L5.31077 37.2207C6.69002 31.4107 8.49388 25.6719 10.619 20.0914C11.1001 18.8281 11.4357 17.4604 12.2565 16.3615C13.7149 14.4092 15.722 13.6022 17.9986 13.1296L20.8698 12.6407C23.3756 12.2791 21.7592 10.5047 22.4549 9.6075C22.8789 9.06076 23.3419 9.38848 23.8469 9.55998L24.8809 9.87645C25.5993 10.0768 26.3824 10.2254 27.1241 10.306L29.7091 10.4574C31.6949 10.4563 33.7737 10.2486 35.6458 9.5427C35.9271 9.43664 36.1503 9.2775 36.4563 9.23438C36.8084 9.26426 37.0848 9.36598 37.2511 9.71232L37.2639 9.73981C37.4956 10.1859 37.242 10.8025 37.2973 11.2764L37.3057 11.329C37.3679 11.7882 37.6641 12.3043 38.1254 12.4565L38.1727 12.4712C38.4412 12.5575 38.7044 12.5402 38.9798 12.5729L39.7832 12.6945C42.7534 13.1302 46.29 14.0366 47.7648 16.9147C48.1433 17.6532 48.3822 18.4859 48.6315 19.2759L51.651 27.9185L54.3608 36.94C54.4321 37.3349 54.5677 37.7512 54.668 38.1431L55.078 40.0328C55.2335 40.6819 55.4029 41.3559 55.5012 42.0159C55.7864 43.932 55.5044 45.0905 55.2677 46.9363C55.2115 47.3746 55.1791 47.3294 55.3467 47.7671C55.6406 48.5343 54.8981 48.7897 54.334 48.91L49.0866 50.0904C48.6158 50.197 48.137 50.3617 47.6649 50.444C46.6617 50.619 46.7183 49.6324 46.6142 49.0672C46.4015 47.9128 46.1062 46.8821 45.4508 45.8805C45.3087 46.1071 45.2016 46.3494 45.0707 46.5817C43.8291 48.7858 42.1902 49.079 39.9388 49.4664L34.5679 50.1268L32.3445 50.2588L27.1358 50.2606L22.3747 49.8811ZM35.6833 11.2339C32.6438 12.2231 27.0479 12.3161 23.9091 11.2606C23.8553 12.4785 23.4986 13.2427 22.3379 13.8549C22.7717 14.6902 23.6899 15.3626 24.4754 15.8244C25.3449 16.3032 26.1445 16.5244 27.119 16.6809C30.1072 17.1611 34.4901 17.0529 36.7923 14.8454C37.072 14.5772 37.3793 14.2682 37.5065 13.892C36.3884 13.1709 35.8157 12.7862 35.7515 11.2328L35.6833 11.2339ZM39.1238 14.1874C38.5496 15.685 36.9843 16.8659 35.566 17.5046C32.9833 18.6677 27.7898 18.8726 25.0149 17.814C23.4701 17.2247 21.8398 16.1343 20.9816 14.6763C20.68 14.1639 20.9384 14.2325 20.3729 14.3134C17.3441 14.7463 14.0234 15.3861 12.796 18.6598L10.9515 23.6752L7.86511 33.4911L6.86263 37.4107C6.31097 39.7161 5.82533 40.851 5.8308 43.2568C5.83358 44.4763 6.17135 45.6755 6.17937 46.8882C6.18113 47.154 6.14381 47.4559 6.1833 47.7164L11.3897 49.0429C11.6779 47.7128 11.9813 46.616 12.7126 45.4673L13.4314 44.4339C13.8693 43.8176 13.8078 43.5588 13.6542 42.7458C13.4132 41.4701 13.6506 39.2896 14.0729 38.0052C14.1828 37.6712 14.3319 37.3519 14.4535 37.0221C14.7734 36.1546 14.9144 35.2682 15.0428 34.3567L15.803 28.0515C15.8652 27.5589 15.8245 26.8714 16.4491 26.743L16.4854 26.7351C17.3057 26.5702 17.3819 27.3479 17.3459 27.9464L16.6358 34.0852C16.4865 35.2521 16.331 36.4073 15.9233 37.5169C15.3052 39.1987 14.9884 40.343 15.1355 42.1714C15.2376 43.4393 15.1879 44.1946 15.8669 45.3596C16.2813 46.0708 16.6691 46.7358 17.4082 47.169C19.2566 48.1179 22.594 48.3138 24.6512 48.5081C25.3741 48.5764 26.1208 48.6394 26.8467 48.6512L30.0669 48.7157L34.7952 48.5009L40.6045 47.7525C43.2154 47.2702 43.8338 46.1798 44.438 43.607C44.8103 42.0217 44.7839 40.011 44.2518 38.4875C43.9766 37.6994 43.6429 36.9613 43.477 36.1363C43.2038 34.7769 43.0298 33.3853 42.9 32.0054L42.6492 28.2863C42.6459 27.9758 42.5961 27.622 42.6597 27.3185C42.7408 26.932 43.2046 26.684 43.5738 26.7935L43.6232 26.8077C44.0619 26.9417 44.1233 27.2675 44.1475 27.6695L44.2646 29.4101C44.2867 29.8392 44.2682 30.2684 44.3075 30.6975L44.7069 33.8658C44.8494 34.8599 44.9374 35.9073 45.2928 36.8541L45.8424 38.314C46.2058 39.1995 46.1797 40.3057 46.1817 41.2413L46.1797 43.253C46.1774 43.5696 46.0705 43.986 46.246 44.2572L46.4993 44.6436C47.0854 45.5382 47.4709 46.4391 47.834 47.4317L48.1084 48.684L53.667 47.4691C53.6943 46.8418 53.8175 46.2336 53.9044 45.6138C54.1745 43.6865 53.9939 42.364 53.5914 40.4576C52.9206 37.2799 52.0109 34.1646 51.0151 31.0747L49.6626 26.8409L47.0019 19.3463C46.8298 18.8456 46.7254 18.3139 46.4905 17.8377C45.3891 15.6055 42.892 14.8504 40.6295 14.4484C40.137 14.3609 39.5995 14.3436 39.1238 14.1874Z"
        fill="#969697"
      />
      <path
        d="M27.8132 27.3615C27.5067 27.5354 27.084 27.5483 26.8108 27.2985C26.1478 26.6924 26.8846 26.0817 27.2894 25.6908L28.7568 24.2937C28.1125 23.6177 25.9986 22.2651 26.7971 21.319C27.3304 20.6871 27.8753 21.2675 28.2815 21.6564L29.8593 23.2072L31.2614 21.854C31.5981 21.5259 31.8232 21.1957 32.2672 21.0089C32.5549 20.9952 32.895 21.1104 33.0497 21.3674L33.0696 21.4024C33.4533 22.0648 32.8103 22.5477 32.3916 22.9573C31.9353 23.4037 31.4672 23.8605 30.9762 24.2683C31.1309 24.4459 31.3216 24.6 31.4893 24.7672L32.711 25.9902C32.8852 26.1634 33.144 26.3647 33.266 26.5762L33.3205 26.6811C33.4307 26.9233 33.3627 27.2407 33.1935 27.4375C32.5752 28.1566 32.0209 27.4904 31.5487 27.0267L29.8985 25.3825C29.7153 25.497 29.5437 25.7154 29.3855 25.867L27.8132 27.3615Z"
        fill="#969697"
      />
    </svg>
  );
};
