import TitleBefore from "../../../assets/trust-before.svg";
import TitleAfter from "../../../assets/trust-after.svg";
import Arrow from "../../../assets/arrow.svg";
import Direction from "../../../assets/about/direction.png";
import Trust from "../../../assets/about/trust.png";
import Confidential from "../../../assets/about/confidential.png";
import Pattern from "../../../assets/about/pattern.png";

function WhatWeDo() {
    return (
        <div className="pb-10 relative pt-11 bg-dark-blue lg:pt-10 lg:pb-10 md:bg-[url('assets/about/clouds.png')] md:bg-no-repeat md:bg-center">
            <img
                src={Pattern}
                alt=""
                className="absolute top-0 left-0 hidden md:block"
            />
            <div className="relative flex flex-col items-center gap-10 px-5 mx-auto w-:full lg:gap-12 max-w-7xl">
                <img
                    loading="lazy"
                    src={Arrow}
                    alt=""
                    className="object-contain aspect-[0.19] w-[13px] absolute top-[-80px] z-20"
                />
                <div className="relative flex justify-center w-full gap-12 lg:items-center">
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleBefore}
                            className="max-w-[140px] lg:max-w-full absolute left-0 lg:left-[inherit] lg:relative"
                        />
                    </div>
                    <span className="text-nowrap font-bold text-3xl leading-[42px] top-[50px] lg:top-0  relative  lg:text-4xl font-sans text-center text-primary ">
                        What We Do
                    </span>
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleAfter}
                            className="max-w-[140px] lg:max-w-full absolute right-0 lg:right-[inherit] lg:relative"
                        />
                    </div>
                </div>
                <p className="font-sans text-center max-w-6xl mx-auto text-sm lg:text-2xl mt-3 lg:mt-0 font-normal text-brown leading-[30px] lg:leading-[40px]">
                    We connect you with licensed mental health professionals
                    (LMHPs) who evaluate your eligibility for an{" "}
                    <span className="font-bold">ESA letter.</span>
                    With <span className="font-bold">HelpfulPets.com,</span> you
                    can trust that the process will be:
                </p>
                <div className="flex flex-col items-stretch justify-between w-full gap-10 md:gap-4 md:flex-row">
                    <div className="flex md:flex-col w-full items-center justify-center gap-8 md:gap-5 text-center text-brown md:max-w-[307px]">
                        <div className="min-h-[138px] text-center max-w-[50%] md:max-w-full">
                            <img
                                src={Direction}
                                alt=""
                                className="w-full max-w-[120px] lg:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col flex-1 gap-1 text-left md:text-center md:gap-5 max-w-[50%] md:max-w-full">
                            <h3 className="font-Cerebri-Bold lg:font-Cerebri-ExtraBold text-23 lg:text-2xl">
                                Straightforward
                            </h3>
                            <p className="text-base font-normal lg:text-22 font-Cerebri-Regular leading-[25px] lg:leading-[33px]">
                                From start to finish, we provide easy-to-follow
                                guidance.
                            </p>
                        </div>
                    </div>
                    <div className="flex md:flex-col w-full items-center justify-center gap-7 md:gap-5 text-center text-brown md:max-w-[374px]">
                        <div className="min-h-[138px] text-center max-w-[50%] md:max-w-full">
                            <img
                                src={Trust}
                                alt=""
                                className="w-full max-w-[120px] lg:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col flex-1 gap-1 text-left md:text-center md:gap-5 max-w-[50%] md:max-w-full">
                            <h3 className="font-Cerebri-Bold lg:font-Cerebri-ExtraBold text-23 lg:text-2xl">
                                Trusted
                            </h3>
                            <p className="text-base font-normal lg:text-22 font-Cerebri-Regular leading-[25px] lg:leading-[33px]">
                                Our network of LMHPs is fully licensed and
                                experienced in evaluating emotional support
                                needs.
                            </p>
                        </div>
                    </div>
                    <div className="flex md:flex-col w-full items-center justify-center gap-7 md:gap-5 text-center text-brown md:max-w-[349px]">
                        <div className="min-h-[138px] text-center max-w-[50%] md:max-w-full">
                            <img
                                src={Confidential}
                                alt=""
                                className="w-full max-w-[120px] lg:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col flex-1 gap-1 text-left md:text-center md:gap-5 max-w-[50%] md:max-w-full">
                            <h3 className="font-Cerebri-Bold lg:font-Cerebri-ExtraBold text-23 lg:text-2xl">
                                Confidential
                            </h3>
                            <p className="text-base font-normal lg:text-22 font-Cerebri-Regular leading-[25px] lg:leading-[33px]">
                                We prioritize your privacy, ensuring your
                                information is handled with care and discretion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;
