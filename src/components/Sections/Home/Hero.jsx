import Stars from "../../../assets/icons/stars.svg";
import YesIcon from "../../../assets/icons/check-green.svg";
import ButtonLink from "../../Button/ButtonLink";
import Brands from "../../../assets/icons/brands.png";
import HeroImg from "../../../assets/desk-hero.png";
import HeroMobile from "../../../assets/mobile-hero.png";

const rightConditions = [
    "ESA Letters Delivered in Less Than 48 Hours",
    "Fully Compliant With Federal & State ESA Laws",
    "Approved by Licensed Mental Health Professionals",
    "No Pet Fees or Breed Restrictions",
    "Full Refund if You Don’t Qualify",
];
function Hero() {
    return (
        <div className="w-full relative pt-[100px] md:pb-5 lg:pb-20 lg:pt-[180px] md:bg-[url('assets/hero.png')] md:bg-no-repeat  md:xl:bg-[position:30%_80%]  md:bg-contain">
            <div className="w-full px-5 mx-auto max-w-7xl">
                <div className="flex">
                    <div className="max-w-[730px] items-start flex flex-col gap-6 lg:gap-12 relative z-10">
                        <div className="flex flex-col gap-3 lg:gap-4">
                            <div className="flex items-center gap-2">
                                <p className="font-sans text-base text-brown">
                                    <strong className="font-semibold">
                                        4.9
                                    </strong>{" "}
                                    -{" "}
                                    <strong className="font-semibold">
                                        1150
                                    </strong>{" "}
                                    reviews
                                </p>
                                <img
                                    src={Stars}
                                    alt="Stars"
                                    className="w-full max-w-[105px]"
                                />
                            </div>
                            <h1 className="font-sans font-bold leading-10 text-35 lg:text-5xl text-secondary">
                                Live Anywhere. Avoid Pet Fees.
                                <span className="font-semibold md:block text-primary">
                                    Get an ESA Letter from Licensed
                                    Professionals.
                                </span>
                            </h1>
                            <div className="flex relative z-10 flex-col rounded-none max-w-[480px] w-full">
                                <div className="flex flex-col w-full">
                                    <div className="flex flex-col">
                                        {rightConditions.map(
                                            (condition, index) => (
                                                <div
                                                    className="flex items-center gap-2.5 mb-1"
                                                    key={index}
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={YesIcon}
                                                        className="object-contain aspect-[1.73] w-[20px] h-[20px]"
                                                        alt=""
                                                    />
                                                    <span className="text-[14px] leading-7 mobile:text-s md:text-base md:leading-[33px] Cerebri-SemiBold text-brown font-Cerebri-Medium">
                                                        {condition}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ButtonLink
                            link="Get Your ESA Letter Now "
                            color="text-primary"
                        />
                        <div className="flex flex-col gap-2 md:gap-6 md:items-center md:flex-row">
                            <p className="text-base uppercase tracking-[1.44px] text-brown">
                                AS SEEN IN
                            </p>
                            <img
                                src={Brands}
                                alt=""
                                loading="lazy"
                                className="max-w-[240px] md:max-w-[398px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={HeroImg}
                alt=""
                className="hidden md:block md:absolute  md:right-[-80px] md:bottom-[-30px] lg:right-0 lg:bottom-[-70px]"
            />
            <img
                src={HeroMobile}
                alt=""
                className="w-full md:hidden mt-[-175px]"
            />
        </div>
    );
}

export default Hero;
