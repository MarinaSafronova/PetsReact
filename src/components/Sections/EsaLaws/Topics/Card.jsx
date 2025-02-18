import TitleBefore from "../../../../assets/trust-before.svg";
import TitleAfter from "../../../../assets/trust-after.svg";
import PropTypes from "prop-types";
import { Link } from "react-router";

function Card({ title, articles }) {
    const articlesLenght = articles.length;
    
    return (
        <section >
            <div className="relative flex flex-col items-center w-full mx-auto px-14">
                <div className="flex flex-col pt-12 pb-10 mt-10 w-full bg-white rounded-3xl border-solid shadow-choose-card border-[0.5px] border-[#DBD7E8] max-md:max-w-full">
                    <div className="relative flex justify-center w-full gap-4 lg:gap-12 lg:items-start">
                        <div className="flex items-center justify-center">
                            <img
                                src={TitleBefore}
                                className="max-w-[140px] lg:max-w-full  relative lg:left-[inherit]"
                            />
                        </div>
                        <span className="max-w-[200px] md:max-w-full font-semibold text-2xl leading-[32px] lg:top-[-15px] lg:leading-[45px] relative  lg:text-4xl font-sans text-center text-primary ">
                            {title}
                        </span>
                        <div className="flex items-center justify-center">
                            <img
                                src={TitleAfter}
                                className="max-w-[140px] lg:max-w-full lg:right-[inherit] relative"
                            />
                        </div>
                    </div>
                    <div
                        className={`flex w-full px-11 mt-8 items-stretch ${
                            articlesLenght  > 3 ? "gap-4  xl:gap-8" : "gap-5 xl:gap-12"
                        }`}
                    >
                        {articles.map((article, index) => (
                            <div
                                className={`flex flex-col flex-1 gap-5 ${articlesLenght > 3 ? "w-3/12" : "w-4/12"}`}
                                key={index}
                            >
                                <div className="flex flex-col ">
                                    {articlesLenght > 3 && (
                                        <img
                                            src={article.image}
                                            loading="lazy"
                                            alt=""
                                            className="object-contain w-full rounded-2xl max-w-[236px]"
                                        />
                                    )}
                                     {articlesLenght < 4 && (
                                        <img
                                            src={article.image}
                                            loading="lazy"
                                            alt=""
                                            className="object-contain w-full rounded-2xl max-w-[314px]"
                                        />
                                    )}
                                </div>
                                <div className="flex items-center justify-start gap-1 mt-1">
                                    {article.tags.map((tag, tagIndex) => (
                                        <div
                                            key={tagIndex}
                                            className="flex items-center justify-start gap-1"
                                        >
                                            <div className="px-2.5 flex min-h-[26px] opacity-50  items-center  py-px whitespace-nowrap text-13 font-Cerebri-Regular rounded bg-light-purple-o text-brown">
                                                {tag}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full mt-1">
                                    <div className="font-sans text-2xl font-semibold leading-9 text-brown min-h-[104px]">
                                        {article.title}
                                    </div>
                                    <Link
                                        to={article.to}
                                        className="items-center cursor-pointer mt-5 font-sans font-semibold leading-[26px] text-14 text-green"
                                    >
                                        See more &gt;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    articles: PropTypes.arrayOf(PropTypes.string),
};

export default Card;
