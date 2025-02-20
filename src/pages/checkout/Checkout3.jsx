import { Link } from "react-router";
import { useState } from "react";
import TitleBefore from "../../assets/trust-before.svg";
import TitleAfter from "../../assets/trust-after.svg";
import Logo from "../../assets/logo/HelpfulPetsLogo_640px.svg";
import ButtonNext from "../../components/Button/ButtonNext";

function Checkout3() {
    const [selectedOption, setSelectedOption] = useState("");

    const options = [
        { id: "option1", label: "Calm anxiety" },
        { id: "option2", label: "Stress Reducer" },
        { id: "option3", label: "Mood Control" },
    ];

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex flex-col w-full gap-4 px-4 bg-white lg:px-14 bg-[url('assets/checkout/cloud-mobile.svg')] md:bg-none bg-no-repeat bg-[center_bottom]">
            <div className="w-full mx-auto bg-[url('assets/checkout/line.svg')] py-8 bg-no-repeat bg-[0_bottom] flex items-center justify-between ">
                <div className="flex items-center justify-between w-full max-w-6xl mx-auto font-Cerebri-Regular text-brown">
                    <Link to="/checkout/start">
                        <span className="text-13 gap-2 flex items-center justify-center group  font-Cerebri-Medium h-[25px] px-3 border rounded-[25px] min-w-[70px] transition-all hover:border-primary hover:text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="4"
                                height="9"
                                viewBox="0 0 4 9"
                                fill="none"
                                className="relative top-[-1px] fill-[#635D7E] group-hover:fill-primary"
                            >
                                <path
                                    d="M3.33631 8.99996C3.25092 9.00028 3.16656 8.97909 3.08942 8.93793C3.01227 8.89677 2.94431 8.8367 2.89051 8.76212L0.130017 4.90534C0.0459547 4.79032 0 4.64605 0 4.49717C0 4.34828 0.0459547 4.20401 0.130017 4.08899L2.98767 0.232212C3.08468 0.100942 3.22409 0.0183912 3.37522 0.00271999C3.52634 -0.0129512 3.67682 0.0395408 3.79353 0.148648C3.91025 0.257755 3.98365 0.414541 3.99758 0.584513C4.01152 0.754486 3.96484 0.923721 3.86783 1.05499L1.31309 4.50038L3.7821 7.94577C3.85199 8.04012 3.89639 8.15502 3.91003 8.27686C3.92368 8.3987 3.90601 8.52239 3.85911 8.63329C3.81222 8.74419 3.73805 8.83766 3.6454 8.90264C3.55275 8.96762 3.44549 9.00139 3.33631 8.99996Z"
                                    fill=""
                                />
                            </svg>
                            Back
                        </span>
                    </Link>
                    <img
                        src={Logo}
                        alt="HepfulPets"
                        className="w-full max-w-[140px] md:max-w-[223px]"
                    />
                    <Link to="#">
                        <p className="text-s">Privacy Policy</p>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center w-full gap-10 md:pt-10 lg:gap-12   md:bg-[url('assets/checkout/cloud.svg')] py-5 lg:py-8 bg-no-repeat bg-[center_center] ">
                <div className="relative flex justify-center w-full md:gap-12 ">
                    <div className="flex items-center justify-center">
                        <img
                            src={TitleBefore}
                            className="max-w-[140px] hidden md:block lg:max-w-full absolute top-0 lg:top-[inherit] left-0 lg:left-[inherit] lg:relative"
                        />
                    </div>
                    <div className="flex flex-col px-8 pt-3.5 pb-7   md:max-w-[384px] w-full h-[97px] bg-white rounded-2xl shadow-[-12px_4px_45px_rgba(0,0,0,0.1)]">
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex items-center justify-between w-full gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center  text-13 leading-[13px] font-Cerebri-SemiBold  text-white whitespace-nowrap bg-primary rounded-full h-[26px] w-[26px]">
                                        1
                                    </div>
                                    <div className="leading-9 text-s font-Cerebri-Bold text-primary basis-auto">
                                        You are 40% closer
                                    </div>
                                </div>
                                <div className="text-s text-brown font-Cerebri-Medium">
                                    2/3
                                </div>
                            </div>
                            <div className="w-full h-[6px] rounded-lg bg-neutral-200 dark:bg-[#F5F5F5]">
                                <div
                                    className="h-[6px] bg-primary rounded-lg"
                                    style={{ width: "40%" }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <img
                            src={TitleAfter}
                            className="max-w-[140px] hidden md:block lg:max-w-full absolute right-0 top-0 lg:top-[inherit] lg:right-[inherit] lg:relative"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full max-w-3xl gap-6 mx-auto text-center lg:gap-10 text-brown">
                    <h3 className="font-sans font-bold text-2xl leading-[35px] md:leading-[45px] md:text-35 ">
                        <p>In the past two weeks, how often have you</p>
                        <p> felt unexplained aches or pains?</p>
                    </h3>
                    <div className="flex flex-col items-center justify-start gap-2 md:flex-row">
                        <h3 className="text-lg font-Cerebri-Medium md:text-22">
                            Including:
                        </h3>
                        <div className="flex items-center justify-start gap-2">
                            <div className="flex items-center justify-start gap-1">
                                <div className="px-2.5 flex min-h-[30px] opacity-80  items-center  py-px whitespace-nowrap text-s font-Cerebri-Medium rounded bg-light-purple-o text-brown">
                                    head
                                </div>
                                <div className="px-2.5 flex min-h-[30px] opacity-80  items-center  py-px whitespace-nowrap text-s font-Cerebri-Medium rounded bg-light-purple-o text-brown">
                                    back
                                </div>
                                <div className="px-2.5 flex min-h-[30px] opacity-80  items-center  py-px whitespace-nowrap text-s font-Cerebri-Medium rounded bg-light-purple-o text-brown">
                                    joints
                                </div>
                                <div className="px-2.5 flex min-h-[30px] opacity-80  items-center  py-px whitespace-nowrap text-s font-Cerebri-Medium rounded bg-light-purple-o text-brown">
                                    abdomen
                                </div>
                                <div className="px-2.5 flex min-h-[30px] opacity-80  items-center  py-px whitespace-nowrap text-s font-Cerebri-Medium rounded bg-light-purple-o text-brown">
                                    leg pain
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 max-w-[434px] w-full">
                        {options.map((option) => (
                            <label
                                htmlFor={option.id}
                                key={option.id}
                                className={`${
                                    selectedOption === option.id
                                        ? "bg-secondary border-secondary text-white"
                                        : " bg-white text-brown"
                                } flex gap-5 group justify-between mt-px  group-hover:text-white hover:cursor-pointer  font-sans font-bold text-22 md:text-2xl tracking-[0.5px] peer-checked:text-white items-center px-9 py-5 w-full border-2 border-[#635D7E] h-[60px] md:h-[70px]  border-solid rounded-[35px] cursor-pointer hover:text-white hover:bg-secondary peer-checked:bg-secondary`}
                            >
                                {option.label}
                                <input
                                    className="relative peer  -ml-[1.5rem] mr-1 mt-0.5 h-[28px] w-[28px] appearance-none rounded-full border-2 border-solid group-hover:border-white border-[#635D7E] before:pointer-events-none before:absolute before:h-[28px] before:w-[28px] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] after:absolute after:z-[1] after:block after:h-[28px] after:w-[28px] after:rounded-full after:content-[''] checked:border-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:translate-x-[-50%] checked:after:translate-y-[-50% ] checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-white checked:after:bg-white checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-white checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary  dark:checked:focus:border-primary "
                                    type="radio"
                                    id={option.id}
                                    name="radioGroup"
                                    value={option.id}
                                    checked={selectedOption === option.id}
                                    onChange={handleOptionChange}
                                />
                            </label>
                        ))}

                        <ButtonNext
                            link="Next"
                            color="text-primary"
                            /* to={selectedOption ? "/payment" : ""} */
                            to={"/payment"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout3;
