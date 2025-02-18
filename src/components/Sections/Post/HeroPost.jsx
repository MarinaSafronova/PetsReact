import { Link } from "react-router";
import HeroImg from "../../../assets/post/photo.png";
import Person from "../../../assets/post/image.png";
function HeroPost() {
    return (
        <div className="w-full relative pt-[100px] pb-10 lg:pb-24 lg:pt-[140px]">
            <div className="w-full px-5 mx-auto max-w-7xl">
                <div className="flex items-center justify-start gap-1 font-proxima text-s text-brown opacity-80">
                    <Link to="/">Home</Link>
                    {"/"}
                    <Link to="/post">ESA guide</Link>
                    {"/"}
                    <span className="truncate max-w-[100px]">
                        How to Qualify...
                    </span>
                </div>
                <div className="flex flex-col-reverse items-center justify-between max-w-6xl gap-6 mx-auto mt-4 lg:mt-8 lg:flex-row">
                    <div className="lg:max-w-[435px] items-start flex flex-col gap-5 lg:gap-7 relative z-10">
                        <div className="flex items-center justify-start gap-1">
                            <div className="flex items-center justify-start gap-1">
                                <div className="px-2.5 flex min-h-[26px] opacity-50  items-center  py-px whitespace-nowrap text-13 font-Cerebri-Regular rounded bg-light-purple-o text-brown">
                                    ESA Basic
                                </div>
                                <div className="px-2.5 flex min-h-[26px] opacity-50  items-center  py-px whitespace-nowrap text-13 font-Cerebri-Regular rounded bg-light-purple-o text-brown">
                                    Community
                                </div>
                                <div className="px-2.5 flex min-h-[26px] opacity-50  items-center  py-px whitespace-nowrap text-13 font-Cerebri-Regular rounded bg-light-purple-o text-brown">
                                    Health
                                </div>
                            </div>
                        </div>
                        <h1 className="font-sans font-bold text-35 leading-[45px] lg:text-5xl lg:leading-[55px] text-primary">
                            Can My Pet Be an Emotional Support Animal?
                        </h1>
                        <div className="relative flex items-center justify-start gap-2 font-sans font-medium text-brown">
                            <img
                                src={Person}
                                alt=""
                                className="w-[37px] h-[37px]  md:h-[46px] md:w-[46px] rounded-full"
                            />
                            <p className="underline underline-offset-8 decoration-secondary decoration-2">
                                Mariale Olsen
                            </p>
                        </div>
                        <div className="flex items-center justify-start font-Cerebri-Regular text-s gap-7 text-brown opacity-80">
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="22"
                                    viewBox="0 0 16 22"
                                    fill="none"
                                >
                                    <path
                                        d="M1.55556 16.5556H13.7778M1 19.8889V17.6667C1 15.8986 1.70238 14.2029 2.95262 12.9526C4.20286 11.7024 5.89856 11 7.66667 11C9.43478 11 11.1305 11.7024 12.3807 12.9526C13.631 14.2029 14.3333 15.8986 14.3333 17.6667V19.8889C14.3333 20.1836 14.2163 20.4662 14.0079 20.6746C13.7995 20.8829 13.5169 21 13.2222 21H2.11111C1.81643 21 1.53381 20.8829 1.32544 20.6746C1.11706 20.4662 1 20.1836 1 19.8889Z"
                                        stroke="#999999"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1 2.11111V4.33333C1 6.10144 1.70238 7.79714 2.95262 9.04738C4.20286 10.2976 5.89856 11 7.66667 11C9.43478 11 11.1305 10.2976 12.3807 9.04738C13.631 7.79714 14.3333 6.10144 14.3333 4.33333V2.11111C14.3333 1.81643 14.2163 1.53381 14.0079 1.32544C13.7995 1.11706 13.5169 1 13.2222 1H2.11111C1.81643 1 1.53381 1.11706 1.32544 1.32544C1.11706 1.53381 1 1.81643 1 2.11111Z"
                                        stroke="#999999"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>5 min read</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="18"
                                    viewBox="0 0 25 18"
                                    fill="none"
                                >
                                    <g opacity="0.4">
                                        <path
                                            d="M15.9508 9.0501C15.9508 9.96509 15.5873 10.8426 14.9403 11.4896C14.2933 12.1366 13.4158 12.5001 12.5008 12.5001C11.5858 12.5001 10.7083 12.1366 10.0613 11.4896C9.41426 10.8426 9.05078 9.96509 9.05078 9.0501C9.05078 8.1351 9.41426 7.25758 10.0613 6.61058C10.7083 5.96358 11.5858 5.6001 12.5008 5.6001C13.4158 5.6001 14.2933 5.96358 14.9403 6.61058C15.5873 7.25758 15.9508 8.1351 15.9508 9.0501Z"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M1 9.05C2.84 4.33845 7.1364 1 12.5 1C17.8636 1 22.16 4.33845 24 9.05C22.16 13.7615 17.8636 17.1 12.5 17.1C7.1364 17.1 2.84 13.7615 1 9.05Z"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </svg>
                                <span>168</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="22"
                                    viewBox="0 0 19 22"
                                    fill="none"
                                >
                                    <path
                                        opacity="0.4"
                                        d="M11.356 21C23.578 18 16.734 6 8.42297 1C7.44497 4.5 5.97797 5.5 3.04497 9C-0.839029 13.634 1.08997 19 6.46697 21C5.65197 20 3.54997 17.9 4.99997 15C5.49997 14 6.49997 13 5.99997 11C6.97797 11.5 8.99997 12 9.49997 14.5C10.315 13.5 11.16 11.4 10.378 9C16.5 13.5 14 18 11.356 21Z"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>19.5k</span>
                            </div>
                            <a href="#" className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="23"
                                    height="24"
                                    viewBox="0 0 23 24"
                                    fill="none"
                                >
                                    <g opacity="0.4">
                                        <path
                                            d="M9.82031 13.6806C10.6914 14.5506 11.8718 15.04 13.1029 15.0416C13.5096 15.0363 13.9145 14.9845 14.3095 14.8872C15.0927 14.6686 15.8069 14.2532 16.3843 13.6806L17.4842 12.5819L20.7509 9.30388C21.3635 8.64801 21.7727 7.82843 21.9286 6.94459C22.0846 6.06074 21.9807 5.15063 21.6296 4.32468C21.2784 3.49873 20.6951 2.79243 19.9504 2.29151C19.2057 1.79058 18.3316 1.51654 17.4343 1.50265C16.2313 1.48182 15.0671 1.92767 14.1857 2.74667L10.919 6.02584"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12.0038 18.0576L8.72126 21.3356C8.05973 21.9194 7.24568 22.3028 6.37428 22.441C5.50288 22.5792 4.61015 22.4664 3.80047 22.1159C2.99079 21.7654 2.29762 21.1917 1.80201 20.4617C1.3064 19.7318 1.02883 18.8759 1.00176 17.994C0.969301 16.8124 1.38769 15.6627 2.172 14.7784L5.45457 11.5003L6.55444 10.4016C7.13146 9.8302 7.84488 9.41567 8.62705 9.19732C9.41548 8.98692 10.2454 8.98754 11.0335 9.19912C11.8216 9.41069 12.5403 9.82578 13.1173 10.4027"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </svg>
                                <span>Source</span>
                            </a>
                        </div>
                        <div className="flex items-center justify-center gap-1 px-2 py-2 rounded-md bg-light-purple-o">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.5 0C2.91023 0 0 2.91023 0 6.5C0 10.0898 2.91023 13 6.5 13C10.0898 13 13 10.0898 13 6.5C13 2.91023 10.0898 0 6.5 0ZM6.20455 2.95455C6.04783 2.95455 5.89753 3.0168 5.78671 3.12762C5.67589 3.23844 5.61364 3.38874 5.61364 3.54545C5.61364 3.70217 5.67589 3.85247 5.78671 3.96329C5.89753 4.07411 6.04783 4.13636 6.20455 4.13636H6.5C6.65672 4.13636 6.80702 4.07411 6.91784 3.96329C7.02865 3.85247 7.09091 3.70217 7.09091 3.54545C7.09091 3.38874 7.02865 3.23844 6.91784 3.12762C6.80702 3.0168 6.65672 2.95455 6.5 2.95455H6.20455ZM5.31818 5.31818C5.16146 5.31818 5.01116 5.38044 4.90035 5.49125C4.78953 5.60207 4.72727 5.75237 4.72727 5.90909C4.72727 6.06581 4.78953 6.21611 4.90035 6.32693C5.01116 6.43774 5.16146 6.5 5.31818 6.5H5.90909V8.27273H5.31818C5.16146 8.27273 5.01116 8.33498 4.90035 8.4458C4.78953 8.55662 4.72727 8.70692 4.72727 8.86364C4.72727 9.02036 4.78953 9.17066 4.90035 9.28147C5.01116 9.39229 5.16146 9.45455 5.31818 9.45455H7.68182C7.83854 9.45455 7.98884 9.39229 8.09965 9.28147C8.21047 9.17066 8.27273 9.02036 8.27273 8.86364C8.27273 8.70692 8.21047 8.55662 8.09965 8.4458C7.98884 8.33498 7.83854 8.27273 7.68182 8.27273H7.09091V5.90909C7.09091 5.75237 7.02865 5.60207 6.91784 5.49125C6.80702 5.38044 6.65672 5.31818 6.5 5.31818H5.31818Z"
                                    fill="#5D6FFB"
                                />
                            </svg>
                            <span className="font-normal font-satoshi text-13 text-purple">Content Disclaimer</span>
                        </div>
                    </div>
                    <div>
                        <img
                            src={HeroImg}
                            alt=""
                            className="max-w-[615px] w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroPost;
