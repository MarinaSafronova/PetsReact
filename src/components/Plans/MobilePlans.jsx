import { useState } from "react";
import Paw from "../../assets/paw.svg";
import Check from "../../assets/check.svg";
import PurleCheck from "../../assets/purple-check.svg";
import GreyCheck from "../../assets/grey-check.svg";
import { Link } from "react-router";

function MobilePlans() {
    const [enabled, setEnabled] = useState(true);
    const Premium = [
        {
            icon: Paw,
            title: "Services",
            description: "Essential features of all our plans",
            items: ["Mental health assement", "Documentation"],
        },
        {
            icon: Paw,
            title: "Rights",
            description: "As per the ADA, FHA, and ACAA",
            items: [
                {
                    title: "Mental health assement",
                    description:
                        "Live with your animal, exempt from fees and bans",
                },
                {
                    title: "Air travel rights",
                    description: "Fly with your dog in cabin free of charge",
                },
            ],
        },
        {
            icon: Paw,
            title: "Optinal Benefits",
            description: "Make your investment got the extra mile",
            items: ["Priority support", "Discounted yearly renewal"],
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center gap-4 text-sm tems-center text-primary font-Cerebri-Bold whitespace-nowrap">
                <div>Basic</div>
                <div className="relative flex flex-col items-center justify-center overflow-hidden">
                    <div className="flex">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={enabled}
                                readOnly
                            />
                            <div
                                onClick={() => {
                                    setEnabled(!enabled);
                                }}
                                className="w-11 h-6 bg-primary rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-accent after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-accent after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                            ></div>
                        </label>
                    </div>
                </div>
                <div>Premium</div>
            </div>

            {enabled ? (
                <div className="w-full mt-8">
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex flex-col pb-12 mx-auto w-full rounded-none max-w-[480px]">
                            <div className="z-10 self-start px-6 py-2 text-2xl font-semibold text-primary font-sans mb-[-10px] whitespace-nowrap rounded-lg bg-[#FAFDFF] leading-[55px]">
                                Features
                            </div>
                            <div className="relative w-full px-2 rounded-none bg-plan">
                                <div className="flex gap-5 max-md:flex-col">
                                    <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                                        {Premium.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-start self-stretch w-full pt-5 pb-5 text-primary"
                                            >
                                                <div className="flex flex-col items-start self-stretch w-full pr-1 leading-8">
                                                    <div className="flex gap-1.5 items-center justify-center text-xl leading-loose whitespace-nowrap">
                                                        <img
                                                            loading="lazy"
                                                            src={feature.icon}
                                                            alt=""
                                                            className="object-contain w-6 shrink-0"
                                                        />
                                                        <div className="text-sm font-Cerebri-Bold small:text-s">
                                                            {feature.title}
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 font-normal leading-5 text-s text-brown font-Cerebri-Regular max-w-[150px]">
                                                        {feature.description}
                                                    </div>
                                                    {feature.items.map(
                                                        (item, index) => (
                                                            <div
                                                                className="mt-2"
                                                                key={index}
                                                            >
                                                                {typeof item ===
                                                                "string" ? (
                                                                    <div className="self-stretch ml-1 text-s font-Cerebri-Bold leading-[26px] relative before:content-[''] before:w-[7px] before:h-[7px] before:bg-accent before:mr-1 before:rounded-full before:inline-block ">
                                                                        {item}
                                                                    </div>
                                                                ) : (
                                                                    <>
                                                                        <div className="self-stretch ml-1 text-s font-Cerebri-Bold leading-[26px] relative before:content-[''] before:w-[7px] before:h-[7px] before:bg-accent before:mr-1 before:rounded-full before:inline-block ">
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </div>
                                                                        <div className="mt-1 ml-2 font-normal leading-5 text-s text-brown font-Cerebri-Regular max-w-[160px]">
                                                                            {
                                                                                item.description
                                                                            }
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="#">
                                        <div className="flex flex-col ml-2 justify-between max-md:ml-0 max-md:w-full absolute right-0 h-[117%] top-[-65px]">
                                            <div className="flex flex-col items-center justify-between h-full px-2.5 py-2.5 w-full font-semibold whitespace-nowrap bg-white rounded-xl shadow-lg">
                                                <div className="z-10 self-stretch text-2xl flex items-center justify-center font-semibold font-sans text-white bg-secondary rounded-lg shadow-md leading-[55px]">
                                                    Premium
                                                </div>
                                                <div className="flex flex-col justify-between h-full">
                                                    <div className="flex flex-col items-center justify-center gap-10">
                                                        <img
                                                            loading="lazy"
                                                            src={Check}
                                                            alt=""
                                                            className="relative object-contain w-6 top-[108px]"
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            src={Check}
                                                            alt=""
                                                            className="relative object-contain w-6 top-[100px]"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col justify-center gap-20">
                                                        <img
                                                            loading="lazy"
                                                            src={Check}
                                                            alt=""
                                                            className="relative object-contain w-6 top-8"
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            src={Check}
                                                            alt=""
                                                            className="relative object-contain w-6 top-8"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <img
                                                            loading="lazy"
                                                            src={Check}
                                                            alt=""
                                                            className="relative object-contain w-6"
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            src={Check}
                                                            alt=""
                                                            className="relative object-contain w-6 top-2"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="self-stretch py-px pt-2 pb-2 font-sans text-center bg-blue-900 rounded-lg shadow-2xl text-35 text-primary px-7 mt-7 bg-opacity-10">
                                                    $199
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full mt-8">
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex flex-col pb-12 mx-auto w-full rounded-none max-w-[480px]">
                            <div className="z-10 self-start px-6 py-2 text-2xl font-semibold text-primary font-sans mb-[-10px] whitespace-nowrap rounded-lg bg-[#FAFDFF] leading-[55px]">
                                Features
                            </div>
                            <div className="relative w-full px-2 rounded-none bg-plan">
                                <div className="flex gap-5 max-md:flex-col">
                                    <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                                        {Premium.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-start self-stretch w-full pt-5 pb-5 text-primary"
                                            >
                                                <div className="flex flex-col items-start self-stretch w-full pr-1 leading-8">
                                                    <div className="flex gap-1.5 items-center justify-center text-xl leading-loose whitespace-nowrap">
                                                        <img
                                                            loading="lazy"
                                                            src={feature.icon}
                                                            alt=""
                                                            className="object-contain w-6 shrink-0"
                                                        />
                                                        <div className="text-sm font-Cerebri-Bold small:text-s">
                                                            {feature.title}
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 font-normal leading-5 text-s text-brown font-Cerebri-Regular max-w-[150px]">
                                                        {feature.description}
                                                    </div>
                                                    {feature.items.map(
                                                        (item, index) => (
                                                            <div
                                                                className="mt-2"
                                                                key={index}
                                                            >
                                                                {typeof item ===
                                                                "string" ? (
                                                                    <div className="self-stretch ml-1 text-s font-Cerebri-Bold leading-[26px] relative before:content-[''] before:w-[7px] before:h-[7px] before:bg-accent before:mr-1 before:rounded-full before:inline-block ">
                                                                        {item}
                                                                    </div>
                                                                ) : (
                                                                    <>
                                                                        <div className="self-stretch ml-1 text-s font-Cerebri-Bold leading-[26px] relative before:content-[''] before:w-[7px] before:h-[7px] before:bg-accent before:mr-1 before:rounded-full before:inline-block ">
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </div>
                                                                        <div className="mt-1 ml-2 font-normal leading-5 text-s text-brown font-Cerebri-Regular max-w-[160px]">
                                                                            {
                                                                                item.description
                                                                            }
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/">
                                        <div className="flex flex-col ml-2 justify-between max-md:ml-0 max-md:w-full absolute right-0 h-[117%] top-[-65px]">
                                            <div className="flex flex-col items-center justify-between h-full px-2.5 py-2.5 w-full font-semibold whitespace-nowrap bg-white rounded-xl shadow-lg">
                                                <div className="z-10 self-stretch text-2xl flex items-center justify-center font-semibold font-sans text-white bg-purple rounded-lg shadow-md leading-[55px]">
                                                    Basic
                                                </div>
                                                <div className="flex flex-col justify-between h-full">
                                                    <div className="flex flex-col items-center justify-center gap-10">
                                                        <img
                                                            loading="lazy"
                                                            src={PurleCheck}
                                                            alt=""
                                                            className="relative object-contain w-6 top-[108px]"
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            src={PurleCheck}
                                                            alt=""
                                                            className="relative object-contain w-6 top-[100px]"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col justify-center gap-20">
                                                        <img
                                                            loading="lazy"
                                                            src={PurleCheck}
                                                            alt=""
                                                            className="relative object-contain w-6 top-8"
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            src={GreyCheck}
                                                            alt=""
                                                            className="relative object-contain w-6 top-8"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <img
                                                            loading="lazy"
                                                            src={GreyCheck}
                                                            alt=""
                                                            className="relative object-contain w-6"
                                                        />
                                                        <img
                                                            loading="lazy"
                                                            src={GreyCheck}
                                                            alt=""
                                                            className="relative object-contain w-6 top-2"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="self-stretch py-px pt-2 pb-2 font-sans text-center bg-blue-900 rounded-lg shadow-2xl text-35 text-primary px-7 mt-7 bg-opacity-10">
                                                    $159
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MobilePlans;
