import Answer from "../../../assets/icons/answer.png";
import Guarantee from "../../../assets/icons/guarantee.png";
import Letter from "../../../assets/icons/letter.png";
import Pattern from "../../../assets/pattern.png";
import Line from "../../../assets/mobile.svg";
import TitleBefore from "../../../assets/esa-before.svg";
import TitleAfter from "../../../assets/esa-after.svg";
import Arrow from "../../../assets/arrow.svg";

function SimpleSteps() {
    return (
        <div className="relative flex flex-col w-full pt-20 lg:pt-20 bg-secondary">
            <div className="relative flex flex-col items-center w-full px-5 pb-16 mx-auto max-w-7xl">
                <img
                    loading="lazy"
                    src={Arrow}
                    alt=""
                    className="object-contain aspect-[0.19] w-[13px] absolute top-[-95px]"
                />
                <div className="relative flex justify-center w-full lg:items-center">
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleBefore}
                            className="absolute left-0 max-w-[140px] lg:max-w-full"
                        />
                    </div>
                    <h2 className="text-3xl absolute top-[60px] leading-[42px] translate-x-[-50%] left-[50%] lg:top-0 lg:relative w-full min-w-[366px] lg:text-4xl font-CeraPro-Black text-center text-white max-w-96 lg:max-w-[100%]">
                        Get Your ESA Letter in 3 Simple Steps
                    </h2>
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleAfter}
                            className="absolute right-0 max-w-[140px] lg:max-w-full"
                        />
                    </div>
                </div>
                <div className="relative flex flex-col justify-between w-full gap-5 mt-[200px] lg:mt-14 lg:flex-row">
                    <div className="flex flex-col relative w-full lg:max-w-[307px] lg:after:content-line lg:after:absolute lg:after:top-[33%] lg:after:left-[67%] lg:after:w-[356px] lg:after:h-[56px] lg:after:bg-no-repeat]">
                        <div className="flex flex-row items-start justify-center gap-10 mt-3 leading-8 text-center text-white lg:items-center lg:gap-0 lg:flex-col grow">
                            <div className="min-h-[126px] flex justify-center flex-col items-center relative z-10">
                                <img
                                    loading="lazy"
                                    src={Answer}
                                    alt="text"
                                    className="object-contain max-w-full aspect-square"
                                />
                                <div className="mt-3 lg:mt-8 text-4xl flex items-center justify-center font-bold text-accent whitespace-nowrap bg-primary rounded-full h-[50px]  w-[50px]">
            
                                    <span className="font-CeraPro-Bold">1</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-left lg:text-center max-w-[50%] lg:max-w-[100%]">
                                <h2 className="lg:mt-6 text-xl leading-[30px] lg:leading-[33px] lg:text-2xl font-Cerebri-ExtraBold lg:max-w-[175px] lg:mx-auto">
                                    Answer a Few Questions
                                </h2>
                                <p className="text-base lg:mt-6 font-Cerebri-Regular lg:text-22 leading-[25px] lg:leading-[33px] ">
                                    Complete a quick, secure questionnaire about
                                    your emotional support needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:max-w-[350px]">
                        <div className="flex flex-row items-start justify-center gap-10 mt-3 leading-8 text-center text-white lg:items-center lg:justify-start lg:gap-0 lg:flex-col grow">
                            <div className="min-h-[126px] flex justify-center flex-col items-center relative z-10">
                                <img
                                    loading="lazy"
                                    src={Guarantee}
                                    alt="text"
                                    className="object-contain max-w-full aspect-square"
                                />
                                <div className="relative z-10 text-4xl mt-3 lg:mt-8  flex items-center justify-center font-bold text-accent whitespace-nowrap bg-primary rounded-full h-[50px] w-[50px]">
                                    <span className="font-CeraPro-Bold">2</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-left lg:text-center max-w-[50%] lg:max-w-[100%]">
                                <h2 className="self-stretch mt-6 text-xl lg:text-2xl font-Cerebri-ExtraBold leading-[30px] lg:leading-[33px] ">
                                    Get Matched with a Licensed Professional
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col relative w-full lg:max-w-[307px] lg:before:content-line-2 lg:before:absolute lg:before:top-[33%] lg:before:right-[67%] lg:before:w-[356px] lg:before:h-[56px]  lg:before:bg-no-repeat]">
                        <div className="flex flex-row items-start justify-center gap-10 mt-3 leading-8 text-center text-white lg:items-center lg:gap-0 lg:flex-col grow">
                            <div className="min-h-[126px] flex justify-center flex-col items-center relative z-10">
                                <img
                                    loading="lazy"
                                    src={Letter}
                                    alt="text"
                                    className="object-contain max-w-full aspect-square"
                                />
                                <div className="mt-3 lg:mt-8 text-4xl flex items-center justify-center font-bold text-accent whitespace-nowrap bg-primary rounded-full h-[50px]  w-[50px]">
                                    <span className="font-CeraPro-Bold">3</span>
                                </div>
                            </div>

                            <div className="flex flex-col text-left lg:text-center max-w-[50%] lg:max-w-[100%]">
                                <h2 className="lg:mt-6 text-xl lg:text-2xl font-Cerebri-ExtraBold lg:max-w-[275px] lg:mx-auto leading-[30px] lg:leading-[33px]">
                                    Receive Your ESA Letter Instantly
                                </h2>
                                <p className="text-base lg:mt-6 font-Cerebri-Regular lg:text-22 leading-[25px] lg:leading-[33px] ">
                                    Once approved, download your ESA Letter and
                                    start using it immediately.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-12 left-[17%] sm:left-[21%] lg:hidden">
                        <img src={Line} />
                    </div>
                </div>
            </div>
            <img src={Pattern} className="absolute bottom-0 right-0" />
        </div>
    );
}

export default SimpleSteps;
