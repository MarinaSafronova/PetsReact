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
                <div className="relative flex justify-center w-full gap-10 lg:items-start">
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleBefore}
                            className="max-w-[140px] lg:max-w-full absolute top-0 lg:top-[inherit] left-0 lg:left-[inherit] lg:relative"
                        />
                    </div>
                    <span className=" font-bold text-3xl leading-[42px] top-[40px] lg:top-[-15px]  relative  lg:text-4xl font-sans text-center text-white ">
                        Get Your ESA Letter in 3 Simple Steps
                    </span>
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleAfter}
                            className="max-w-[140px] lg:max-w-full absolute right-0 top-0 lg:top-[inherit] lg:right-[inherit] lg:relative"
                        />
                    </div>
                </div>
                <div className="relative flex flex-col justify-between w-full gap-5 mt-16 lg:mt-14 lg:flex-row">
                    <div className="flex flex-col relative w-full lg:max-w-[307px] lg:after:content-line lg:after:absolute lg:after:top-[33%] lg:after:left-[67%] lg:after:w-[356px] lg:after:h-[56px] lg:after:bg-no-repeat]">
                        <div className="flex flex-row items-start justify-center gap-10 mt-3 leading-8 text-center text-white lg:items-center lg:gap-0 lg:flex-col grow">
                            <div className="min-h-[126px] flex justify-center flex-col items-center relative z-10">
                                <img
                                    loading="lazy"
                                    src={Answer}
                                    alt="text"
                                    className="object-contain lg:max-w-full max-w-[105px] aspect-square"
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
                                    className="object-contain lg:max-w-full max-w-[105px]  aspect-square"
                                />
                                <div className="relative z-10 text-4xl mt-3 lg:mt-8  flex items-center justify-center font-bold text-accent whitespace-nowrap bg-primary rounded-full h-[50px] w-[50px]">
                                    <span className="font-CeraPro-Bold">2</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-left lg:text-center max-w-[50%] lg:max-w-[100%]">
                                <h2 className="lg:mt-6 text-xl leading-[30px] lg:leading-[33px] lg:text-2xl font-Cerebri-ExtraBold lg:max-w-[350px] lg:mx-auto">
                                    Get Matched with a Licensed Professional
                                </h2>
                                <p className="text-base lg:mt-6 font-Cerebri-Regular lg:text-22 leading-[25px] lg:leading-[33px] ">
                                    A licensed mental health professional reviews your case. No in-person visit required.
                                </p>
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
                                    className="object-contain lg:max-w-full max-w-[105px] aspect-square"
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
