import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import TitleBefore from "../../../../assets/trust-before.svg";
import TitleAfter from "../../../../assets/trust-after.svg";
import PropTypes from "prop-types";
import { Link } from "react-router";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
function CardMobile({ title, articles, category }) {

    return (
        <section>
            <div className="relative flex flex-col items-center w-full max-w-5xl mx-auto lg:px-5 small:max-w-4xl sm:max-w-4xl md:max-w-4xl">
                <div className="flex flex-col pt-8 pb-8 mt-6 w-full bg-white rounded-3xl border-solid shadow-choose-card border-[0.5px] border-[#DBD7E8]">
                    <div className="relative flex justify-center w-full gap-4 lg:gap-12 lg:items-start">
                        <div className="flex items-center justify-center">
                            <img
                                src={TitleBefore}
                                className="max-w-[120px] w-full sm:max-w-[140px] lg:max-w-full  relative lg:left-[inherit]"
                            />
                        </div>
                        <span className="max-w-[200px] md:max-w-full font-semibold text-2xl leading-[32px] lg:top-[-15px] lg:leading-[45px] relative  lg:text-4xl font-sans text-center text-primary ">
                            {title}
                        </span>
                        <div className="flex items-center justify-center">
                            <img
                                src={TitleAfter}
                                className="max-w-[120px] w-full sm:max-w-[140px] lg:max-w-full lg:right-[inherit] relative"
                            />
                        </div>
                    </div>
                    <div
                        className={`flex w-full px-4 mt-8 justify-center items-stretch relative`}
                    >
                        <button
                            className={`absolute top-[25%] sm:top-[30%]  md:top-[30%] transition-all hover:shadow-md left-2 sm:left-10 md:left-10 translate-y-[-50%]  arrow-left-${category} max-w-[30px] h-[30px] w-full rounded-full z-10`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                            >
                                <circle cx="15" cy="15" r="15" fill="#FFC24F" />
                                <path
                                    d="M16.8164 20.9092L11.3619 15.257L16.8164 9.091"
                                    stroke="#234683"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                        <button
                            className={`absolute top-[25%]  sm:top-[30%]  md:top-[30%] transition-all hover:shadow-md right-2 sm:right-10 md:right-10 translate-y-[-50%] arrow-right-${category} max-w-[30px] h-[30px] w-full  rounded-full z-10`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                            >
                                <circle
                                    cx="15"
                                    cy="15"
                                    r="15"
                                    transform="rotate(-180 15 15)"
                                    fill="#FFC24F"
                                />
                                <path
                                    d="M12.2734 9.09082L17.728 14.743L12.2734 20.909"
                                    stroke="#234683"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                        <Swiper
                            slidesPerView={2}
                            modules={[Navigation]}
                            loop={true}
                            spaceBetween={13}
                            className={`justify-center w-full swiper-${category} sm:w-11/12 md:w-11/12`}
                            navigation={{
                                nextEl: `.arrow-right-${category}`,
                                prevEl: `.arrow-left-${category}`,
                            }}
                        >
                            {articles.map((article, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="flex justify-stretch"
                                >
                                    <div
                                        className={`flex flex-col flex-1 gap-3
                                        }`}
                                        key={index}
                                    >
                                        <div className="relative flex flex-col min-h-[211px] sm:min-h-[auto] overflow-hidden">
                                            <img
                                                src={article.image}
                                                loading="lazy"
                                                alt=""
                                                className="absolute top-0 left-0 object-cover h-full w-full max-w-full rounded-2xl min-h-[211px] sm:min-h-[auto] sm:relative object-top"
                                            />
                                        </div>
                                        <div className="flex items-center justify-start gap-1 mt-1">
                                            {article.tags.map(
                                                (tag, tagIndex) => (
                                                    <div
                                                        key={tagIndex}
                                                        className="flex flex-wrap items-center justify-start gap-1 sm:flex-nowrap"
                                                    >
                                                        <div className="px-1 flex min-h-[22px]  items-center opacity-50 whitespace-nowrap text-10 font-Cerebri-Regular rounded bg-light-purple-o text-brown">
                                                            {tag}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <div className="w-full mt-1">
                                            <div className="font-sans text-base mobile:text-lg font-semibold text-brown min-h-[74px] leading-[26px]">
                                                {article.title}
                                            </div>
                                            <Link
                                                to={article.to}
                                                className="items-center cursor-pointer mt-5 font-sans font-semibold leading-[26px] text-13 md:text-14 text-green"
                                            >
                                                See more &gt;
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

CardMobile.propTypes = {
    title: PropTypes.string,
    articles: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string,
};

export default CardMobile;
