import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Home/VideoSection.css";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="content-wrapper">
        <div className="video-content">
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.3808 10.025L38.293 10.4649C50.7616 12.0486 60.0692 22.7823 60.0692 35.3636C60.0692 43.106 56.5569 50.3204 50.4982 55.0714L50.7616 55.4234C56.9081 50.5844 60.5082 43.194 60.5082 35.3636C60.5961 22.5184 51.025 11.6967 38.3808 10.025Z"
              fill="#050505"
            ></path>
            <path
              d="M12.7411 46.7132C10.8971 43.194 10.019 39.3228 10.019 35.3636C10.019 29.2049 12.2142 23.3102 16.2534 18.7352C20.2925 14.1601 25.7365 11.2568 31.7074 10.4649L31.6196 10.025C25.5609 10.8169 19.9413 13.8082 15.9021 18.4712C11.7752 23.1342 9.49219 29.117 9.49219 35.3636C9.49219 39.4108 10.4581 43.3699 12.302 46.9772C14.0582 50.4084 16.6046 53.4878 19.6778 55.7753L19.9413 55.4234C16.9558 53.1359 14.4972 50.1445 12.7411 46.7132Z"
              fill="#050505"
            ></path>
            <path
              d="M48.3046 47.5924C46.8119 43.3693 44.0899 41.1697 42.5971 40.2019C41.9825 39.762 41.4556 39.4981 40.9288 39.2341C39.6995 38.5303 38.997 38.0904 38.7336 37.2106C38.7336 37.2106 38.7336 37.1226 38.7336 37.0346C38.7336 36.9466 38.7336 36.8587 38.6458 36.7707C38.558 35.8029 38.8214 34.3072 39.3483 31.6678C40.5776 25.949 45.4948 24.1014 47.2509 23.5735C47.4265 23.4855 47.69 23.4855 47.8656 23.3975L48.0412 23.3095V23.1336C47.8656 21.9898 47.6022 21.11 47.3387 20.3182C47.3387 20.2302 47.3387 20.2302 47.2509 20.1422C46.6363 18.7345 45.7582 17.9427 44.3533 17.0629C44.2655 16.9749 44.1777 16.9749 44.0899 16.8869C43.563 16.623 43.0362 16.271 42.4215 15.9191C41.9825 15.6552 41.5434 15.4792 41.1044 15.2153C36.9775 12.8398 37.0653 11.4321 37.0653 11.3441V11.1681L36.9775 11.0801C35.836 10.4643 35.836 9.8484 36.4506 8.35272C36.8897 7.29694 36.8897 6.15318 36.3628 5.44933C36.0994 5.00943 35.6604 4.74548 35.1335 4.74548C34.6067 4.74548 34.1676 5.00943 33.9042 5.44933C33.3774 6.15318 33.3774 7.29694 33.8164 8.35272C34.4311 9.8484 34.4311 10.4643 33.2896 11.0801L33.2017 11.1681V11.3441C33.2017 11.3441 33.2896 12.8398 29.1626 15.2153C28.7236 15.4792 28.2845 15.7431 27.8455 15.9191C27.3187 16.183 26.7918 16.447 26.3528 16.7109C26.265 16.7109 26.0015 16.8869 25.7381 17.1508C24.5088 17.9427 23.7186 18.7345 23.1039 19.9662C23.1039 20.0542 23.0161 20.1422 22.9283 20.3182C22.6649 21.022 22.4014 21.9018 22.2258 22.9576V23.1336L22.4014 23.2216C22.5771 23.3095 22.7527 23.3095 22.9283 23.3975C24.5966 23.8374 29.6895 25.773 30.8309 31.4918C31.4456 34.3072 31.709 35.8029 31.5334 36.6827C31.5334 36.6827 31.5334 36.6827 31.5334 36.7707C31.3578 37.7385 30.6553 38.1784 29.3382 38.8822C28.8992 39.1462 28.2845 39.4981 27.6699 39.85C26.1772 40.8178 23.4551 43.1053 21.9624 47.2404C20.5575 51.8155 20.6453 56.9184 22.4014 62.6372C22.4014 62.9011 22.5771 63.605 26.265 64.1328C28.6358 64.4848 31.7968 64.6607 35.2213 64.6607C38.6458 64.6607 41.7191 64.4848 44.1777 64.1328C48.0412 63.605 48.0412 62.9011 48.0412 62.6372C48.0412 62.6372 48.0412 62.5492 48.0412 62.4612C49.7095 56.7424 49.7973 51.8155 48.3046 47.5924ZM40.6654 39.4981C41.1044 39.762 41.7191 40.114 42.3337 40.4659C43.8264 41.4337 46.4607 43.6332 47.9534 47.6803C49.4461 51.7275 49.3583 56.5665 47.69 62.0213C47.3387 61.7574 46.5485 61.4934 44.9679 61.2295C46.1972 57.2703 46.5485 53.3991 45.846 49.9679C45.2314 46.7126 43.6508 43.8972 41.4556 41.9616C38.6458 39.4981 37.8555 38.6183 37.5921 37.6505C37.9433 37.5625 38.2068 37.5625 38.3824 37.4745C38.6458 38.3543 39.4361 38.7942 40.6654 39.4981ZM25.8259 61.1415C24.5966 57.1823 24.2454 53.3991 24.9479 50.0558C25.5625 46.8885 27.0552 44.1611 29.2504 42.2255C32.1481 39.674 33.0261 38.7063 33.2896 37.6505C33.6408 37.7385 34.0798 37.7385 34.5189 37.7385C34.5189 40.2899 33.4652 42.2255 32.4115 44.2491C31.0944 46.7126 29.6016 49.44 29.6895 53.7511C29.6895 56.3905 30.0407 58.766 30.3919 60.6136C28.8992 60.7016 27.4943 60.8775 26.3528 61.0535C26.1772 61.1415 26.0015 61.1415 25.8259 61.1415ZM33.2896 36.3308C33.2896 36.2428 33.2896 36.0668 33.2896 35.9788C33.2896 35.8909 33.2896 35.8029 33.2896 35.6269C33.2896 34.5711 33.2896 32.9875 32.4993 30.524C31.8846 28.3245 29.7773 25.4211 27.3187 23.7494C27.7577 23.6615 28.2845 23.4855 28.7236 23.3095C29.426 23.8374 30.0407 24.3653 30.6553 25.0692C32.3237 27.0927 33.992 29.9081 34.3432 36.3308C33.992 36.3308 33.6408 36.3308 33.2896 36.3308ZM38.2946 37.0346C38.2068 37.1226 37.9433 37.1226 37.5921 37.2106C37.5921 37.1226 37.5921 36.9466 37.5921 36.7707C37.8555 36.9466 38.119 36.9466 38.2946 37.0346ZM35.2213 37.3865C35.1335 37.3865 34.9579 37.3865 34.8701 37.3865C34.8701 37.2986 34.8701 37.1226 34.8701 37.0346C34.8701 36.9466 34.8701 36.7707 34.8701 36.6827C35.0457 36.6827 35.1335 36.6827 35.3091 36.6827C35.3969 36.6827 35.5725 36.6827 35.6604 36.6827C35.6604 36.7707 35.6604 36.9466 35.6604 37.0346C35.6604 37.1226 35.6604 37.2986 35.6604 37.3865C35.3969 37.3865 35.3091 37.3865 35.2213 37.3865ZM34.4311 36.6827C34.4311 36.7707 34.4311 36.9466 34.4311 37.0346C34.4311 37.1226 34.4311 37.2986 34.4311 37.3865C33.992 37.3865 33.553 37.2986 33.2896 37.2986C33.2896 37.1226 33.2896 36.9466 33.2896 36.7707C33.6408 36.7707 33.992 36.7707 34.4311 36.6827ZM35.9238 37.0346C35.9238 36.9466 35.9238 36.7707 35.9238 36.6827C36.3628 36.6827 36.714 36.7707 37.0653 36.7707C37.0653 36.9466 37.0653 37.1226 37.0653 37.2986C36.714 37.2986 36.3628 37.3865 35.9238 37.3865C35.9238 37.2986 35.9238 37.2106 35.9238 37.0346ZM37.0653 35.9788C37.0653 36.0668 37.0653 36.2428 37.0653 36.3308C37.0653 36.3308 37.0653 36.3308 37.0653 36.4187C36.714 36.4187 36.3628 36.3308 36.0116 36.3308C36.3628 29.9961 38.0312 27.1807 39.6995 25.0692C40.3141 24.3653 40.9288 23.8374 41.6313 23.3095C42.0703 23.4855 42.5093 23.5735 43.0362 23.7494C40.5776 25.4211 38.558 28.3245 37.8555 30.524C37.1531 32.9875 37.0653 34.5711 37.0653 35.6269C37.0653 35.7149 37.0653 35.8909 37.0653 35.9788ZM39.4361 24.8052C37.6799 26.9168 36.0116 29.8201 35.5725 36.2428C35.4847 36.2428 35.3091 36.2428 35.2213 36.2428C35.0457 36.2428 34.9579 36.2428 34.7823 36.2428C34.3432 29.7322 32.6749 26.9168 30.9188 24.8052C30.3919 24.1893 29.7773 23.5735 29.1626 23.1336C30.2163 22.6937 31.1822 22.0778 32.0603 21.3739C33.2017 20.5821 34.2554 18.8225 35.1335 16.9749C36.0116 18.8225 37.0653 20.5821 38.2068 21.3739C39.1726 22.0778 40.0507 22.6937 41.1044 23.1336C40.5776 23.5735 39.9629 24.1014 39.4361 24.8052ZM32.8505 37.2106C32.4993 37.1226 32.3237 37.1226 32.1481 37.0346C32.2359 36.9466 32.4993 36.9466 32.8505 36.8587C32.8505 37.0346 32.8505 37.1226 32.8505 37.2106ZM30.0407 53.839C29.9529 49.6159 31.3578 47.0645 32.6749 44.513C33.8164 42.4015 34.8701 40.4659 34.8701 37.8264C34.9579 37.8264 35.1335 37.8264 35.2213 37.8264C35.3091 37.8264 35.3969 37.8264 35.4847 37.8264C35.4847 40.4659 36.5384 42.4015 37.6799 44.513C38.997 47.0645 40.402 49.6159 40.3141 53.839C40.3141 56.4785 39.9629 58.854 39.6117 60.7016C38.2068 60.6136 36.714 60.6136 35.2213 60.6136C33.6408 60.6136 32.1481 60.6136 30.7431 60.7016C30.3919 58.854 30.0407 56.4785 30.0407 53.839ZM40.7532 53.839C40.841 49.528 39.3483 46.8005 38.0312 44.3371C36.9775 42.3135 35.9238 40.3779 35.9238 37.8264C36.3628 37.8264 36.8019 37.7385 37.1531 37.7385C37.4165 38.7942 38.2946 39.6741 41.1922 42.3135C43.3874 44.2491 44.8801 46.9765 45.4948 50.1438C46.1972 53.4871 45.846 57.3583 44.6167 61.2295C44.4411 61.2295 44.3533 61.2295 44.1777 61.1415C42.9484 60.9655 41.5434 60.7896 40.0507 60.7016C40.402 58.854 40.7532 56.4785 40.7532 53.839ZM43.9142 24.6293C42.0703 25.773 39.6995 27.8846 38.9092 31.6678C38.3824 34.1312 38.119 35.6269 38.2068 36.5947C38.0312 36.5067 37.8555 36.5067 37.5921 36.4187H37.5043V36.3308C37.5043 36.2428 37.5043 36.0668 37.5043 35.9788C37.5043 35.8909 37.5043 35.8029 37.5043 35.6269C37.5043 34.5711 37.5043 32.9875 38.2946 30.612C38.997 28.3245 41.1044 25.4211 43.6508 23.8374C44.0021 23.9254 44.4411 23.9254 44.8801 23.9254C45.0557 23.9254 45.2314 23.9254 45.3192 23.9254C44.8801 24.1014 44.4411 24.3653 43.9142 24.6293ZM47.6022 23.1336C47.5143 23.1336 47.3387 23.2216 47.0753 23.3095C46.0216 23.4855 45.0557 23.5735 44.2655 23.4855C44.5289 23.3095 44.7923 23.2216 45.1435 23.1336C46.285 22.6937 46.9875 22.1658 47.3387 21.5499C47.3387 21.9898 47.5143 22.5177 47.6022 23.1336ZM46.8119 20.4061C46.8997 20.4941 46.8997 20.5821 46.8997 20.5821C46.9875 20.7581 46.9875 20.934 46.8997 21.11C46.8119 21.5499 46.3729 22.0778 44.8801 22.6937C44.4411 22.8696 43.9142 23.1336 43.4752 23.3975C42.9484 23.3095 42.5093 23.2216 41.9825 23.0456C42.5093 22.6937 42.9484 22.4297 43.3874 22.1658C44.0021 21.7259 44.6167 21.4619 45.0557 21.11C45.6704 20.5821 46.0216 19.9662 45.9338 19.2624C45.9338 19.1744 45.9338 19.0864 45.846 18.9985C46.285 19.3504 46.5485 19.7903 46.8119 20.4061ZM40.9288 15.7431C41.3678 16.0071 41.8069 16.271 42.2459 16.447C42.7727 16.7109 43.2996 16.9749 43.7386 17.2388C43.7386 17.2388 43.8264 17.3268 44.0021 17.3268L44.0899 17.4148C44.6167 17.7667 45.407 18.3826 45.5826 19.1744C45.6704 19.6143 45.407 20.1422 44.8801 20.5821C44.5289 20.934 43.9142 21.286 43.2996 21.6379C42.7728 21.9898 42.2459 22.2538 41.6313 22.6937C40.5776 22.2538 39.6117 21.5499 38.558 20.8461C37.4165 20.0542 36.3628 18.1186 35.4847 16.271C36.1872 14.7753 36.714 13.2797 36.9775 12.2239C37.3287 13.1037 38.2946 14.3354 40.9288 15.7431ZM34.6945 10.3763C34.7823 9.8484 34.6067 9.23253 34.2554 8.4407C33.9042 7.56088 33.9042 6.50511 34.3432 5.88924C34.5189 5.6253 34.7823 5.36135 35.2213 5.36135C35.6604 5.36135 35.9238 5.6253 36.0994 5.88924C36.5384 6.50511 36.5384 7.4729 36.1872 8.4407C35.5725 10.0244 35.4847 10.9042 36.714 11.608C36.5384 12.4878 36.0116 14.1595 35.2213 15.8311C34.4311 14.0715 33.9042 12.3999 33.7286 11.608C34.3432 11.2561 34.6067 10.9042 34.6945 10.3763ZM28.1089 16.535C28.548 16.271 28.987 16.0951 29.426 15.8311C32.0603 14.3354 33.0261 13.1917 33.4652 12.4878C33.7286 13.5436 34.2554 15.0393 34.9579 16.535C34.0798 18.4706 32.9383 20.3182 31.8846 21.11C30.9188 21.8139 29.9529 22.4297 28.8114 22.9576C28.1967 22.5177 27.6699 22.1658 27.143 21.9018C26.5284 21.5499 25.9137 21.198 25.5625 20.8461C25.0357 20.4061 24.7722 19.8783 24.86 19.4384C24.9479 18.7345 25.5625 18.2066 26.0894 17.8547C26.704 17.3268 27.3187 16.9749 28.1089 16.535ZM24.5088 18.9985C24.5088 19.0864 24.421 19.1744 24.421 19.2624C24.3332 19.8783 24.5966 20.4941 25.2991 21.11C25.7381 21.4619 26.265 21.8139 26.9674 22.1658C27.4065 22.4297 27.8455 22.6937 28.3723 23.0456C27.9333 23.2216 27.4065 23.3095 26.8796 23.3975C26.4406 23.1336 25.9137 22.8696 25.4747 22.6937C23.982 22.1658 23.5429 21.5499 23.4551 21.11C23.3673 20.934 23.3673 20.7581 23.4551 20.6701C23.4551 20.5821 23.5429 20.4941 23.5429 20.4061C23.8064 19.8783 24.1576 19.3504 24.5088 18.9985ZM22.8405 23.1336C22.9283 22.5177 23.0161 21.9898 23.1917 21.5499C23.4551 22.1658 24.2454 22.6937 25.3869 23.1336C25.6503 23.2216 25.9137 23.3975 26.265 23.4855C25.3869 23.5735 24.421 23.4855 23.3673 23.2216C23.1039 23.1336 22.9283 23.1336 22.8405 23.1336ZM31.4456 31.6678C30.6553 27.9725 28.2845 25.773 26.4406 24.6293C26.0015 24.3653 25.4747 24.1014 25.0357 23.9254C25.2113 23.9254 25.3869 23.9254 25.5625 23.9254C26.0015 23.9254 26.3528 23.9254 26.7918 23.8374C29.3382 25.4211 31.4456 28.4124 32.1481 30.612C32.8505 33.0755 32.8505 34.5711 32.9383 35.6269C32.9383 35.7149 32.9383 35.8029 32.9383 35.8909C32.9383 35.9788 32.9383 36.1548 32.9383 36.2428V36.3308C32.6749 36.4187 32.4115 36.4187 32.2359 36.5067C32.2359 35.5389 31.9724 34.0432 31.4456 31.6678ZM22.4893 47.7683C23.982 43.7212 26.6162 41.5217 28.1089 40.5539C28.7236 40.114 29.2504 39.85 29.7773 39.5861C31.0944 38.8822 31.7968 38.3543 32.0603 37.4745C32.2359 37.5625 32.4993 37.6505 32.8505 37.6505C32.5871 38.6183 31.7968 39.4101 28.987 41.9616C26.7918 43.9851 25.2113 46.7126 24.5966 49.9679C23.8942 53.3991 24.2454 57.2703 25.4747 61.2295C23.8942 61.4934 23.1039 61.8453 22.8405 62.1093C21.0843 56.6544 20.9965 51.8155 22.4893 47.7683ZM22.8405 62.6372C22.8405 62.4612 23.5429 61.9333 26.3528 61.5814C27.5821 61.4054 28.8992 61.3174 30.3919 61.1415C30.7431 62.6372 31.0066 63.6929 31.1822 64.1328C29.3382 64.0449 27.6699 63.8689 26.265 63.6929C23.6307 63.253 22.8405 62.8131 22.8405 62.6372ZM31.709 64.1328C31.6212 63.7809 31.1822 62.6372 30.8309 61.0535C32.2359 60.9655 33.6408 60.9655 35.2213 60.9655C36.714 60.9655 38.119 60.9655 39.5239 61.0535C39.1726 62.6372 38.8214 63.7809 38.6458 64.1328C37.5043 64.2208 36.3628 64.2208 35.2213 64.2208C33.992 64.2208 32.8505 64.2208 31.709 64.1328ZM44.0899 63.6929C42.6849 63.8689 41.0166 64.0449 39.0848 64.1328C39.2605 63.605 39.6117 62.5492 39.8751 61.1415C41.3678 61.2295 42.8606 61.4054 44.0021 61.5814C46.3729 61.9333 47.2509 62.3732 47.4265 62.5492H47.5143C47.5143 62.5492 47.5143 62.5492 47.5143 62.6372C47.6022 62.8131 46.8997 63.253 44.0899 63.6929Z"
              fill="#050505"
            ></path>
          </svg>
          <div className="video-main-text">
          <h1>
            luxurious <span>and</span>
          </h1>
          <h1>contemporary appeal</h1>
          <h1>
            <span>for</span> every woman
          </h1>
          </div>
          <Link
          to='all-products'
            className="main-button-black"
          >
            Discover now
          </Link>
        </div>
      </div>
      <div className="video-wrapper">
        <video
          autoPlay
          muted
          loop
          preload="metadata"
          poster="https://rino-pelle.com/cdn/shop/files/preview_images/f6ac141fd99142eb93d4543d9efd857c.thumbnail.0000000000_small.jpg?v=1688739086"
        >
          <source
            src="https://cdn.shopify.com/videos/c/vp/f6ac141fd99142eb93d4543d9efd857c/f6ac141fd99142eb93d4543d9efd857c.HD-1080p-7.2Mbps-16056297.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
