import Testimonials from "./Testimonials";
import OrderSummary from "../.../../../../assets/checkout/order.png";
import YesIcon from "../.../../../../assets/icons/check-green.svg";
import Apple from "../.../../../../assets/checkout/apple.png";

const rightConditions = [
    'Live Anywhere – Even in "No-Pet"',
    "No Breed, Weight, or Size Restrictions",
    "Pet Fee & Deposit Exemptions",
    "Certified by a Licensed Professional",
    "100% Money-Back Guarantee",
];

function PaymentForm() {
    return (
        <div className=" bg-secondary">
            <div className="w-full max-w-6xl mx-auto md:px-2 lg:px-5">
                <div className="flex flex-col-reverse items-center justify-center w-full gap-4 lg:items-start lg:flex-row">
                    <div className="relative flex flex-col justify-between w-full h-full lg:min-h-full">
                        <div className="w-full h-full pb-16 md:pb-20 md:pt-9 ">
                            <Testimonials />
                        </div>
                        <div className="flex mt-[auto] px-3 whitespace-nowrap relative md:px-0 lg:bottom-[-300px] pt-5 items-center border-t border-white lg:border-0 text-12 pb-4 justify-around md:justify-center gap-0 sm:gap-4 lg:gap-8 text-white md:leading-[36px] md:font-base font-Cerebri-Regular">
                            <p>Secure Payment</p>
                            {"|"}
                            <p>Encrypted Transactions</p>
                            {"|"}
                            <p>Money-Back Guarantee</p>
                        </div>
                    </div>
                    <div className="w-full px-3 pt-4 bg-white pb-11 lg:max-w-[606px] lg:border-[0.5px] lg:border-secondary">
                        <form className="w-full">
                            <div className="flex justify-around gap-2 lg:gap-10 pb-4 border-b-[0.5px] text-secondary border-dotted border-[#937ECC]">
                                <div className="flex items-center justify-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                    >
                                        <path
                                            d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z"
                                            stroke="#1B9FA9"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10"
                                            stroke="#1B9FA9"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <p className="text-lg leading-[20px] font-Cerebri-Bold">
                                        Safe & secure{" "}
                                        <span className="font-Cerebri-Regular">
                                            {" "}
                                            checkout
                                        </span>
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-2 px-2 py-3 rounded-md md:px-4 bg-secondary-rgba">
                                    <span className="text-lg text-nowrap font-Cerebri-Regular">
                                        Powered by
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="84"
                                        height="33"
                                        viewBox="0 0 84 33"
                                        fill="none"
                                    >
                                        <path
                                            d="M47.7713 7.16521H52.8826L53.1766 8.49017L54.2308 7.76965C55.4437 7.06617 56.8571 6.74197 58.2731 6.84246C59.689 6.94296 61.0365 7.46311 62.1267 8.33006C63.9537 9.85116 65.138 11.9567 65.4614 14.2464C65.9922 16.9466 65.7157 19.7346 64.6634 22.2922C64.2308 23.4628 63.4778 24.5019 62.4825 25.3021C61.4871 26.1023 60.2855 26.6344 59.0019 26.8435C57.3783 27.1467 55.6947 26.8289 54.3148 25.9589L53.6848 25.5986V31.8312L47.8553 33L47.7713 7.16521ZM53.5966 16.9043V20.687C53.5916 20.808 53.6154 20.9285 53.6664 21.0395C53.7173 21.1504 53.7939 21.2489 53.8906 21.3275C54.2595 21.6338 54.6931 21.861 55.1621 21.9938C55.631 22.1267 56.1244 22.162 56.609 22.0975C57.0935 22.033 57.5579 21.8701 57.9707 21.6199C58.3835 21.3697 58.7352 21.0379 59.0019 20.647C59.754 19.4312 60.1079 18.0289 60.0183 16.6201C60.0329 15.3482 59.6498 14.1011 58.9179 13.0375C58.6623 12.6394 58.3167 12.3008 57.9062 12.0464C57.4958 11.7919 57.0309 11.628 56.5455 11.5666C56.0601 11.5052 55.5665 11.5479 55.1006 11.6916C54.6348 11.8353 54.2084 12.0763 53.8528 12.397C53.7014 12.5493 53.6121 12.748 53.6008 12.9574C53.5588 14.3664 53.6008 15.6554 53.6008 16.9043M72.6013 18.9538C72.6071 19.4962 72.7574 20.0283 73.038 20.5002C73.3186 20.9721 73.7204 21.3684 74.2057 21.6517C75.4195 22.2722 76.8181 22.4844 78.1747 22.2522C79.7119 22.1721 81.2196 21.8039 82.6056 21.1714V25.0702C82.626 25.223 82.5914 25.3778 82.5075 25.5095C82.4236 25.6411 82.2953 25.7416 82.1436 25.7948C79.8475 26.8029 77.3058 27.1932 74.7937 26.9236C72.7488 26.7248 70.839 25.8579 69.3884 24.4698C68.2017 23.2576 67.3981 21.7508 67.07 20.1226C66.3408 17.161 66.6965 14.0507 68.078 11.3082C68.7432 9.86511 69.8578 8.65182 71.2708 7.83279C72.6838 7.01376 74.3269 6.62861 75.9773 6.72955C77.6277 6.83048 79.2056 7.41262 80.4972 8.39705C81.7888 9.38148 82.7316 10.7206 83.1978 12.2329C83.6934 13.5258 83.9664 14.8828 84 16.2598V18.9938H72.6013V18.9538ZM78.5107 14.9309C78.576 14.3399 78.4778 13.7429 78.2257 13.1993C77.9737 12.6557 77.5767 12.1845 77.0743 11.8326C76.6354 11.538 76.1117 11.3799 75.5749 11.3799C75.0381 11.3799 74.5144 11.538 74.0755 11.8326C73.5528 12.1824 73.1341 12.6554 72.8602 13.2054C72.5864 13.7554 72.4668 14.3637 72.5131 14.9709L78.5107 14.9309ZM0.563846 20.4429L1.62223 20.9232C3.05021 21.5877 4.59579 21.996 6.18337 22.1361C6.82737 22.1921 7.47416 22.1921 8.12375 22.1361C8.35649 22.0823 8.56839 21.9665 8.73479 21.8023C8.90118 21.6382 9.01522 21.4323 9.06362 21.2088C9.11203 20.9852 9.09281 20.7532 9.00821 20.5396C8.92361 20.3261 8.7771 20.1398 8.58575 20.0026C8.16295 19.7223 7.71356 19.4808 7.23756 19.278C5.88518 18.7536 4.5328 18.3093 3.01661 17.7089C2.20008 17.2849 1.50284 16.6796 0.984011 15.9441C0.465178 15.2087 0.140051 14.3649 0.0361912 13.4842C-0.0676684 12.6035 0.0528017 11.712 0.38739 10.8851C0.721978 10.0583 1.26082 9.3205 1.95823 8.73436C3.44787 7.57097 5.31171 6.93079 7.23756 6.92104C9.29134 6.80095 11.3451 7.08515 13.2771 7.76565C13.3964 7.79407 13.5006 7.86307 13.5702 7.95965C13.6398 8.05623 13.67 8.17373 13.6551 8.29003V12.9975C12.7269 12.7173 11.8407 12.317 10.9125 12.1168C9.98013 11.9127 8.67394 11.8326 7.57356 11.7125C7.26938 11.6471 6.95375 11.6471 6.64957 11.7125C6.45395 11.7638 6.278 11.8677 6.14283 12.0119C6.00766 12.1561 5.91901 12.3344 5.88753 12.5254C5.85605 12.7164 5.88307 12.912 5.96534 13.0888C6.04762 13.2655 6.18166 13.4159 6.35137 13.5218C6.80217 13.81 7.28096 14.0516 7.78776 14.2464C9.22134 14.7 10.6283 15.2231 12.0087 15.8155C13.096 16.3174 13.9723 17.1562 14.4941 18.1947C15.016 19.2331 15.1526 20.4096 14.8815 21.5317C14.7204 22.7646 14.1428 23.9142 13.2359 24.8067C12.329 25.6993 11.142 26.2863 9.85413 26.4793C6.80497 27.1638 3.60041 26.8796 0.736044 25.6787C0.667677 25.6507 0.608321 25.606 0.564045 25.549C0.51977 25.4921 0.492162 25.4249 0.484047 25.3544V20.5229C0.507925 20.4926 0.532008 20.4656 0.563846 20.4429ZM16.1877 3.54258L21.845 2.37373V7.16521H26.0701V11.8726H21.8408V19.9185C21.8161 20.2502 21.8747 20.5828 22.0117 20.8887C22.1487 21.1946 22.3602 21.4649 22.6287 21.6774C22.8972 21.8898 23.2149 22.0382 23.5555 22.1104C23.8962 22.1825 24.2499 22.1762 24.5875 22.0921C25.1419 22.0387 25.6907 21.9453 26.2339 21.8119V25.8748C26.2339 26.155 26.2339 26.3191 25.8979 26.3992C23.9236 27.1034 21.7487 27.1034 19.7744 26.3992C18.7627 26.0475 17.8805 25.4226 17.2353 24.6009C16.5901 23.7791 16.21 22.7961 16.1415 21.7718C16.1197 21.504 16.1197 21.235 16.1415 20.9673V3.54258H16.1877ZM28.1407 7.20524H32.7396C33.0756 7.20524 33.1596 7.20524 33.2016 7.5655C33.2772 7.9738 33.3766 8.37676 33.4998 8.77438L33.6678 8.37409C34.1552 7.78098 34.8207 7.34366 35.5757 7.12051C36.3306 6.89736 37.139 6.89899 37.893 7.12518V12.1128C37.2453 12.077 36.5961 12.077 35.9484 12.1128C35.4608 12.1588 34.9872 12.2948 34.554 12.5131C34.2065 12.6596 33.9148 12.9045 33.7187 13.2147C33.5225 13.5249 33.4314 13.8851 33.4578 14.2464V26.5193H28.1365L28.1407 7.20524ZM39.7914 7.20524H45.5747V26.5593H39.7914V7.20524ZM39.7494 5.51201V1.48908C39.7494 1.24891 39.7494 1.12882 40.0434 1.08879L45.4487 0V4.34716L39.7494 5.51201Z"
                                            fill="#24B2BC"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center justify-start gap-4 pl-4 pr-4 md:ml-12 md:mr-12  border-b-[0.5px]  text-secondary border-solid border-[#D1D1D1] pt-6 pb-7">
                                <img src={OrderSummary} alt="order-summary" />
                                <h3 className="font-sans font-bold text-black text-m md:text-35">
                                    Order Summary
                                </h3>
                            </div>
                            <div className="pt-4 pb-5 md:ml-12 md:mr-12  border-b-[0.5px]  text-secondary border-solid border-[#D1D1D1] ">
                                <div className="flex flex-col mb-6">
                                    {rightConditions.map((condition, index) => (
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
                                            <span className="text-lg leading-[38px] md:leading-[38px] md:text-sm text-brown font-Cerebri-Medium md:font-Cerebri-Regular">
                                                {condition}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between w-full gap-4">
                                    <div className="text-2xl font-Cerebri-Medium text-brown">
                                        ESA Letter
                                    </div>
                                    <div className="text-3xl font-bold leading-tight text-right text-black">
                                        <span className="text-2xl font-Cerebri-SemiBold md:text-27 text-brown">
                                            Was
                                        </span>{" "}
                                        <span className="text-2xl line-through font-Cerebri-SemiBold md:text-27 text-orange">
                                            $299
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3 pb-3 md:ml-12 md:mr-12  border-b-[0.5px]  text-secondary border-solid border-[#D1D1D1] ">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-2xl text-black font-CeraPro-Bold">
                                        Total Cost:
                                    </div>
                                    <div className="text-4xl text-right font-Cerebri-ExtraBold text-secondary">
                                        $189
                                    </div>
                                </div>
                            </div>
                            <div className="pt-2 mt-4 md:ml-12 md:mr-12">
                                <h4 className="mb-2 text-lg text-black font-Cerebri-Medium">
                                    Credit Crad Info*
                                </h4>
                                <div className="flex items-stretch justify-between w-full gap-2">
                                    <div className="bg-accent py-2 px-4 rounded-[5px] max-w-[251px] font-Cerebri-Regular w-full flex flex-col-reverse items-start font-base text-[#222D3F]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="15"
                                            viewBox="0 0 19 15"
                                            fill="none"
                                        >
                                            <path
                                                d="M0 12.6141C0 13.247 0.250222 13.854 0.695621 14.3015C1.14102 14.7491 1.74511 15.0005 2.375 15.0005H16.625C17.2549 15.0005 17.859 14.7491 18.3044 14.3015C18.7498 13.854 19 13.247 19 12.6141V6.05162H0V12.6141ZM2.79911 9.37549C2.79911 9.03643 2.93315 8.71127 3.17176 8.47152C3.41037 8.23177 3.73399 8.09708 4.07143 8.09708H6.10714C6.44458 8.09708 6.7682 8.23177 7.00681 8.47152C7.24542 8.71127 7.37946 9.03643 7.37946 9.37549V10.2278C7.37946 10.5668 7.24542 10.892 7.00681 11.1317C6.7682 11.3715 6.44458 11.5062 6.10714 11.5062H4.07143C3.73399 11.5062 3.41037 11.3715 3.17176 11.1317C2.93315 10.892 2.79911 10.5668 2.79911 10.2278V9.37549ZM16.625 0.000488281H2.375C1.74511 0.000488281 1.14102 0.251908 0.695621 0.699438C0.250222 1.14697 0 1.75395 0 2.38685V3.49481H19V2.38685C19 1.75395 18.7498 1.14697 18.3044 0.699438C17.859 0.251908 17.2549 0.000488281 16.625 0.000488281Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <div>Card</div>
                                    </div>
                                    <div className="flex items-center w-full gap-3 px-2 py-3 bg-white border border-gray-200 border-solid rounded-[5px]">
                                        <img
                                            loading="lazy"
                                            src={Apple}
                                            alt="Apple Pay"
                                            className="object-contain shrink-0 rounded aspect-[1.48] w-[43px]"
                                        />
                                        <div className="text-[#949494] font-Cerebri-Regular text-s md:text-base">
                                            Apple Pay
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2 justify-between w-full gap-3 px-2 py-3 bg-white border border-gray-200 border-solid rounded-[5px]">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="15"
                                            viewBox="0 0 19 15"
                                            fill="none"
                                        >
                                            <path
                                                opacity="0.4"
                                                d="M0 12.6141C0 13.247 0.250222 13.854 0.695621 14.3015C1.14102 14.7491 1.74511 15.0005 2.375 15.0005H16.625C17.2549 15.0005 17.859 14.7491 18.3044 14.3015C18.7498 13.854 19 13.247 19 12.6141V6.05162H0V12.6141ZM2.79911 9.37549C2.79911 9.03643 2.93315 8.71127 3.17176 8.47152C3.41037 8.23177 3.73399 8.09708 4.07143 8.09708H6.10714C6.44458 8.09708 6.7682 8.23177 7.00681 8.47152C7.24542 8.71127 7.37946 9.03643 7.37946 9.37549V10.2278C7.37946 10.5668 7.24542 10.892 7.00681 11.1317C6.7682 11.3715 6.44458 11.5062 6.10714 11.5062H4.07143C3.73399 11.5062 3.41037 11.3715 3.17176 11.1317C2.93315 10.892 2.79911 10.5668 2.79911 10.2278V9.37549ZM16.625 0.000488281H2.375C1.74511 0.000488281 1.14102 0.251908 0.695621 0.699438C0.250222 1.14697 0 1.75395 0 2.38685V3.49481H19V2.38685C19 1.75395 18.7498 1.14697 18.3044 0.699438C17.859 0.251908 17.2549 0.000488281 16.625 0.000488281Z"
                                                fill="#949494"
                                            />
                                        </svg>
                                        <input
                                            className="w-full text-base font-Cerebri-Regular placeholder:text-[#949494]"
                                            placeholder="Card Number"
                                        />
                                    </div>
                                    <div className="flex items-center w-full justify-end max-w-[130px]">
                                        <div className="flex items-center justify-center">
                                            <input
                                                className="w-full text-base font-Cerebri-Regular placeholder:text-[#949494] max-w-[28px]"
                                                placeholder="MM"
                                                maxLength={2}
                                            />
                                            <span className="text-base font-Cerebri-Regular text-[#949494]">
                                                /
                                            </span>
                                            <input
                                                className="w-full text-base font-Cerebri-Regular placeholder:text-[#949494] max-w-[30px]"
                                                placeholder="YY"
                                                maxLength={2}
                                            />
                                        </div>
                                        <input
                                            className="w-full text-base font-Cerebri-Regular placeholder:text-[#949494] max-w-[50px]"
                                            placeholder="CVV"
                                            maxLength={3}
                                        />
                                    </div>
                                </div>
                                <h4 className="mt-4 mb-2 text-lg text-black font-Cerebri-Medium">
                                    State You Currently Reside in*
                                </h4>
                                <input
                                    className="w-full pt-3 pr-10 pb-3 pl-2 text-base font-Cerebri-Regular bg-white border rounded-[5px] placeholder:text-[#949494]"
                                    placeholder="ZIP Code"
                                />
                            </div>
                            <div className="bg-white border rounded-[5px] md:ml-12 md:mr-12 pt-2 pr-10 pb-3 pl-2 mt-4">
                                <div className="flex items-center gap-2">
                                    <input
                                        id="checked-checkbox-agree"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm "
                                    />
                                    <label
                                        htmlFor="checked-checkbox-agree"
                                        className="text-s text-[#949494] font-Cerebri-Regular leading-[25px]"
                                    >
                                        I agree to the HelpfulPets.com{" "}
                                        <strong className="text-[#5B5B5B] font-Cerebri-SemiBold">
                                            Terms & Conditions, Telehealth
                                            Consent, and HIPAA Privacy Policy.
                                        </strong>
                                    </label>
                                </div>
                            </div>
                            <div className="bg-white border rounded-[5px] md:ml-12 md:mr-12 pt-2 pr-10 pb-3 pl-2 mt-4">
                                <div className="flex items-center gap-2">
                                    <input
                                        id="checked-checkbox-confirm"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm "
                                    />
                                    <label
                                        htmlFor="checked-checkbox-confirm"
                                        className="text-s text-[#949494] font-Cerebri-Regular leading-[25px]"
                                    >
                                        I confirm that I am at least 18 years
                                        old.
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-center justify-center pt-2 md:ml-12 md:mr-12 mt-7">
                                <button
                                    type="submit"
                                    className="font-sans py-5 font-bold text-dark text-2xl flex items-center justify-center w-full  bg-accent rounded-[15px]"
                                >
                                    Complete Your Order{" "}
                                    <span className="inline-block ml-2">
                                        {">"}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentForm;
