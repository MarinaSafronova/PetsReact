import TitleBefore from "../../../assets/trust-before.svg";
import TitleAfter from "../../../assets/trust-after.svg";
import Arrow from "../../../assets/arrow.svg";
import DesctopPlans from "../../Plans/DesctopPlans";
import MobilePlans from "../../Plans/MobilePlans";


function Plans() {
    return (
        <div className="pt-[90px] lg:pt-[150px] pb-10 lg:pb-[150px] bg-dark-blue bg-[url('assets/line.svg')] bg-no-repeat bg-[top_center]">
            <div className="w-full px-2 mx-auto lg:px-5 max-w-7xl">
                <div className="relative flex flex-col items-center gap-4">
                    <img
                        loading="lazy"
                        src={Arrow}
                        alt=""
                        className="object-contain aspect-[0.19] w-[13px] absolute top-[-55px] lg:top-[-110px] z-20"
                    />
                    <div className="relative flex justify-center w-full lg:items-center">
                        <div className="flex items-center justify-center">
                            <img
                                src={TitleBefore}
                                className="absolute left-0 max-w-[140px] lg:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4 lg:gap-2  absolute top-[30px] translate-x-[-50%] left-[50%] lg:top-0 lg:relative w-full z-10 min-w-[366px]  text-center lg:max-w-[100%]">
                            <h2 className="font-sans text-3xl font-bold leading-[42px] text-primary lg:text-4xl">
                                Support Animal Plans and Legal Rights
                            </h2>
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src={TitleAfter}
                                className="absolute right-0 max-w-[140px] lg:max-w-full"
                            />
                        </div>
                    </div>
                </div>
                {/* Desktop */}
                <div className="relative hidden plan:block plan:mt-[150px]">
                    <DesctopPlans/>
                </div>

                {/* Mobile */}

                <div className="relative block mt-[150px] lg:mt-20 plan:hidden">
                    <MobilePlans/>
                </div>
            </div>
        </div>
    );
}

export default Plans;
