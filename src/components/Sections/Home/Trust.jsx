import TitleBefore from "../../../assets/trust-before.svg";
import TitleAfter from "../../../assets/trust-after.svg";
import Arrow from "../../../assets/arrow.svg";
import Circle from "../../../assets/icons/circle.svg";
import Pricing from "../../../assets/icons/circle-2.svg";
import Guarantee from "../../../assets/icons/circle-3.svg";
import Licensed from "../../../assets/icons/circle-4.svg";
import ButtonLink from "../../Button/ButtonLink";

function Trust() {
    return (
        <div className="pt-20 pb-16 bg-dark-blue">
            <div className="relative flex flex-col items-center w-full px-5 mx-auto max-w-7xl">
                <img
                    loading="lazy"
                    src={Arrow}
                    alt=""
                    className="object-contain aspect-[0.19] w-[13px] absolute top-[-110px] z-20"
                />
               
                <div className="relative flex justify-center w-full gap-10 lg:items-start">
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleBefore}
                            className="max-w-[140px] lg:max-w-full absolute top-0 lg:top-[inherit] left-0 lg:left-[inherit] lg:relative"
                        />
                    </div>
                    <span className=" font-bold text-3xl leading-[42px] top-[40px] lg:top-[-15px]  relative  lg:text-4xl font-sans text-center text-primary ">
                        Why Pet Owners Trust HelpfulPets.com
                    </span>
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleAfter}
                            className="max-w-[140px] lg:max-w-full absolute right-0 top-0 lg:top-[inherit] lg:right-[inherit] lg:relative"
                        />
                    </div>
                </div>
                <div className="relative grid justify-center w-full gap-5 mt-20 grid-cols-2-col lg:grid-cols-4-col lg:justify-between lg:mt-14">
                    <div className="flex flex-col text-center max-w-[220px]">
                        <img
                            loading="lazy"
                            src={Circle}
                            alt=""
                            className="max-w-[135px] rounded-full mx-auto w-full object-contain"
                        />
                        <div className="z-10 mt-2 text-sm lg:text-xl font-bold font-sans lg:leading-[30px] text-primary">
                            Fast <br /> Turnaround
                        </div>
                        <div className="mt-4 text-lg font-Cerebri-Medium fontw-full text-brown">
                            ESA Letters Delivered in Less Than 48 Hours.
                        </div>
                    </div>
                    <div className="flex flex-col text-center max-w-[220px]">
                        <img
                            loading="lazy"
                            src={Pricing}
                            alt=""
                            className="max-w-[135px] rounded-full mx-auto w-full object-contain"
                        />
                        <div className="z-10 mt-2 text-sm lg:text-xl font-bold font-sans lg:leading-[30px] text-primary">
                            Affordable
                            <br /> Pricing
                        </div>
                        <div className="mt-4 text-lg font-Cerebri-Medium fontw-full text-brown">
                            Transparent, Flat-Rate Pricing.
                        </div>
                    </div>
                    <div className="flex flex-col text-center max-w-[220px]">
                        <img
                            loading="lazy"
                            src={Guarantee}
                            alt=""
                            className="max-w-[135px] rounded-full mx-auto w-full object-contain"
                        />
                        <div className="z-10 mt-2 text-sm lg:text-xl font-bold font-sans lg:leading-[30px] text-primary">
                            100% Money-Back Guarantee
                        </div>
                        <div className="mt-4 text-lg font-Cerebri-Medium fontw-full text-brown">
                            Risk-Free. Full Refund if You Don’t Qualify.
                        </div>
                    </div>
                    <div className="flex flex-col text-center max-w-[220px]">
                        <img
                            loading="lazy"
                            src={Licensed}
                            alt=""
                            className="max-w-[135px] rounded-full mx-auto w-full object-contain"
                        />
                        <div className="z-10 mt-2 text-sm lg:text-xl font-bold font-sans lg:leading-[30px] text-primary">
                            Licensed Professionals
                        </div>
                        <div className="mt-4 text-lg font-Cerebri-Medium fontw-full text-brown">
                            All Letters Issued by Licensed Mental Health
                            Providers.
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-16">
                    <ButtonLink link="Get Your ESA Letter Now " color="text-primary" to="/checkout/start"  />
                </div>
            </div>
        </div>
    );
}

export default Trust;
