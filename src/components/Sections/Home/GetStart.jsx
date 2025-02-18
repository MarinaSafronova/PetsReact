import Pattern from "../../../assets/pattern-2.svg";
import Pattern2 from "../../../assets/pattern-3.svg";
import ImageSection from "../../../assets/start.svg";
import TitleBefore from "../../../assets/esa-before.svg";
import TitleAfter from "../../../assets/esa-after.svg";
import ButtonStart from "../../Button/ButtonStart";

function GetStart() {
    return (
        <div className="relative flex flex-col pb-[310px] lg:pb-1 w-full pt-14 lg:pt-14 bg-secondary bg-[url(assets/clouds.svg)] bg-no-repeat  bg-[center_top_1rem] ">
            <div className="relative z-10 flex flex-col items-center w-full px-5 pb-16 mx-auto gap-7 max-w-7xl">
                <div className="relative flex justify-center w-full gap-10 ">
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleBefore}
                            className="max-w-[140px] lg:max-w-full absolute top-0 lg:top-[inherit] left-0 lg:left-[inherit] lg:relative"
                        />
                    </div>
                    <span className="max-w-[684px] text-5xl font-bold leading-[55px] top-[40px] lg:top-0  relative  lg:text-large font-sans text-center text-white ">
                        Ready to Get Started?
                        <span className="bg-accent w-[34px] h-[2px] flex items-center mx-auto mt-3 lg:mt-1"></span>
                    </span>
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleAfter}
                            className="max-w-[140px] lg:max-w-full absolute right-0 top-0 lg:top-[inherit] lg:right-[inherit] lg:relative"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center w-full mt-10 gap-7 lg:mt-0">
                    <p className="mt-2 text-3xl text-center text-white font-Cerebri-Regular">
                        Get your ESA Letter Today
                    </p>
                    <div className="flex flex-col min-w-[365px] items-center justify-center text-[#222D3F]">
                        <ButtonStart
                            link="Get Started"
                            color="text-dark"
                            to="/checkout/start"
                        />
                    </div>
                </div>
                <img
                    src={Pattern2}
                    className="absolute top-5 left-[-60px] lg:top-[inherit] max-w-[130px] lg:max-w-[180px] z-10 lg:bottom-[-75px] lg:left-20"
                    alt=""
                    loading="lazy"
                />
                <img
                    src={Pattern}
                    className="absolute right-[-60px] bottom-[-70px] max-w-[130px] lg:max-w-[180px] lg:bottom-[-140px] lg:right-20"
                    alt=""
                    loading="lazy"
                />
                <img
                    src={ImageSection}
                    className="absolute bottom-[-390px] left-[50%] md:max-w-[450px] translate-x-[-50%] lg:translate-x-0 max-w-[399px] md:left-[30%] lg:left-0 xl:max-w-[565px] xl:left-[-80px] xl:bottom-[-360px] w-full"
                />
            </div>
        </div>
    );
}

export default GetStart;
