import Arrow from "../../assets/arrow-plan.svg";
import Paw from "../../assets/paw.svg";
import PlanCheck from "../../assets/plan-check.svg";
import PurleCheck from "../../assets/purple-check.svg";
import GreyCheck from "../../assets/grey-check.svg"
import { Link } from "react-router";

function DesctopPlans() {
    const services = [
        { text: "Mental health assement", key: "mental-health" },
        { text: "Documentation", key: "documentation" },
    ];
    const rights = [
        {
            text: "Mental health assement",
            key: "mental-health-assement",
            right: "Live with your animal, exempt from fees and bans",
        },
        {
            text: "Air travel rights",
            key: "Air-travel-rights",
            right: "Fly with your dog in cabin free of charge",
        },
    ];

    const benefits = [
        { text: "Priority support", key: "priority-support" },
        { text: "Discounted yearly renewal", key: "Discounted-yearly-renewal" },
    ];

    return (
        <div className="relative pt-20 mt-20 rounded-[30px] px-5 bg-plan">
            <div className="flex items-center flex-col justify-center bg-[#FAFDFF] rounded-lg p-7 absolute top-[-60px] left-0">
                <span className="font-sans font-semibold text-primary text-m">
                    Features
                </span>
            </div>
            <div className="flex justify-between w-full">
                <div>
                    <div className="w-full pb-8">
                        {/* Item */}
                        <div className="flex items-start justify-between max-w-[660px] w-full pt-6 pb-6 border-b border-dashed border-[#937ECC] min-h-[1px]">
                            <div className="flex z-10 flex-col self-start -mt-1.5 max-w-[214px] w-full">
                                <div className="flex gap-2.5 items-center self-start font-bold text-primary whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src={Paw}
                                        className="object-contain shrink-0 mt-1.5 w-6 aspect-[1.09]"
                                        alt=""
                                    />
                                    <div className="font-Cerebri-Regular text-22">
                                        Services
                                    </div>
                                </div>
                                <div className="mt-4 font-normal leading-6 font-Cerebri-Regular text-s text-brown max-w-[143px]">
                                    Essential features of all our plans
                                </div>
                            </div>
                            <div className="flex gap-10 my-auto text-2xl font-medium text-blue-900">
                                <img
                                    loading="lazy"
                                    src={Arrow}
                                    className="object-contain shrink-0 my-auto aspect-[0.26] w-[21px]"
                                    alt=""
                                />
                                <div className="flex flex-col grow shrink-0 w-fit">
                                    {services.map((service, index) => (
                                        <div
                                            key={service.key}
                                            className={index > 0 ? "mt-10" : ""}
                                        >
                                            <div className="flex gap-3.5">
                                                <div className="flex shrink-0 my-auto w-2.5 h-2.5 bg-amber-300 rounded-full" />
                                                <div className="font-medium grow shrink font-Cerebri-Regular text-primary text-22">
                                                    {service.text}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Rights */}
                        <div className="flex items-start justify-between max-w-[660px] w-full pt-6 pb-6 border-b border-dashed border-[#937ECC] min-h-[1px]">
                            <div className="flex z-10 flex-col self-start -mt-1.5 max-w-[214px] w-full">
                                <div className="flex gap-2.5 items-center self-start font-bold text-primary whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src={Paw}
                                        className="object-contain shrink-0 mt-1.5 w-6 aspect-[1.09]"
                                        alt=""
                                    />
                                    <div className="font-Cerebri-Regular text-22">
                                        Rights
                                    </div>
                                </div>
                                <div className="mt-4 font-normal leading-6 font-Cerebri-Regular text-s text-brown">
                                    As per the ADA, FHA, and ACAA
                                </div>
                            </div>
                            <div className="flex items-start gap-10 my-auto text-2xl font-medium text-blue-900">
                                <img
                                    loading="lazy"
                                    src={Arrow}
                                    className="object-contain shrink-0  aspect-[0.26] w-[21px]"
                                    alt=""
                                />
                                <div className="flex flex-col grow shrink-0 w-fit">
                                    {rights.map((right, index) => (
                                        <div
                                            key={right.key}
                                            className={index > 0 ? "mt-10" : ""}
                                        >
                                            <div className="flex gap-3.5">
                                                <div className="flex shrink-0 my-auto w-2.5 h-2.5 bg-amber-300 rounded-full" />
                                                <div className="font-medium grow shrink font-Cerebri-Regular text-primary text-22">
                                                    {right.text}
                                                    <p className="mt-1 font-normal leading-6 font-Cerebri-Regular text-s text-brown max-w-[243px]">
                                                        {right.right}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Benefits */}
                        <div className="flex items-start justify-between max-w-[660px] w-full pt-6 pb-6">
                            <div className="flex z-10 flex-col self-start -mt-1.5 max-w-[214px] w-full">
                                <div className="flex gap-2.5 items-center self-start font-bold text-primary whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src={Paw}
                                        className="object-contain shrink-0 mt-1.5 w-6 aspect-[1.09]"
                                        alt=""
                                    />
                                    <div className="font-Cerebri-Regular text-22">
                                        Optinal Benefits
                                    </div>
                                </div>
                                <div className="mt-4 font-normal leading-6 font-Cerebri-Regular text-s text-brown max-w-[163px]">
                                    Make your investment got the extra mile
                                </div>
                            </div>
                            <div className="flex gap-10 my-auto text-2xl font-medium text-blue-900">
                                <img
                                    loading="lazy"
                                    src={Arrow}
                                    className="object-contain shrink-0 my-auto aspect-[0.26] w-[21px]"
                                    alt=""
                                />
                                <div className="flex flex-col grow shrink-0 w-fit">
                                    {benefits.map((service, index) => (
                                        <div
                                            key={service.key}
                                            className={index > 0 ? "mt-10" : ""}
                                        >
                                            <div className="flex gap-3.5">
                                                <div className="flex shrink-0 my-auto w-2.5 h-2.5 bg-amber-300 rounded-full" />
                                                <div className="font-medium grow shrink font-Cerebri-Regular text-primary text-22">
                                                    {service.text}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-stretch gap-6">
                    <Link to="/" className="flex flex-col font-semibold whitespace-nowrap rounded-none max-w-[247px] absolute right-0 top-[-50px]">
                        <div className="flex flex-col px-3.5 py-4 w-full bg-white rounded-xl transition-all shadow-md hover:shadow-xl">
                            <div className="px-11 py-6 text-3xl text-white bg-light-green rounded-lg font-sans shadow-md leading-[55px]">
                                Premium
                            </div>
                            
                            <div className="flex flex-col gap-5">
                            <img
                                loading="lazy"
                                src={PlanCheck}
                                alt=""
                                className="object-contain self-center mt-10 w-[38px]"
                            />
                            <img
                                loading="lazy"
                                src={PlanCheck}
                                alt=""
                                className="object-contain self-center mt-10  w-[38px]"
                            />
                            <img
                                loading="lazy"
                                src={PlanCheck}
                                alt=""
                                className="object-contain self-center mt-10  w-[38px]"
                            />
                            <img
                                loading="lazy"
                                src={PlanCheck}
                                alt=""
                                className="object-contain self-center mt-10  w-[38px]"
                            />
                            <br/>
                            <img
                                loading="lazy"
                                src={PlanCheck}
                                alt=""
                                className="object-contain self-center mt-10 w-[38px]"
                            />
                            <img
                                loading="lazy"
                                src={PlanCheck}
                                alt=""
                                className="object-contain self-center mt-10 w-[38px]"
                            />
                                
                            </div>

                            <div className="px-14 py-2.5 mt-8 font-sans text-5xl leading-none text-center text-primary rounded-lg shadow-ms bg-blue-900 bg-opacity-10">
                                $199
                            </div>
                        </div>
                    </Link>
                    <Link to="/" className="flex flex-col font-semibold whitespace-nowrap rounded-none max-w-[247px] absolute right-[275px] top-[-50px]">
                        <div className="flex flex-col px-3.5 py-4 w-full bg-white rounded-xl transition-all shadow-md hover:shadow-xl">
                            <div className="px-11 py-6 text-3xl text-white bg-purple flex items-center justify-center rounded-lg font-sans shadow-md leading-[55px]">
                            Basic
                            </div>
                            
                            <div className="flex flex-col gap-5">
                            <img
                                loading="lazy"
                                src={PurleCheck}
                                alt=""
                                className="object-contain self-center mt-10 w-[38px]"
                            />
                            <img
                                loading="lazy"
                                src={PurleCheck}
                                alt=""
                                className="object-contain self-center mt-10  w-[38px]"
                            />
                            <img
                                loading="lazy"
                                src={PurleCheck}
                                alt=""
                                className="object-contain self-center mt-10  w-[38px]"
                            />
                            <img
                                loading="lazy"
                                src={GreyCheck}
                                alt=""
                                className="object-contain self-center mt-10  w-[38px]"
                            />
                            <br/>
                            <img
                                loading="lazy"
                                src={GreyCheck}
                                alt=""
                                className="object-contain self-center mt-10 w-[38px]"
                            />
                            <img
                                loading="lazy"
                                src={GreyCheck}
                                alt=""
                                className="object-contain self-center mt-10 w-[38px]"
                            />
                                
                            </div>

                            <div className="px-14 py-2.5 mt-8 font-sans text-5xl leading-none text-center text-primary rounded-lg shadow-sm bg-blue-900 bg-opacity-10">
                                $159
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DesctopPlans;
