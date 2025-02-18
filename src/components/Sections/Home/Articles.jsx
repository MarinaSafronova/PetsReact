import TitleBefore from "../../../assets/trust-before.svg";
import TitleAfter from "../../../assets/trust-after.svg";
import BlogImg from "../../../assets/blog1.png";
import BlogImg2 from "../../../assets/blog2.png";
import BlogImg3 from "../../../assets/blog3.png";
import BlogCard from "../../BlogCard/BlogCard";
import SocialImg from "../../../assets/social-blog.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const blogPosts = [
    {
        imageSrc: BlogImg,
        date: "January 21, 2025",
        title: "ESA Laws in California",
        description:
            "Getting an emotional support animal in California is available to anyone with a mental or emotional disability.",
        tags: ["State Law", "Community", "Health"],
    },
    {
        imageSrc: BlogImg2,
        date: "January 22, 2025",
        title: "ESA Laws in Arkansas",
        description:
            "In February 2023, the Arkansas House of Representatives passed HB1420, which affects both sellers of emotional support animals as well as ESA owners.",
        tags: ["State Law", "Community", "Health"],
    },
    {
        imageSrc: BlogImg3,
        date: "January 22, 2025",
        title: "ESA Laws in Arizona",
        description:
            "Emotional support animals (ESAs) — and pets of all kinds — are beloved in the state of Arizona, and unlike service animals, they aren't limited to just dogs.",
        tags: ["State Law", "Community", "Health"],
    },
];
function Articles() {
    return (
        <div className="pt-10 lg:pt-20 pb-14">
            <div className="w-full px-5 mx-auto max-w-7xl">
               
                <div className="relative flex justify-center w-full gap-12 lg:items-center">
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleBefore}
                            className="max-w-[140px] lg:max-w-full absolute left-0 lg:left-[inherit] lg:relative"
                        />
                    </div>
                    <span className="text-nowrap font-bold text-3xl leading-[42px] top-[50px] lg:top-0  relative  lg:text-4xl font-sans text-center text-primary ">
                    Latest Articles
                    </span>
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleAfter}
                            className="max-w-[140px] lg:max-w-full absolute right-0 lg:right-[inherit] lg:relative"
                        />
                    </div>
                </div>
                <div className="mt-[100px] lg:mt-20 relative">
                    <div className="items-stretch justify-between hidden gap-10 lg:flex">
                        {blogPosts.map((post, index) => (
                            <div
                                key={index}
                                className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                            >
                                <BlogCard {...post} />
                            </div>
                        ))}
                    </div>
                    <div className="relative block pb-20 lg:hidden">
                        <div className="absolute bottom-0 flex items-center justify-center gap-4 mt-10 left-[50%] translate-x-[-50%]">
                            <button className="arrow-left max-w-[42px] h-[42px] w-full lg:max-w-[66px] lg:h-[66px] rounded-full z-10 transition-all hover:shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="66"
                                    height="66"
                                    viewBox="0 0 66 66"
                                    fill="none"
                                    className=" max-w-[42px] h-[42px] w-full  lg:max-w-[66px] lg:h-[66px] "
                                >
                                    <circle
                                        cx="33"
                                        cy="33"
                                        r="33"
                                        fill="#FFC24F"
                                    />
                                    <path
                                        d="M37 46L25 33.5652L37 20"
                                        stroke="#234683"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                            <button className="arrow-right max-w-[42px] h-[42px] w-full  lg:max-w-[66px] lg:h-[66px] rounded-full z-10 transition-all hover:shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="66"
                                    height="66"
                                    viewBox="0 0 66 66"
                                    fill="none"
                                    className=" max-w-[42px] h-[42px] w-full  lg:max-w-[66px] lg:h-[66px] "
                                >
                                    <circle
                                        cx="33"
                                        cy="33"
                                        r="33"
                                        transform="rotate(-180 33 33)"
                                        fill="#FFC24F"
                                    />
                                    <path
                                        d="M27 20L39 32.4348L27 46"
                                        stroke="#234683"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <Swiper
                            slidesPerView={1}
                            modules={[Navigation, Autoplay]}
                            loop={true}
                            autoplay={{ delay: 5000 }}
                            className="mySwiper"
                            navigation={{
                                nextEl: ".arrow-right",
                                prevEl: ".arrow-left",
                            }}
                        >
                            {blogPosts.map((post, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex items-center justify-center">
                                        <BlogCard {...post} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="p-5 rounded-[15px] bg-dark-blue lg:pl-14 mt-20 relative">
                    <div className="flex flex-col items-center justify-between gap-4 lg:gap-20 lg:flex-row">
                        <div className="relative z-10">
                            <span className="font-sans text-lg font-semibold text-light-green">
                                Social Community
                            </span>
                            <h2 className="font-sans text-m lg:text-4xl font-bold text-primary max-w-[458px] lg:leading-[50px]">
                                Learn and share information in our{" "}
                                <span className="text-purple">
                                    TikTok and Instagram
                                </span>
                            </h2>
                            <div className="flex items-center justify-start gap-4 mt-8">
                                <p className="font-sans text-sm font-medium text-primary">
                                    #HepfulPetsFamily
                                </p>
                                <div className="flex items-center justify-start gap-2">
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21"
                                            height="21"
                                            viewBox="0 0 21 21"
                                            className="transition-all fill-primary hover:fill-accent"
                                            fill="none"
                                        >
                                            <path
                                                d="M20.0993 6.3976C20.0885 5.58571 19.9365 4.7819 19.6501 4.02211C19.4018 3.38124 19.0225 2.79921 18.5365 2.31321C18.0505 1.82721 17.4685 1.44794 16.8276 1.19962C16.0776 0.91807 15.2853 0.765833 14.4843 0.749388C13.4531 0.703293 13.1261 0.69043 10.5084 0.69043C7.89061 0.69043 7.55509 0.69043 6.53136 0.749388C5.73077 0.765954 4.93878 0.918189 4.1891 1.19962C3.54813 1.44776 2.96601 1.82698 2.47999 2.313C1.99397 2.79902 1.61476 3.38114 1.36661 4.02211C1.0845 4.77156 0.932592 5.56372 0.917452 6.36437C0.871357 7.39667 0.857422 7.72362 0.857422 10.3414C0.857422 12.9591 0.857422 13.2936 0.917452 14.3184C0.933532 15.1202 1.08468 15.9113 1.36661 16.6628C1.61517 17.3036 1.99467 17.8854 2.48085 18.3713C2.96703 18.8571 3.54921 19.2361 4.19018 19.4842C4.9378 19.7771 5.72992 19.9402 6.53243 19.9666C7.56474 20.0127 7.89169 20.0266 10.5094 20.0266C13.1272 20.0266 13.4627 20.0266 14.4864 19.9666C15.2874 19.9508 16.0798 19.7989 16.8298 19.5174C17.4705 19.2688 18.0524 18.8894 18.5383 18.4035C19.0243 17.9175 19.4037 17.3356 19.6523 16.6949C19.9342 15.9446 20.0853 15.1534 20.1014 14.3505C20.1475 13.3193 20.1614 12.9924 20.1614 10.3735C20.1593 7.75578 20.1593 7.42347 20.0993 6.3976ZM10.5019 15.2917C7.76412 15.2917 5.54622 13.0738 5.54622 10.336C5.54622 7.5982 7.76412 5.3803 10.5019 5.3803C11.8163 5.3803 13.0768 5.90242 14.0062 6.83179C14.9355 7.76117 15.4576 9.02168 15.4576 10.336C15.4576 11.6504 14.9355 12.9109 14.0062 13.8402C13.0768 14.7696 11.8163 15.2917 10.5019 15.2917ZM15.6549 6.35257C15.5031 6.35271 15.3528 6.32292 15.2125 6.2649C15.0722 6.20687 14.9448 6.12176 14.8375 6.01443C14.7301 5.90709 14.645 5.77965 14.587 5.63938C14.529 5.49911 14.4992 5.34878 14.4993 5.19699C14.4993 5.04531 14.5292 4.89511 14.5872 4.75497C14.6453 4.61484 14.7304 4.4875 14.8376 4.38025C14.9449 4.27299 15.0722 4.18791 15.2123 4.12987C15.3525 4.07182 15.5027 4.04194 15.6544 4.04194C15.806 4.04194 15.9562 4.07182 16.0964 4.12987C16.2365 4.18791 16.3638 4.27299 16.4711 4.38025C16.5784 4.4875 16.6634 4.61484 16.7215 4.75497C16.7795 4.89511 16.8094 5.04531 16.8094 5.19699C16.8094 5.83588 16.2927 6.35257 15.6549 6.35257Z"
                                                fill=""
                                            />
                                            <path
                                                d="M10.5004 13.5554C12.2782 13.5554 13.7195 12.1142 13.7195 10.3363C13.7195 8.55844 12.2782 7.11719 10.5004 7.11719C8.7225 7.11719 7.28125 8.55844 7.28125 10.3363C7.28125 12.1142 8.7225 13.5554 10.5004 13.5554Z"
                                                fill=""
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="21"
                                            viewBox="0 0 19 21"
                                            className="transition-all fill-primary hover:fill-accent"
                                            fill="none"
                                        >
                                            <path
                                                d="M19 6.61636V10.3201C19 10.5165 18.923 10.7049 18.786 10.8438C18.6489 10.9828 18.463 11.0608 18.2692 11.0608C16.7427 11.0644 15.238 10.6923 13.8846 9.97654V13.6534C13.8846 15.5197 13.1532 17.3096 11.8513 18.6293C10.5493 19.949 8.78352 20.6904 6.94231 20.6904C5.10109 20.6904 3.33529 19.949 2.03335 18.6293C0.73142 17.3096 0 15.5197 0 13.6534C0 10.2367 2.45812 7.21636 5.71827 6.62747C5.82344 6.60852 5.93143 6.61317 6.03464 6.6411C6.13785 6.66903 6.23376 6.71955 6.31562 6.78911C6.39748 6.85867 6.4633 6.94558 6.50845 7.04371C6.5536 7.14185 6.57697 7.24882 6.57692 7.3571V11.3099C6.57697 11.4501 6.53776 11.5874 6.46387 11.7059C6.38997 11.8244 6.28442 11.9192 6.15947 11.9793C5.86409 12.1213 5.61171 12.341 5.42866 12.6156C5.2456 12.8901 5.13858 13.2095 5.11875 13.5402C5.09892 13.871 5.16701 14.2011 5.31593 14.4961C5.46484 14.7911 5.68912 15.0402 5.96536 15.2174C6.24161 15.3946 6.5597 15.4934 6.88646 15.5035C7.21322 15.5137 7.53668 15.4347 7.82309 15.275C8.1095 15.1152 8.34838 14.8805 8.51479 14.5953C8.68121 14.31 8.76908 13.9848 8.76923 13.6534V1.43117C8.76923 1.23471 8.84622 1.0463 8.98327 0.907388C9.12031 0.768472 9.30619 0.69043 9.5 0.69043H13.1538C13.3477 0.69043 13.5335 0.768472 13.6706 0.907388C13.8076 1.0463 13.8846 1.23471 13.8846 1.43117C13.8858 2.60953 14.3482 3.73928 15.1702 4.57251C15.9922 5.40574 17.1067 5.87439 18.2692 5.87561C18.463 5.87561 18.6489 5.95366 18.786 6.09257C18.923 6.23149 19 6.4199 19 6.61636Z"
                                                fill=""
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <img
                                src={SocialImg}
                                className="w-full max-w-[636px]"
                            />
                        </div>
                    </div>
                    <div className="absolute right-0 top-6 lg:right-[inherit] lg:top-12 lg:left-[40%]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="105"
                            height="110"
                            viewBox="0 0 105 110"
                            fill="none"
                        >
                            <path
                                d="M105 32.5926V52.963C105 54.0435 104.575 55.0797 103.817 55.8438C103.06 56.6078 102.033 57.037 100.962 57.037C92.5252 57.0568 84.2103 55.0104 76.7308 51.0736V71.2963C76.7308 81.5612 72.6887 91.4056 65.4938 98.6639C58.2989 105.922 48.5405 110 38.3654 110C28.1903 110 18.4319 105.922 11.237 98.6639C4.04206 91.4056 0 81.5612 0 71.2963C0 52.5046 13.5844 35.8926 31.601 32.6537C32.1822 32.5495 32.779 32.5751 33.3493 32.7287C33.9197 32.8823 34.4497 33.1602 34.9021 33.5428C35.3545 33.9253 35.7183 34.4033 35.9678 34.9431C36.2172 35.4828 36.3464 36.0711 36.3462 36.6667V58.4069C36.3464 59.178 36.1298 59.9333 35.7214 60.5851C35.313 61.2368 34.7297 61.7583 34.0392 62.0889C32.4068 62.8699 31.0121 64.0784 30.0005 65.5884C28.9888 67.0985 28.3974 68.8547 28.2878 70.6739C28.1782 72.4931 28.5546 74.3086 29.3775 75.9311C30.2004 77.5536 31.4399 78.9236 32.9665 79.8982C34.4931 80.8728 36.251 81.4163 38.0568 81.4721C39.8625 81.5278 41.6501 81.0936 43.2329 80.215C44.8157 79.3363 46.1358 78.0453 47.0554 76.4765C47.9751 74.9078 48.4607 73.1189 48.4615 71.2963V4.07407C48.4615 2.99356 48.887 1.95731 49.6444 1.19327C50.4017 0.429231 51.4289 0 52.5 0H72.6923C73.7634 0 74.7906 0.429231 75.5479 1.19327C76.3053 1.95731 76.7308 2.99356 76.7308 4.07407C76.7375 10.5551 79.2925 16.7687 83.8352 21.3515C88.3779 25.9342 94.5372 28.5118 100.962 28.5185C102.033 28.5185 103.06 28.9478 103.817 29.7118C104.575 30.4758 105 31.5121 105 32.5926Z"
                                fill="#E2ECFB"
                            />
                        </svg>
                    </div>
                    <div className="absolute left-0 bottom-32 lg:bottom-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="160"
                            viewBox="0 0 80 160"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_1_145)">
                                <path
                                    d="M62.6328 65.7037C62.569 60.9091 61.6714 56.1622 59.9803 51.6753C58.5139 47.8906 56.2741 44.4534 53.404 41.5833C50.534 38.7133 47.0968 36.4735 43.3121 35.007C38.8829 33.3443 34.2036 32.4453 29.4736 32.3482C23.3836 32.076 21.4528 32 5.99368 32C-9.46545 32 -11.4469 32 -17.4926 32.3482C-22.2204 32.446 -26.8975 33.345 -31.3247 35.007C-35.11 36.4724 -38.5477 38.7119 -41.4179 41.5821C-44.2881 44.4523 -46.5276 47.89 -47.993 51.6753C-49.659 56.1011 -50.5561 60.7792 -50.6455 65.5074C-50.9177 71.6037 -51 73.5345 -51 88.9937C-51 104.453 -51 106.428 -50.6455 112.48C-50.5505 117.215 -49.6579 121.887 -47.993 126.325C-46.5251 130.109 -44.284 133.545 -41.4128 136.414C-38.5417 139.283 -35.1037 141.522 -31.3184 142.987C-26.9033 144.716 -22.2254 145.68 -17.4862 145.835C-11.3899 146.108 -9.45912 146.19 6.00001 146.19C21.4591 146.19 23.4406 146.19 29.4862 145.835C34.2161 145.742 38.8957 144.845 43.3247 143.183C47.1085 141.715 50.5448 139.474 53.4146 136.604C56.2844 133.735 58.5248 130.298 59.993 126.515C61.6579 122.083 62.5505 117.411 62.6455 112.67C62.9177 106.58 63 104.649 63 89.1836C62.9873 73.7245 62.9874 71.762 62.6328 65.7037ZM5.9557 118.228C-10.2125 118.228 -23.3103 105.13 -23.3103 88.962C-23.3103 72.7939 -10.2125 59.696 5.9557 59.696C13.7175 59.696 21.1614 62.7794 26.6499 68.2678C32.1383 73.7563 35.2217 81.2002 35.2217 88.962C35.2217 96.7238 32.1383 104.168 26.6499 109.656C21.1614 115.145 13.7175 118.228 5.9557 118.228ZM36.3865 65.4378C35.4901 65.4386 34.6023 65.2627 33.774 64.92C32.9456 64.5774 32.193 64.0747 31.5591 63.4409C30.9253 62.807 30.4226 62.0544 30.08 61.226C29.7373 60.3977 29.5614 59.5099 29.5622 58.6135C29.5622 57.7177 29.7386 56.8307 30.0814 56.0032C30.4242 55.1756 30.9267 54.4236 31.5601 53.7902C32.1935 53.1568 32.9454 52.6544 33.773 52.3116C34.6006 51.9688 35.4876 51.7924 36.3833 51.7924C37.2791 51.7924 38.1661 51.9688 38.9937 52.3116C39.8213 52.6544 40.5732 53.1568 41.2066 53.7902C41.84 54.4236 42.3425 55.1756 42.6852 56.0032C43.028 56.8307 43.2045 57.7177 43.2045 58.6135C43.2045 62.3865 40.1532 65.4378 36.3865 65.4378Z"
                                    fill="#E2ECFB"
                                />
                                <path
                                    d="M5.95196 107.971C16.4512 107.971 24.9625 99.46 24.9625 88.9607C24.9625 78.4615 16.4512 69.9502 5.95196 69.9502C-4.54728 69.9502 -13.0586 78.4615 -13.0586 88.9607C-13.0586 99.46 -4.54728 107.971 5.95196 107.971Z"
                                    fill="#E2ECFB"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_145">
                                    <rect
                                        width="80"
                                        height="160"
                                        fill="white"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Articles;
