import NotIcon from "../../../assets/icons/not.svg";
import YesIcon from "../../../assets/icons/check-green.svg";
import Illustration from "../../../assets/illustration.svg";

const leftConditions = [
    "Limited Housing Options",
    "Pay Expensive Pet Rent and Deposits",
    "Landlords Can Deny Your Pet",
    "Restricted by Breed, Size, or Weight",
    "No Legal Protection From Housing",
    "Rejections",
];

const rightConditions = [
    "Live Anywhere With Your Pet",
    "$0 Pet Rent and Deposits",
    "Landlords Cannot Deny Your Pet",
    "No Breed, Size, or Weight Restrictions",
    "Protected by Federal Housing Laws",
];

function WithoutESA() {
    return (
        <div className="w-full pt-10 pb-10 lg:pt-24">
            <div className="w-full px-5 mx-auto max-w-7xl">
                <h2 className="font-sans text-3xl font-bold lg:text-4xl text-primary">
                    With vs. Without an ESA Letter:{' '}
                    <span className="font-sans font-medium text-m text-primary md:block">
                    What You Need to Know
                </span>
                </h2>
               
                <div className="relative flex gap-8 flex-col-reverse items-center pb-8 justify-between mt-8 lg:flex-row lg:pb-[350px]">
                    <img
                        src={Illustration}
                        loading="lazy"
                        alt=""
                        className="order-1 max-w-[628px] w-full lg:absolute lg:bottom-0 lg:left-[50%] lg:translate-x-[-50%]"
                    />
                    <div className="flex relative z-10 flex-col rounded-none max-w-[460px] w-full">
                        <div className="flex flex-col w-full px-5 py-5 shadow-card bg:-white lg:px-8 lg:py-7 rounded-xl">
                            <h2 className="self-start font-sans text-xl font-bold text-brown">
                                Without an ESA Letter:
                            </h2>
                            <div className="flex flex-col mt-3">
                                {leftConditions.map((condition, index) => (
                                    <div
                                        className="flex items-center gap-2.5 lg:mb-1"
                                        key={index}
                                    >
                                        <img
                                            loading="lazy"
                                            src={NotIcon}
                                            className="object-contain aspect-[1.73] w-[20px] h-[20px]"
                                            alt=""
                                        />
                                        <span className="text-s md:text-sm lg:mb-1 leading-[33px] text-brown font-Cerebri-Medium">
                                            {condition}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex relative z-10 flex-col rounded-none max-w-[460px] w-full">
                        <div className="flex flex-col w-full px-5 py-5 bg-white shadow-card lg:px-8 lg:py-7 rounded-xl">
                            <h2 className="self-start font-sans text-xl font-bold text-brown">
                                With an ESA Letter:
                            </h2>
                            <div className="flex flex-col mt-3">
                                {rightConditions.map((condition, index) => (
                                    <div
                                        className="flex items-center gap-2.5 lg:mb-1"
                                        key={index}
                                    >
                                        <img
                                            loading="lazy"
                                            src={YesIcon}
                                            className="object-contain aspect-[1.73] w-[20px] h-[20px]"
                                            alt=""
                                        />
                                        <span className="text-s md:text-sm leading-[33px] lg:mb-1 text-brown font-Cerebri-Medium">
                                            {condition}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WithoutESA;
