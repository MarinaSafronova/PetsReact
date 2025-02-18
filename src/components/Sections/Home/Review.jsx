import Stars from "../../../assets/icons/stars.svg";
import StarsYellow from "../../../assets/icons/star-y.svg";
import TitleBefore from "../../../assets/trust-before.svg";
import TitleAfter from "../../../assets/trust-after.svg";
import SlideImg from "../../../assets/slide1.png";
import Arrow from "../../../assets/arrow.svg";
import SlideImg2 from "../../../assets/slide2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ButtonLink from "../../Button/ButtonLink";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Reviews() {
    return (
        <div className="pb-10 pt-14 lg:pb-20 bg-dark-blue">
            <div className="relative w-full px-0 mx-auto x-col ite md:px-10 max-w-7xl">
                <img
                    loading="lazy"
                    src={Arrow}
                    alt=""
                    className="object-contain aspect-[0.19] w-[13px] absolute top-[-90px] left-[50%] z-20 text-center"
                />
                <div className="flex flex-col items-center justify-between gap-3">
                    <div className="relative flex justify-center w-full lg:items-center">
                        <div className="flex items-center justify-center">
                            <img
                                src={TitleBefore}
                                className="absolute left-0 max-w-[140px] lg:max-w-full"
                            />
                        </div>
                        <div className="px-4 md:px-0 flex flex-col items-center justify-center gap-4 lg:gap-2  absolute top-[20px] translate-x-[-50%] left-[50%] lg:top-0 lg:relative w-full min-w-[366px]  text-center lg:max-w-[100%]">
                            <div className="flex flex-col items-center gap-2 text-center md:flex-row">
                                <img
                                    src={Stars}
                                    alt="Stars"
                                    className="w-full max-w-[105px]"
                                />
                                <p className="text-xl font-Cerebri-Regular text-dark-purple">
                                    <strong className="font-bold">4.9</strong> -
                                    Based in +500 comments
                                </p>
                            </div>
                            <h2 className="font-sans text-3xl font-bold leading-[42px] text-primary lg:text-4xl">
                                Pet Owners Love HelpfulPets.com
                            </h2>
                            <p className="text-sm leading-[30px] text-brown font-Cerebri-Medium">
                                Don&apos;t take our word for it. Here are real
                                reviews, from Verified Customers
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src={TitleAfter}
                                className="absolute right-0 max-w-[140px] lg:max-w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-[290px] lg:mt-10 relative">
                    <button className="absolute bottom-20 md:top-[50%] transition-all hover:shadow-md left-5 md:bottom-[inherit] md:translate-y-[-50%] md:left-[-30px] arrow-left-review max-w-[42px] h-[42px] w-full lg:max-w-[66px] lg:h-[66px] rounded-full z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="66"
                            height="66"
                            viewBox="0 0 66 66"
                            fill="none"
                            className=" max-w-[42px] h-[42px] w-full  lg:max-w-[66px] lg:h-[66px] "
                        >
                            <circle cx="33" cy="33" r="33" fill="#FFC24F" />
                            <path
                                d="M37 46L25 33.5652L37 20"
                                stroke="#234683"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                    <button className="absolute bottom-20 md:top-[50%] transition-all hover:shadow-md right-5 md:bottom-[inherit] md:translate-y-[-50%] md:right-[-30px] arrow-right-review max-w-[42px] h-[42px] w-full  lg:max-w-[66px] lg:h-[66px] rounded-full z-10">
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
                    <Swiper
                        slidesPerView={1}
                        modules={[Navigation]}
                        className="swiper-reviws"
                        navigation={{
                            nextEl: ".arrow-right-review",
                            prevEl: ".arrow-left-review",
                        }}
                    >
                        <SwiperSlide>
                            <div className="px-8 py-8 bg-primary md:rounded-[35px] max-w-[1250px] w-full relative md:min-h-[450px] flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="86"
                                    height="64"
                                    viewBox="0 0 86 64"
                                    fill="none"
                                    className="absolute left-4 top-4"
                                >
                                    <path
                                        d="M19.5465 25.523C18.5904 25.523 17.673 25.6684 16.7598 25.8009C17.0556 24.8091 17.36 23.8001 17.8488 22.8938C18.3375 21.577 19.1006 20.4355 19.8595 19.2855C20.494 18.0414 21.6129 17.1992 22.4361 16.1347C23.2978 15.1001 24.4725 14.4118 25.4029 13.5524C26.316 12.6546 27.5122 12.2057 28.464 11.573C29.4586 11.0044 30.3246 10.3759 31.2507 10.0767L33.5615 9.12759L35.5936 8.28537L33.5143 0L30.9548 0.615629C30.136 0.82084 29.1371 1.06025 28.0009 1.34669C26.8391 1.56045 25.6001 2.14616 24.2196 2.68056C22.8562 3.28764 21.2785 3.69806 19.8123 4.67281C18.3375 5.60481 16.6355 6.3829 15.1349 7.63126C13.6816 8.9181 11.9281 10.0339 10.6333 11.6713C9.21854 13.2019 7.8209 14.8093 6.73623 16.6391C5.48007 18.3834 4.6269 20.2987 3.72658 22.1926C2.91201 24.0866 2.25606 26.0232 1.72016 27.9043C0.704082 31.6751 0.249634 35.2577 0.0738574 38.323C-0.0719088 41.3927 0.013836 43.945 0.1939 45.7918C0.258209 46.664 0.378252 47.5105 0.463996 48.0962L0.571177 48.8144L0.682645 48.7888C1.44518 52.3408 3.20056 55.6049 5.74572 58.2036C8.29088 60.8023 11.5218 62.6293 15.0648 63.4734C18.6078 64.3175 22.318 64.1441 25.7662 62.9732C29.2145 61.8024 32.2599 59.682 34.5502 56.8573C36.8404 54.0326 38.2819 50.6191 38.708 47.0115C39.134 43.404 38.5271 39.7499 36.9575 36.472C35.388 33.194 32.9198 30.4261 29.8387 28.4885C26.7575 26.5509 23.1892 25.5228 19.5465 25.523ZM66.7061 25.523C65.7501 25.523 64.8326 25.6684 63.9194 25.8009C64.2152 24.8091 64.5196 23.8001 65.0084 22.8938C65.4971 21.577 66.2603 20.4355 67.0191 19.2855C67.6536 18.0414 68.7726 17.1992 69.5957 16.1347C70.4575 15.1001 71.6322 14.4118 72.5625 13.5524C73.4757 12.6546 74.6718 12.2057 75.6236 11.573C76.6182 11.0044 77.4842 10.3759 78.4103 10.0767L80.7211 9.12759L82.7533 8.28537L80.674 0L78.1145 0.615629C77.2956 0.82084 76.2967 1.06025 75.1606 1.34669C73.9987 1.56045 72.7597 2.14616 71.3792 2.68056C70.0202 3.29192 68.4382 3.69806 66.9719 4.67709C65.4971 5.60908 63.7951 6.38717 62.2946 7.63554C60.8412 8.92238 59.0877 10.0382 57.793 11.6713C56.3782 13.2019 54.9805 14.8093 53.8959 16.6391C52.6397 18.3834 51.7865 20.2987 50.8862 22.1926C50.0716 24.0866 49.4157 26.0232 48.8798 27.9043C47.8637 31.6751 47.4093 35.2577 47.2335 38.323C47.0877 41.3927 47.1735 43.945 47.3535 45.7918C47.4178 46.664 47.5379 47.5105 47.6236 48.0962L47.7308 48.8144L47.8423 48.7888C48.6048 52.3408 50.3602 55.6049 52.9053 58.2036C55.4505 60.8023 58.6814 62.6293 62.2244 63.4734C65.7674 64.3175 69.4776 64.1441 72.9259 62.9732C76.3741 61.8024 79.4195 59.682 81.7098 56.8573C84 54.0326 85.4416 50.6191 85.8676 47.0115C86.2936 43.404 85.6867 39.7499 84.1172 36.472C82.5476 33.194 80.0795 30.4261 76.9983 28.4885C73.9171 26.5509 70.3488 25.5228 66.7061 25.523Z"
                                        fill="#3D5887"
                                    />
                                </svg>
                                <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
                                    <div className="flex flex-col items-center justify-center gap-10 max-w-[400px]">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <span className="text-sm text-accent font-Cerebri-SemiBold">
                                                Sarah T.
                                            </span>
                                            <img
                                                src={StarsYellow}
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="block w-[34px] h-[2px] bg-accent"></span>
                                        <h2 className="font-sans font-bold text-center text-white leading-[30px] md:leading-[42px] text-22 md:text-m">
                                            I received my ESA letter quickly,
                                            and my landlord approved it right
                                            away!
                                        </h2>
                                    </div>
                                    <div className="max-w-[282px] min-w-[282px] h-[233px] min-h-[233px] max-h-[233px] lg:max-w-[439px] lg:min-w-[439px] lg:min-h-[369px] lg:max-h-[369px]">
                                        <div className="before:max-w-[264px] before:w-[264px] before:min-h-[210px] before:h-[210px] before:max-h-[210px]  lg:before:max-w-[411px] lg:before:w-[411px] lg:before:h-[327px] lg:before:max-h-[327px]  w-full h-full relative before:right-[14px] before:top-[18px] before:content-[''] before:absolute before:border-8 rounded-[5%] rotate-[-5.144deg] before:border-white before:bg-gray-300 before:rounded-[5%] ">
                                            <img
                                                src={SlideImg}
                                                alt=""
                                                loading="lazy"
                                                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] right-0 bottom-0 object-cover max-w-[264px] lg:max-w-[412px] w-full mx-auto rotate-[5.144deg] rounded-[5%] border-8 border-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="px-8 py-8 bg-primary md:rounded-[35px] max-w-[1250px] w-full relative md:min-h-[450px] flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="86"
                                    height="64"
                                    viewBox="0 0 86 64"
                                    fill="none"
                                    className="absolute left-4 top-4"
                                >
                                    <path
                                        d="M19.5465 25.523C18.5904 25.523 17.673 25.6684 16.7598 25.8009C17.0556 24.8091 17.36 23.8001 17.8488 22.8938C18.3375 21.577 19.1006 20.4355 19.8595 19.2855C20.494 18.0414 21.6129 17.1992 22.4361 16.1347C23.2978 15.1001 24.4725 14.4118 25.4029 13.5524C26.316 12.6546 27.5122 12.2057 28.464 11.573C29.4586 11.0044 30.3246 10.3759 31.2507 10.0767L33.5615 9.12759L35.5936 8.28537L33.5143 0L30.9548 0.615629C30.136 0.82084 29.1371 1.06025 28.0009 1.34669C26.8391 1.56045 25.6001 2.14616 24.2196 2.68056C22.8562 3.28764 21.2785 3.69806 19.8123 4.67281C18.3375 5.60481 16.6355 6.3829 15.1349 7.63126C13.6816 8.9181 11.9281 10.0339 10.6333 11.6713C9.21854 13.2019 7.8209 14.8093 6.73623 16.6391C5.48007 18.3834 4.6269 20.2987 3.72658 22.1926C2.91201 24.0866 2.25606 26.0232 1.72016 27.9043C0.704082 31.6751 0.249634 35.2577 0.0738574 38.323C-0.0719088 41.3927 0.013836 43.945 0.1939 45.7918C0.258209 46.664 0.378252 47.5105 0.463996 48.0962L0.571177 48.8144L0.682645 48.7888C1.44518 52.3408 3.20056 55.6049 5.74572 58.2036C8.29088 60.8023 11.5218 62.6293 15.0648 63.4734C18.6078 64.3175 22.318 64.1441 25.7662 62.9732C29.2145 61.8024 32.2599 59.682 34.5502 56.8573C36.8404 54.0326 38.2819 50.6191 38.708 47.0115C39.134 43.404 38.5271 39.7499 36.9575 36.472C35.388 33.194 32.9198 30.4261 29.8387 28.4885C26.7575 26.5509 23.1892 25.5228 19.5465 25.523ZM66.7061 25.523C65.7501 25.523 64.8326 25.6684 63.9194 25.8009C64.2152 24.8091 64.5196 23.8001 65.0084 22.8938C65.4971 21.577 66.2603 20.4355 67.0191 19.2855C67.6536 18.0414 68.7726 17.1992 69.5957 16.1347C70.4575 15.1001 71.6322 14.4118 72.5625 13.5524C73.4757 12.6546 74.6718 12.2057 75.6236 11.573C76.6182 11.0044 77.4842 10.3759 78.4103 10.0767L80.7211 9.12759L82.7533 8.28537L80.674 0L78.1145 0.615629C77.2956 0.82084 76.2967 1.06025 75.1606 1.34669C73.9987 1.56045 72.7597 2.14616 71.3792 2.68056C70.0202 3.29192 68.4382 3.69806 66.9719 4.67709C65.4971 5.60908 63.7951 6.38717 62.2946 7.63554C60.8412 8.92238 59.0877 10.0382 57.793 11.6713C56.3782 13.2019 54.9805 14.8093 53.8959 16.6391C52.6397 18.3834 51.7865 20.2987 50.8862 22.1926C50.0716 24.0866 49.4157 26.0232 48.8798 27.9043C47.8637 31.6751 47.4093 35.2577 47.2335 38.323C47.0877 41.3927 47.1735 43.945 47.3535 45.7918C47.4178 46.664 47.5379 47.5105 47.6236 48.0962L47.7308 48.8144L47.8423 48.7888C48.6048 52.3408 50.3602 55.6049 52.9053 58.2036C55.4505 60.8023 58.6814 62.6293 62.2244 63.4734C65.7674 64.3175 69.4776 64.1441 72.9259 62.9732C76.3741 61.8024 79.4195 59.682 81.7098 56.8573C84 54.0326 85.4416 50.6191 85.8676 47.0115C86.2936 43.404 85.6867 39.7499 84.1172 36.472C82.5476 33.194 80.0795 30.4261 76.9983 28.4885C73.9171 26.5509 70.3488 25.5228 66.7061 25.523Z"
                                        fill="#3D5887"
                                    />
                                </svg>
                                <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
                                    <div className="flex flex-col items-center justify-center gap-10 max-w-[400px]">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <span className="text-sm text-accent font-Cerebri-SemiBold">
                                                Sarah T.
                                            </span>
                                            <img
                                                src={StarsYellow}
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="block w-[34px] h-[2px] bg-accent"></span>
                                        <h2 className="font-sans font-bold text-center text-white text-22 md:text-m leading-[30px] md:leading-[42px]">
                                            I received my ESA letter quickly,
                                            and my landlord approved it right
                                            away!
                                        </h2>
                                    </div>
                                    <div className="max-w-[282px] min-w-[282px] h-[233px] min-h-[233px] max-h-[233px] lg:max-w-[439px] lg:min-w-[439px] lg:min-h-[369px] lg:max-h-[369px]">
                                        <div className="before:max-w-[264px] before:w-[264px] before:min-h-[210px] before:h-[210px] before:max-h-[210px]  lg:before:max-w-[411px] lg:before:w-[411px] lg:before:h-[327px] lg:before:max-h-[327px]  w-full h-full relative before:right-[14px] before:top-[18px] before:content-[''] before:absolute before:border-8 rounded-[5%] rotate-[-5.144deg] before:border-white before:bg-gray-300 before:rounded-[5%] ">
                                            <img
                                                src={SlideImg2}
                                                alt=""
                                                loading="lazy"
                                                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] right-0 bottom-0 object-cover max-w-[264px] lg:max-w-[412px] w-full mx-auto rotate-[5.144deg] rounded-[5%] border-8 border-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="px-8 py-8 bg-primary md:rounded-[35px] max-w-[1250px] w-full relative md:min-h-[450px] flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="86"
                                    height="64"
                                    viewBox="0 0 86 64"
                                    fill="none"
                                    className="absolute left-4 top-4"
                                >
                                    <path
                                        d="M19.5465 25.523C18.5904 25.523 17.673 25.6684 16.7598 25.8009C17.0556 24.8091 17.36 23.8001 17.8488 22.8938C18.3375 21.577 19.1006 20.4355 19.8595 19.2855C20.494 18.0414 21.6129 17.1992 22.4361 16.1347C23.2978 15.1001 24.4725 14.4118 25.4029 13.5524C26.316 12.6546 27.5122 12.2057 28.464 11.573C29.4586 11.0044 30.3246 10.3759 31.2507 10.0767L33.5615 9.12759L35.5936 8.28537L33.5143 0L30.9548 0.615629C30.136 0.82084 29.1371 1.06025 28.0009 1.34669C26.8391 1.56045 25.6001 2.14616 24.2196 2.68056C22.8562 3.28764 21.2785 3.69806 19.8123 4.67281C18.3375 5.60481 16.6355 6.3829 15.1349 7.63126C13.6816 8.9181 11.9281 10.0339 10.6333 11.6713C9.21854 13.2019 7.8209 14.8093 6.73623 16.6391C5.48007 18.3834 4.6269 20.2987 3.72658 22.1926C2.91201 24.0866 2.25606 26.0232 1.72016 27.9043C0.704082 31.6751 0.249634 35.2577 0.0738574 38.323C-0.0719088 41.3927 0.013836 43.945 0.1939 45.7918C0.258209 46.664 0.378252 47.5105 0.463996 48.0962L0.571177 48.8144L0.682645 48.7888C1.44518 52.3408 3.20056 55.6049 5.74572 58.2036C8.29088 60.8023 11.5218 62.6293 15.0648 63.4734C18.6078 64.3175 22.318 64.1441 25.7662 62.9732C29.2145 61.8024 32.2599 59.682 34.5502 56.8573C36.8404 54.0326 38.2819 50.6191 38.708 47.0115C39.134 43.404 38.5271 39.7499 36.9575 36.472C35.388 33.194 32.9198 30.4261 29.8387 28.4885C26.7575 26.5509 23.1892 25.5228 19.5465 25.523ZM66.7061 25.523C65.7501 25.523 64.8326 25.6684 63.9194 25.8009C64.2152 24.8091 64.5196 23.8001 65.0084 22.8938C65.4971 21.577 66.2603 20.4355 67.0191 19.2855C67.6536 18.0414 68.7726 17.1992 69.5957 16.1347C70.4575 15.1001 71.6322 14.4118 72.5625 13.5524C73.4757 12.6546 74.6718 12.2057 75.6236 11.573C76.6182 11.0044 77.4842 10.3759 78.4103 10.0767L80.7211 9.12759L82.7533 8.28537L80.674 0L78.1145 0.615629C77.2956 0.82084 76.2967 1.06025 75.1606 1.34669C73.9987 1.56045 72.7597 2.14616 71.3792 2.68056C70.0202 3.29192 68.4382 3.69806 66.9719 4.67709C65.4971 5.60908 63.7951 6.38717 62.2946 7.63554C60.8412 8.92238 59.0877 10.0382 57.793 11.6713C56.3782 13.2019 54.9805 14.8093 53.8959 16.6391C52.6397 18.3834 51.7865 20.2987 50.8862 22.1926C50.0716 24.0866 49.4157 26.0232 48.8798 27.9043C47.8637 31.6751 47.4093 35.2577 47.2335 38.323C47.0877 41.3927 47.1735 43.945 47.3535 45.7918C47.4178 46.664 47.5379 47.5105 47.6236 48.0962L47.7308 48.8144L47.8423 48.7888C48.6048 52.3408 50.3602 55.6049 52.9053 58.2036C55.4505 60.8023 58.6814 62.6293 62.2244 63.4734C65.7674 64.3175 69.4776 64.1441 72.9259 62.9732C76.3741 61.8024 79.4195 59.682 81.7098 56.8573C84 54.0326 85.4416 50.6191 85.8676 47.0115C86.2936 43.404 85.6867 39.7499 84.1172 36.472C82.5476 33.194 80.0795 30.4261 76.9983 28.4885C73.9171 26.5509 70.3488 25.5228 66.7061 25.523Z"
                                        fill="#3D5887"
                                    />
                                </svg>
                                <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
                                    <div className="flex flex-col items-center justify-center gap-10 max-w-[400px]">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <span className="text-sm text-accent font-Cerebri-SemiBold">
                                                Sarah T.
                                            </span>
                                            <img
                                                src={StarsYellow}
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="block w-[34px] h-[2px] bg-accent"></span>
                                        <h2 className="font-sans font-bold text-center text-white text-22 md:text-m leading-[30px] md:leading-[42px]">
                                            I received my ESA letter quickly,
                                            and my landlord approved it right
                                            away!
                                        </h2>
                                    </div>
                                    <div className="max-w-[282px] min-w-[282px] h-[233px] min-h-[233px] max-h-[233px] lg:max-w-[439px] lg:min-w-[439px] lg:min-h-[369px] lg:max-h-[369px]">
                                        <div className="before:max-w-[264px] before:w-[264px] before:min-h-[210px] before:h-[210px] before:max-h-[210px]  lg:before:max-w-[411px] lg:before:w-[411px] lg:before:h-[327px] lg:before:max-h-[327px]  w-full h-full relative before:right-[14px] before:top-[18px] before:content-[''] before:absolute before:border-8 rounded-[5%] rotate-[-5.144deg] before:border-white before:bg-gray-300 before:rounded-[5%] ">
                                            <img
                                                src={SlideImg}
                                                alt=""
                                                loading="lazy"
                                                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] right-0 bottom-0 object-cover max-w-[264px] lg:max-w-[412px] w-full mx-auto rotate-[5.144deg] rounded-[5%] border-8 border-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="px-8 py-8 bg-primary md:rounded-[35px] max-w-[1250px] w-full relative md:min-h-[450px] flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="86"
                                    height="64"
                                    viewBox="0 0 86 64"
                                    fill="none"
                                    className="absolute left-4 top-4"
                                >
                                    <path
                                        d="M19.5465 25.523C18.5904 25.523 17.673 25.6684 16.7598 25.8009C17.0556 24.8091 17.36 23.8001 17.8488 22.8938C18.3375 21.577 19.1006 20.4355 19.8595 19.2855C20.494 18.0414 21.6129 17.1992 22.4361 16.1347C23.2978 15.1001 24.4725 14.4118 25.4029 13.5524C26.316 12.6546 27.5122 12.2057 28.464 11.573C29.4586 11.0044 30.3246 10.3759 31.2507 10.0767L33.5615 9.12759L35.5936 8.28537L33.5143 0L30.9548 0.615629C30.136 0.82084 29.1371 1.06025 28.0009 1.34669C26.8391 1.56045 25.6001 2.14616 24.2196 2.68056C22.8562 3.28764 21.2785 3.69806 19.8123 4.67281C18.3375 5.60481 16.6355 6.3829 15.1349 7.63126C13.6816 8.9181 11.9281 10.0339 10.6333 11.6713C9.21854 13.2019 7.8209 14.8093 6.73623 16.6391C5.48007 18.3834 4.6269 20.2987 3.72658 22.1926C2.91201 24.0866 2.25606 26.0232 1.72016 27.9043C0.704082 31.6751 0.249634 35.2577 0.0738574 38.323C-0.0719088 41.3927 0.013836 43.945 0.1939 45.7918C0.258209 46.664 0.378252 47.5105 0.463996 48.0962L0.571177 48.8144L0.682645 48.7888C1.44518 52.3408 3.20056 55.6049 5.74572 58.2036C8.29088 60.8023 11.5218 62.6293 15.0648 63.4734C18.6078 64.3175 22.318 64.1441 25.7662 62.9732C29.2145 61.8024 32.2599 59.682 34.5502 56.8573C36.8404 54.0326 38.2819 50.6191 38.708 47.0115C39.134 43.404 38.5271 39.7499 36.9575 36.472C35.388 33.194 32.9198 30.4261 29.8387 28.4885C26.7575 26.5509 23.1892 25.5228 19.5465 25.523ZM66.7061 25.523C65.7501 25.523 64.8326 25.6684 63.9194 25.8009C64.2152 24.8091 64.5196 23.8001 65.0084 22.8938C65.4971 21.577 66.2603 20.4355 67.0191 19.2855C67.6536 18.0414 68.7726 17.1992 69.5957 16.1347C70.4575 15.1001 71.6322 14.4118 72.5625 13.5524C73.4757 12.6546 74.6718 12.2057 75.6236 11.573C76.6182 11.0044 77.4842 10.3759 78.4103 10.0767L80.7211 9.12759L82.7533 8.28537L80.674 0L78.1145 0.615629C77.2956 0.82084 76.2967 1.06025 75.1606 1.34669C73.9987 1.56045 72.7597 2.14616 71.3792 2.68056C70.0202 3.29192 68.4382 3.69806 66.9719 4.67709C65.4971 5.60908 63.7951 6.38717 62.2946 7.63554C60.8412 8.92238 59.0877 10.0382 57.793 11.6713C56.3782 13.2019 54.9805 14.8093 53.8959 16.6391C52.6397 18.3834 51.7865 20.2987 50.8862 22.1926C50.0716 24.0866 49.4157 26.0232 48.8798 27.9043C47.8637 31.6751 47.4093 35.2577 47.2335 38.323C47.0877 41.3927 47.1735 43.945 47.3535 45.7918C47.4178 46.664 47.5379 47.5105 47.6236 48.0962L47.7308 48.8144L47.8423 48.7888C48.6048 52.3408 50.3602 55.6049 52.9053 58.2036C55.4505 60.8023 58.6814 62.6293 62.2244 63.4734C65.7674 64.3175 69.4776 64.1441 72.9259 62.9732C76.3741 61.8024 79.4195 59.682 81.7098 56.8573C84 54.0326 85.4416 50.6191 85.8676 47.0115C86.2936 43.404 85.6867 39.7499 84.1172 36.472C82.5476 33.194 80.0795 30.4261 76.9983 28.4885C73.9171 26.5509 70.3488 25.5228 66.7061 25.523Z"
                                        fill="#3D5887"
                                    />
                                </svg>
                                <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
                                    <div className="flex flex-col items-center justify-center gap-10 max-w-[400px]">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <span className="text-sm text-accent font-Cerebri-SemiBold">
                                                Sarah T.
                                            </span>
                                            <img
                                                src={StarsYellow}
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="block w-[34px] h-[2px] bg-accent"></span>
                                        <h2 className="font-sans font-bold text-center text-white text-22 md:text-m leading-[30px] md:leading-[42px]">
                                            I received my ESA letter quickly,
                                            and my landlord approved it right
                                            away!
                                        </h2>
                                    </div>
                                    <div className="max-w-[282px] min-w-[282px] h-[233px] min-h-[233px] max-h-[233px] lg:max-w-[439px] lg:min-w-[439px] lg:min-h-[369px] lg:max-h-[369px]">
                                        <div className="before:max-w-[264px] before:w-[264px] before:min-h-[210px] before:h-[210px] before:max-h-[210px]  lg:before:max-w-[411px] lg:before:w-[411px] lg:before:h-[327px] lg:before:max-h-[327px]  w-full h-full relative before:right-[14px] before:top-[18px] before:content-[''] before:absolute before:border-8 rounded-[5%] rotate-[-5.144deg] before:border-white before:bg-gray-300 before:rounded-[5%] ">
                                            <img
                                                src={SlideImg}
                                                alt=""
                                                loading="lazy"
                                                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] right-0 bottom-0 object-cover max-w-[264px] lg:max-w-[412px] w-full mx-auto rotate-[5.144deg] rounded-[5%] border-8 border-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="flex flex-col items-center justify-center pt-12">
                    <ButtonLink
                        link="See More Review Here"
                        color="text-primary"
                    />
                </div>
            </div>
        </div>
    );
}

export default Reviews;
