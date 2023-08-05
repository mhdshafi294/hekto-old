"use client";

import Container from "../Container";

import { BsCart2 } from "react-icons/bs";
import DropDownMenu from "../DropDownMenu";

interface UpperNavbarProps {
  email?: string;
  phone?: string;
}

const UpperNavbar = () => {
  return (
    <div className="w-full h-11 bg-violet-600">
      <Container>
        <div className="flex justify-between text-zinc-100 h-full">
          <div className="flex justify-start items-center gap-4 text-zinc-100 h-full">
            <div className="flex justify-start items-center gap-2.5 h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.6666 2.66663H3.33325C2.80282 2.66663 2.29411 2.87734 1.91904 3.25241C1.54397 3.62749 1.33325 4.13619 1.33325 4.66663V11.3333C1.33325 11.8637 1.54397 12.3724 1.91904 12.7475C2.29411 13.1226 2.80282 13.3333 3.33325 13.3333H12.6666C13.197 13.3333 13.7057 13.1226 14.0808 12.7475C14.4559 12.3724 14.6666 11.8637 14.6666 11.3333V4.66663C14.6666 4.13619 14.4559 3.62749 14.0808 3.25241C13.7057 2.87734 13.197 2.66663 12.6666 2.66663ZM3.33325 3.99996H12.6666C12.8434 3.99996 13.013 4.0702 13.138 4.19522C13.263 4.32025 13.3333 4.48981 13.3333 4.66663L7.99992 7.91996L2.66659 4.66663C2.66659 4.48981 2.73682 4.32025 2.86185 4.19522C2.98687 4.0702 3.15644 3.99996 3.33325 3.99996ZM13.3333 11.3333C13.3333 11.5101 13.263 11.6797 13.138 11.8047C13.013 11.9297 12.8434 12 12.6666 12H3.33325C3.15644 12 2.98687 11.9297 2.86185 11.8047C2.73682 11.6797 2.66659 11.5101 2.66659 11.3333V6.18663L7.65325 9.23329C7.7546 9.2918 7.86956 9.32261 7.98659 9.32261C8.10361 9.32261 8.21857 9.2918 8.31992 9.23329L13.3333 6.18663V11.3333Z"
                  fill="white"
                />
              </svg>
              <p>{"mhhasanul@gmail.com"}</p>
            </div>
            <div className="flex justify-start items-center gap-2.5 h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.0441 14.666H11.0627C11.4147 14.666 11.7474 14.5274 11.9994 14.2754L13.8074 12.4674C13.8694 12.4055 13.9185 12.332 13.9521 12.2512C13.9856 12.1703 14.0029 12.0836 14.0029 11.996C14.0029 11.9085 13.9856 11.8218 13.9521 11.7409C13.9185 11.66 13.8694 11.5866 13.8074 11.5247L11.1407 8.85804C11.0789 8.79608 11.0054 8.74692 10.9245 8.71338C10.8436 8.67984 10.757 8.66257 10.6694 8.66257C10.5818 8.66257 10.4951 8.67984 10.4143 8.71338C10.3334 8.74692 10.2599 8.79608 10.1981 8.85804L9.1354 9.92071C8.64273 9.77404 7.7234 9.44071 7.14073 8.85804C6.55806 8.27537 6.22473 7.35604 6.07806 6.86337L7.14073 5.80071C7.20269 5.73885 7.25185 5.66538 7.28539 5.5845C7.31893 5.50363 7.3362 5.41693 7.3362 5.32937C7.3362 5.24182 7.31893 5.15512 7.28539 5.07425C7.25185 4.99337 7.20269 4.9199 7.14073 4.85804L4.47406 2.19137C4.34661 2.07108 4.17799 2.00406 4.00273 2.00406C3.82747 2.00406 3.65885 2.07108 3.5314 2.19137L1.72406 3.99937C1.47073 4.25271 1.32806 4.60071 1.3334 4.95604C1.34873 5.90537 1.60006 9.20271 4.19873 11.8014C6.7974 14.4 10.0947 14.6507 11.0441 14.666ZM4.0034 3.60537L5.7274 5.32937L4.8654 6.19137C4.78695 6.2696 4.72933 6.36621 4.69777 6.47241C4.66622 6.5786 4.66173 6.691 4.68473 6.79937C4.70073 6.87604 5.09206 8.69404 6.19873 9.80071C7.3054 10.9074 9.1234 11.2987 9.20006 11.3147C9.30843 11.3378 9.42087 11.3334 9.52708 11.3018C9.6333 11.2703 9.72991 11.2126 9.80806 11.134L10.6701 10.272L12.3941 11.996L11.0567 13.3327C10.2247 13.3187 7.37806 13.0954 5.1414 10.858C2.8974 8.61404 2.68006 5.75737 2.66673 4.94204L4.0034 3.60537ZM13.3327 7.33271H14.6661C14.6661 3.91271 12.0841 1.33337 8.6594 1.33337V2.66671C11.3674 2.66671 13.3327 4.62871 13.3327 7.33271Z"
                  fill="white"
                />
                <path
                  d="M8.66602 5.33333C10.068 5.33333 10.666 5.93133 10.666 7.33333H11.9993C11.9993 5.18333 10.816 4 8.66602 4V5.33333Z"
                  fill="white"
                />
              </svg>
              <p>{"(12345)67890"}</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 h-full">
            <DropDownMenu onClick={() => {}} label="English" items={[]} />
            <DropDownMenu onClick={() => {}} label="USD" items={[]} />
            <div
              onClick={() => {}}
              className="
                transition
                flex
                items-center
                justify-center
              "
            >
              <p className="text-zinc-100 text-base">Login</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 2C8.49445 2 8.9778 2.14662 9.38893 2.42133C9.80005 2.69603 10.1205 3.08648 10.3097 3.54329C10.4989 4.00011 10.5484 4.50277 10.452 4.98773C10.3555 5.47268 10.1174 5.91814 9.76777 6.26777C9.41814 6.6174 8.97268 6.8555 8.48773 6.95196C8.00277 7.04843 7.50011 6.99892 7.04329 6.8097C6.58648 6.62048 6.19603 6.30005 5.92133 5.88893C5.64662 5.4778 5.5 4.99445 5.5 4.5C5.5 3.83696 5.76339 3.20107 6.23223 2.73223C6.70108 2.26339 7.33696 2 8 2ZM8 1C7.30777 1 6.63108 1.20527 6.05551 1.58986C5.47993 1.97444 5.03133 2.52107 4.76642 3.16061C4.50152 3.80015 4.4322 4.50388 4.56725 5.18282C4.7023 5.86175 5.03564 6.48539 5.52513 6.97487C6.01461 7.46436 6.63825 7.7977 7.31719 7.93275C7.99612 8.0678 8.69985 7.99848 9.33939 7.73358C9.97893 7.46867 10.5256 7.02007 10.9101 6.4445C11.2947 5.86892 11.5 5.19223 11.5 4.5C11.5 3.57174 11.1313 2.6815 10.4749 2.02513C9.8185 1.36875 8.92826 1 8 1Z"
                  fill="white"
                />
                <path
                  d="M13 15H12V12.5C12 12.1717 11.9353 11.8466 11.8097 11.5433C11.6841 11.24 11.4999 10.9644 11.2678 10.7322C11.0356 10.5001 10.76 10.3159 10.4567 10.1903C10.1534 10.0647 9.8283 10 9.5 10H6.5C5.83696 10 5.20107 10.2634 4.73223 10.7322C4.26339 11.2011 4 11.837 4 12.5V15H3V12.5C3 11.5717 3.36875 10.6815 4.02513 10.0251C4.6815 9.36875 5.57174 9 6.5 9H9.5C10.4283 9 11.3185 9.36875 11.9749 10.0251C12.6313 10.6815 13 11.5717 13 12.5V15Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              onClick={() => {}}
              className="
                transition
                flex
                items-center
                justify-center
              "
            >
              <p className="text-zinc-100 text-base">Wishlist</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.4401 3.07329C12.7323 2.3653 11.7939 1.93484 10.7956 1.86021C9.79726 1.78558 8.8053 2.07173 8.0001 2.66662C7.15187 2.03572 6.0961 1.74963 5.04538 1.86598C3.99467 1.98233 3.02706 2.49248 2.33742 3.29368C1.64777 4.09488 1.28732 5.12764 1.32864 6.18397C1.36996 7.2403 1.80998 8.24174 2.5601 8.98662L7.52677 13.9533C7.58874 14.0158 7.66248 14.0654 7.74372 14.0992C7.82496 14.1331 7.91209 14.1505 8.0001 14.1505C8.08811 14.1505 8.17525 14.1331 8.25649 14.0992C8.33773 14.0654 8.41146 14.0158 8.47344 13.9533L13.4401 8.98662C13.8285 8.59844 14.1367 8.13752 14.3469 7.6302C14.5571 7.12288 14.6654 6.57911 14.6654 6.02996C14.6654 5.4808 14.5571 4.93703 14.3469 4.42971C14.1367 3.92239 13.8285 3.46147 13.4401 3.07329ZM12.5001 8.04662L8.0001 12.54L3.5001 8.04662C3.10355 7.64842 2.83342 7.14199 2.72359 6.59085C2.61376 6.03971 2.66912 5.46841 2.88274 4.94862C3.09635 4.42883 3.4587 3.98369 3.92433 3.66904C4.38996 3.35439 4.93814 3.18425 5.5001 3.17996C6.25084 3.1818 6.97017 3.48151 7.5001 4.01329C7.56208 4.07578 7.63581 4.12537 7.71705 4.15922C7.79829 4.19306 7.88543 4.21049 7.97344 4.21049C8.06144 4.21049 8.14858 4.19306 8.22982 4.15922C8.31106 4.12537 8.38479 4.07578 8.44677 4.01329C8.99232 3.54055 9.6971 3.29272 10.4185 3.31997C11.1398 3.34723 11.8239 3.64752 12.3322 4.16008C12.8405 4.67264 13.1352 5.35918 13.1564 6.08075C13.1777 6.80232 12.924 7.50502 12.4468 8.04662H12.5001Z"
                  fill="white"
                />
              </svg>
            </div>
            <BsCart2 className="w-6 h-6 pl-[2.50px] pr-1 pt-[3.50px] pb-[3px] justify-center items-center inline-flex" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpperNavbar;
