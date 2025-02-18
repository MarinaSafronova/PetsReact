import Pattern from "../../../assets/pattern-2.svg";
import Pattern2 from "../../../assets/pattern-3.svg";
import ImageSection from "../../../assets/start.svg";
import TitleBefore from "../../../assets/esa-before.svg";
import TitleAfter from "../../../assets/esa-after.svg";

import ButtonStart from "../../Button/ButtonStart";

function Mission() {
    return (
        <div className="relative flex flex-col pb-[310px] lg:pb-24 w-full pt-10 lg:pt-20 bg-secondary md:bg-[url(assets/about/mission.svg)] md:bg-no-repeat  md:bg-[center_bottom_3rem] ">
            <div className="relative z-10 flex flex-col items-center w-full gap-6 px-5 pb-16 mx-auto max-w-7xl">
                <div className="relative flex justify-center w-full gap-10 lg:items-start">
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleBefore}
                            className="max-w-[140px] lg:max-w-full absolute top-0 lg:top-[inherit] left-0 lg:left-[inherit] lg:relative"
                        />
                    </div>
                    <span className="max-w-[684px] font-bold text-3xl leading-[42px] top-[40px] lg:top-[-15px]  relative  lg:text-4xl font-sans text-center text-white ">
                        Our Mission
                        <span className="bg-accent w-[34px] h-[2px] flex items-center mx-auto mt-3"></span>
                    </span>
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleAfter}
                            className="max-w-[140px] lg:max-w-full absolute right-0 top-0 lg:top-[inherit] lg:right-[inherit] lg:relative"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center w-full gap-10 mt-4 lg:mt-0">
                    <p className="mt-2 text-2xl text-center text-white leading-[40px] font-sans max-w-[1020px] mx-auto">
                        We believe everyone deserves access to mental health
                        support and legal protections for their emotional
                        support animals. By simplifying the process and
                        connecting you with licensed professionals, we’re
                        creating a community where people and their pets can
                        thrive together.
                    </p>
                    <div className="flex flex-col min-w-[365px] items-center justify-center text-[#222D3F] mt-2">
                        <ButtonStart
                            link="Get Started Today"
                            color="text-dark"
                            to="/checkout/start"
                        />
                    </div>
                </div>
                <img
                    src={Pattern2}
                    className="absolute bottom-28 left-[-80px]  max-w-[130px] lg:max-w-[180px] z-10 lg:bottom-[-75px] lg:left-20 md:hidden"
                    alt=""
                    loading="lazy"
                />
                <img
                    src={Pattern}
                    className="absolute right-[-60px] bottom-[-70px] max-w-[130px] lg:max-w-[180px] lg:bottom-[-140px] lg:right-20 md:hidden"
                    alt=""
                    loading="lazy"
                />
                <img
                    src={ImageSection}
                    className="absolute bottom-[-390px] left-[50%] md:max-w-[450px] translate-x-[-50%] lg:translate-x-0 max-w-[399px] md:left-[30%] lg:left-0 xl:max-w-[565px] xl:left-[-80px] xl:bottom-[-420px] w-full"
                />
            </div>
        </div>
    );
}

export default Mission;
