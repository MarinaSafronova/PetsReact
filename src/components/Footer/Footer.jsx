import Logo from "../../assets/logo/HelpfulPetsLogo-inverted_640px.svg";
import Abc from "../../assets/icons/abc.png";
import Cbs from "../../assets/icons/cbs.png";
import Honest from "../../assets/icons/honest.jpg";
import Forbes from "../../assets/icons/forbes.png";
import Buzz from "../../assets/icons/buzzfeed.png";
import { Link } from "react-router";

function Footer() {
    return (
        <footer className="w-full px-5 bg-dark-blue">
            <div className="w-full px-5 md:px-24 pt-6 lg:pt-16 mx-auto max-w-[1420px] bg-primary rounded-t-[45px] pb-10">
                <div className="flex flex-col gap-24">
                    <div className="grid items-start lg:gap-4 lg:justify-between gap-y-10 gap-x-8 grid-areas-footer">
                        <div className="flex items-center justify-center mb-2 text-center area-logo">
                            <Link to="/">
                                <img
                                    src={Logo}
                                    alt="HepfulPets"
                                    className="w-[240px]"
                                />
                            </Link>
                        </div>
                        <div className="area-links pt-0 w-full text-white max-w-[200px]">
                            <span className="block mb-2 text-base font-black lg:mb-1 md:text-lg text-accent font-mons">
                                Easy links
                            </span>
                            <div>
                                <Link
                                    to="#"
                                    className="mb-2 lg:mb-1 block text-base md:text-lg font-normal transition-all font-mons lg:leading-[37px] hover:text-accent text-nowrap"
                                >
                                    ESALaws FAQs
                                </Link>
                                <Link
                                    to="#"
                                    className="mb-2 lg:mb-1 block text-base md:text-lg font-normal transition-all font-mons lg:leading-[37px] hover:text-accent text-nowrap"
                                >
                                    About Contact Login
                                </Link>
                                <Link
                                    to="#"
                                    className="mb-2 lg:mb-1 block text-base md:text-lg font-normal transition-all font-mons lg:leading-[37px] hover:text-accent text-nowrap"
                                >
                                    TermsofUse
                                </Link>
                                <Link
                                    to="#"
                                    className=" block text-base md:text-lg font-normal transition-all font-mons lg:leading-[37px] hover:text-accent text-nowrap"
                                >
                                    PrivacyPolicy
                                </Link>
                            </div>
                        </div>
                        <div className="area-contacts max-w-[200px]">
                            <span className="block mb-2 text-base font-black lg:mb-1 md:text-lg text-accent font-mons">
                                Contact Us
                            </span>
                            <a
                                href="mailto:info@helpfulpet.com"
                                className="mb-2 lg:mb-1 block text-white text-base md:text-lg font-normal transition-all font-mons lg:leading-[37px] hover:text-accent text-nowrap"
                            >
                                info@helpfulpet.com
                            </a>
                            <a
                                href="tel:+510030390750"
                                className="block text-white text-base md:text-lg font-normal transition-all font-mons lg:leading-[37px] hover:text-accent text-nowrap"
                            >
                                +51 003 039 07 50
                            </a>
                        </div>
                        <div className="lg:mt-6 area-follow max-w-[200px]">
                            <span className="block mb-2 text-base font-black lg:mb-1 md:text-lg text-accent font-mons">
                                Follow Us
                            </span>
                            <div className="flex items-center gap-4 mt-3">
                                <a href="#" className="block w-[19px] h-[19px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="20"
                                        viewBox="0 0 19 20"
                                        fill="none"
                                        className="transition-all fill-white hover:fill-accent"
                                    >
                                        <path
                                            d="M16.9643 0.69043H2.03571C1.49581 0.69043 0.978017 0.904906 0.596247 1.28668C0.214476 1.66845 0 2.18624 0 2.72614L0 17.6547C0 18.1946 0.214476 18.7124 0.596247 19.0942C0.978017 19.476 1.49581 19.6904 2.03571 19.6904H7.85658V13.2309H5.18471V10.1904H7.85658V7.87311C7.85658 5.23728 9.42578 3.78132 11.8292 3.78132C12.9802 3.78132 14.1838 3.98659 14.1838 3.98659V6.57364H12.8577C11.551 6.57364 11.1434 7.38454 11.1434 8.21621V10.1904H14.0604L13.5939 13.2309H11.1434V19.6904H16.9643C17.5042 19.6904 18.022 19.476 18.4038 19.0942C18.7855 18.7124 19 18.1946 19 17.6547V2.72614C19 2.18624 18.7855 1.66845 18.4038 1.28668C18.022 0.904906 17.5042 0.69043 16.9643 0.69043Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                                <a href="#" className="block w-[19px] h-[19px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                        className="transition-all fill-white hover:fill-accent"
                                    >
                                        <path
                                            d="M20.0993 6.3976C20.0885 5.58571 19.9365 4.7819 19.6501 4.02211C19.4018 3.38124 19.0225 2.79921 18.5365 2.31321C18.0505 1.82721 17.4685 1.44794 16.8276 1.19962C16.0776 0.91807 15.2853 0.765833 14.4843 0.749388C13.4531 0.703293 13.1261 0.69043 10.5084 0.69043C7.89061 0.69043 7.55509 0.69043 6.53136 0.749388C5.73077 0.765954 4.93878 0.918189 4.1891 1.19962C3.54813 1.44776 2.96601 1.82698 2.47999 2.313C1.99397 2.79902 1.61476 3.38114 1.36661 4.02211C1.0845 4.77156 0.932592 5.56372 0.917452 6.36437C0.871357 7.39667 0.857422 7.72362 0.857422 10.3414C0.857422 12.9591 0.857422 13.2936 0.917452 14.3184C0.933532 15.1202 1.08468 15.9113 1.36661 16.6628C1.61517 17.3036 1.99467 17.8854 2.48085 18.3713C2.96703 18.8571 3.54921 19.2361 4.19018 19.4842C4.9378 19.7771 5.72992 19.9402 6.53243 19.9666C7.56474 20.0127 7.89169 20.0266 10.5094 20.0266C13.1272 20.0266 13.4627 20.0266 14.4864 19.9666C15.2874 19.9508 16.0798 19.7989 16.8298 19.5174C17.4705 19.2688 18.0524 18.8894 18.5383 18.4035C19.0243 17.9175 19.4037 17.3356 19.6523 16.6949C19.9342 15.9446 20.0853 15.1534 20.1014 14.3505C20.1475 13.3193 20.1614 12.9924 20.1614 10.3735C20.1593 7.75578 20.1593 7.42347 20.0993 6.3976ZM10.5019 15.2917C7.76412 15.2917 5.54622 13.0738 5.54622 10.336C5.54622 7.5982 7.76412 5.3803 10.5019 5.3803C11.8163 5.3803 13.0768 5.90242 14.0062 6.83179C14.9355 7.76117 15.4576 9.02168 15.4576 10.336C15.4576 11.6504 14.9355 12.9109 14.0062 13.8402C13.0768 14.7696 11.8163 15.2917 10.5019 15.2917ZM15.6549 6.35257C15.5031 6.35271 15.3528 6.32292 15.2125 6.2649C15.0722 6.20687 14.9448 6.12176 14.8375 6.01443C14.7301 5.90709 14.645 5.77965 14.587 5.63938C14.529 5.49911 14.4992 5.34878 14.4993 5.19699C14.4993 5.04531 14.5292 4.89511 14.5872 4.75497C14.6453 4.61484 14.7304 4.4875 14.8376 4.38025C14.9449 4.27299 15.0722 4.18791 15.2123 4.12987C15.3525 4.07182 15.5027 4.04194 15.6544 4.04194C15.806 4.04194 15.9562 4.07182 16.0964 4.12987C16.2365 4.18791 16.3638 4.27299 16.4711 4.38025C16.5784 4.4875 16.6634 4.61484 16.7215 4.75497C16.7795 4.89511 16.8094 5.04531 16.8094 5.19699C16.8094 5.83588 16.2927 6.35257 15.6549 6.35257Z"
                                            fill=""
                                        />
                                        <path
                                            d="M10.5004 13.5554C12.2782 13.5554 13.7195 12.1142 13.7195 10.3363C13.7195 8.55844 12.2782 7.11719 10.5004 7.11719C8.7225 7.11719 7.28125 8.55844 7.28125 10.3363C7.28125 12.1142 8.7225 13.5554 10.5004 13.5554Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                                <a href="#" className="block w-[19px] h-[19px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="21"
                                        viewBox="0 0 19 21"
                                        fill="none"
                                        className="transition-all fill-white hover:fill-accent"
                                    >
                                        <path
                                            d="M19 6.61636V10.3201C19 10.5165 18.923 10.7049 18.786 10.8438C18.6489 10.9828 18.463 11.0608 18.2692 11.0608C16.7427 11.0644 15.238 10.6923 13.8846 9.97654V13.6534C13.8846 15.5197 13.1532 17.3096 11.8513 18.6293C10.5493 19.949 8.78352 20.6904 6.94231 20.6904C5.10109 20.6904 3.33529 19.949 2.03335 18.6293C0.73142 17.3096 0 15.5197 0 13.6534C0 10.2367 2.45812 7.21636 5.71827 6.62747C5.82344 6.60852 5.93143 6.61317 6.03464 6.6411C6.13785 6.66903 6.23376 6.71955 6.31562 6.78911C6.39748 6.85867 6.4633 6.94558 6.50845 7.04371C6.5536 7.14185 6.57697 7.24882 6.57692 7.3571V11.3099C6.57697 11.4501 6.53776 11.5874 6.46387 11.7059C6.38997 11.8244 6.28442 11.9192 6.15947 11.9793C5.86409 12.1213 5.61171 12.341 5.42866 12.6156C5.2456 12.8901 5.13858 13.2095 5.11875 13.5402C5.09892 13.871 5.16701 14.2011 5.31593 14.4961C5.46484 14.7911 5.68912 15.0402 5.96536 15.2174C6.24161 15.3946 6.5597 15.4934 6.88646 15.5035C7.21322 15.5137 7.53668 15.4347 7.82309 15.275C8.1095 15.1152 8.34838 14.8805 8.51479 14.5953C8.68121 14.31 8.76908 13.9848 8.76923 13.6534V1.43117C8.76923 1.23471 8.84622 1.0463 8.98327 0.907388C9.12031 0.768472 9.30619 0.69043 9.5 0.69043H13.1538C13.3477 0.69043 13.5335 0.768472 13.6706 0.907388C13.8076 1.0463 13.8846 1.23471 13.8846 1.43117C13.8858 2.60953 14.3482 3.73928 15.1702 4.57251C15.9922 5.40574 17.1067 5.87439 18.2692 5.87561C18.463 5.87561 18.6489 5.95366 18.786 6.09257C18.923 6.23149 19 6.4199 19 6.61636Z"
                                            fill=""
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="area-seen max-w-[224px]">
                            <span className="block mb-2 text-lg font-black lg:mb-1 text-accent font-mons">
                                As seen in
                            </span>
                            <div className="grid items-center grid-cols-2 gap-3 mt-3 sm:grid-cols-3">
                                <img src={Cbs} alt="Cbs" loading="lazy" />
                                <img src={Abc} alt="Abc" loading="lazy" />
                                <img src={Honest} alt="Honest" loading="lazy" />
                                <img src={Forbes} alt="Forbes" loading="lazy" />
                                <img
                                    src={Buzz}
                                    alt="BuzzFeed"
                                    loading="lazy"
                                    className="ml-4"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse items-center justify-between gap-6 lg:gap-6 lg:flex-row">
                        <p className="text-[14px] text-white whitespace-nowrap opacity-50">
                            ©2025 HelpfulPets.com. All rights reserved.
                        </p>
                        <div className="py-4 pl-4 pr-5 bg-dark-gray rounded-xl max-w-[879px] w-full">
                            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-2">
                                <p className="font-normal leading-7 text-white font-mons max-w-[455px] text-[15px]">
                                    <strong className="font-black text-accent">
                                        Get it touch?
                                    </strong>{" "}
                                    We&apos;re usually around weekdays 9 am - 5
                                    pm ET The fastest way to reach us is
                                    <a
                                        href="mailto:consult@helpfulpet.com"
                                        className="text-white transition-all hover:text-accent"
                                    >
                                        consult@helpfulpet.com
                                    </a>
                                </p>
                                <div className="flex items-center justify-between gap-6">
                                    <a
                                        href="#"
                                        title="FAQ"
                                        aria-label="FAQ"
                                        className="font-medium flex flex-col text-white items-center justify-center gap-2 transition-all hover:text-accent font-mons text-[14px]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0_1_59)">
                                                <path
                                                    d="M8 15.6904C6.14348 15.6904 4.36301 14.9529 3.05025 13.6402C1.7375 12.3274 1 10.5469 1 8.69043C1 6.83391 1.7375 5.05344 3.05025 3.74068C4.36301 2.42793 6.14348 1.69043 8 1.69043C9.85652 1.69043 11.637 2.42793 12.9497 3.74068C14.2625 5.05344 15 6.83391 15 8.69043C15 10.5469 14.2625 12.3274 12.9497 13.6402C11.637 14.9529 9.85652 15.6904 8 15.6904ZM8 16.6904C10.1217 16.6904 12.1566 15.8476 13.6569 14.3473C15.1571 12.847 16 10.8122 16 8.69043C16 6.5687 15.1571 4.53387 13.6569 3.03358C12.1566 1.53328 10.1217 0.69043 8 0.69043C5.87827 0.69043 3.84344 1.53328 2.34315 3.03358C0.842855 4.53387 0 6.5687 0 8.69043C0 10.8122 0.842855 12.847 2.34315 14.3473C3.84344 15.8476 5.87827 16.6904 8 16.6904Z"
                                                    fill="#FFC24F"
                                                />
                                                <path
                                                    d="M5.25412 6.47643C5.25275 6.50872 5.258 6.54096 5.26955 6.57115C5.2811 6.60134 5.2987 6.62884 5.32127 6.65198C5.34385 6.67511 5.37091 6.69339 5.40081 6.70567C5.43071 6.71796 5.4628 6.724 5.49512 6.72343H6.32012C6.45812 6.72343 6.56812 6.61043 6.58612 6.47343C6.67612 5.81743 7.12612 5.33943 7.92812 5.33943C8.61412 5.33943 9.24212 5.68243 9.24212 6.50743C9.24212 7.14243 8.86812 7.43443 8.27712 7.87843C7.60412 8.36743 7.07112 8.93843 7.10912 9.86543L7.11212 10.0824C7.11317 10.148 7.13997 10.2106 7.18674 10.2566C7.23351 10.3026 7.2965 10.3284 7.36212 10.3284H8.17312C8.23942 10.3284 8.30301 10.3021 8.3499 10.2552C8.39678 10.2083 8.42312 10.1447 8.42312 10.0784V9.97343C8.42312 9.25543 8.69612 9.04643 9.43312 8.48743C10.0421 8.02443 10.6771 7.51043 10.6771 6.43143C10.6771 4.92043 9.40112 4.19043 8.00412 4.19043C6.73712 4.19043 5.34912 4.78043 5.25412 6.47643ZM6.81112 12.2394C6.81112 12.7724 7.23612 13.1664 7.82112 13.1664C8.43012 13.1664 8.84912 12.7724 8.84912 12.2394C8.84912 11.6874 8.42912 11.2994 7.82012 11.2994C7.23612 11.2994 6.81112 11.6874 6.81112 12.2394Z"
                                                    fill="#FFC24F"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_59">
                                                    <rect
                                                        width="16"
                                                        height="16"
                                                        fill="white"
                                                        transform="translate(0 0.69043)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        FAQ
                                    </a>
                                    <a
                                        href="#"
                                        title="Chat"
                                        aria-label="Chat"
                                        className="font-medium flex flex-col text-white items-center justify-center gap-2 transition-all hover:text-accent font-mons text-[14px]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M14 1.69043C14.2652 1.69043 14.5196 1.79579 14.7071 1.98332C14.8946 2.17086 15 2.42521 15 2.69043V10.6904C15 10.9556 14.8946 11.21 14.7071 11.3975C14.5196 11.5851 14.2652 11.6904 14 11.6904H11.5C11.1895 11.6904 10.8833 11.7627 10.6056 11.9016C10.3279 12.0404 10.0863 12.242 9.9 12.4904L8 15.0234L6.1 12.4904C5.91371 12.242 5.67214 12.0404 5.39443 11.9016C5.11672 11.7627 4.81049 11.6904 4.5 11.6904H2C1.73478 11.6904 1.48043 11.5851 1.29289 11.3975C1.10536 11.21 1 10.9556 1 10.6904V2.69043C1 2.42521 1.10536 2.17086 1.29289 1.98332C1.48043 1.79579 1.73478 1.69043 2 1.69043H14ZM2 0.69043C1.46957 0.69043 0.960859 0.901143 0.585786 1.27622C0.210714 1.65129 0 2.16 0 2.69043L0 10.6904C0 11.2209 0.210714 11.7296 0.585786 12.1046C0.960859 12.4797 1.46957 12.6904 2 12.6904H4.5C4.65525 12.6904 4.80836 12.7266 4.94721 12.796C5.08607 12.8654 5.20685 12.9662 5.3 13.0904L7.2 15.6234C7.29315 15.7476 7.41393 15.8484 7.55279 15.9179C7.69164 15.9873 7.84475 16.0234 8 16.0234C8.15524 16.0234 8.30836 15.9873 8.44721 15.9179C8.58607 15.8484 8.70685 15.7476 8.8 15.6234L10.7 13.0904C10.7931 12.9662 10.9139 12.8654 11.0528 12.796C11.1916 12.7266 11.3448 12.6904 11.5 12.6904H14C14.5304 12.6904 15.0391 12.4797 15.4142 12.1046C15.7893 11.7296 16 11.2209 16 10.6904V2.69043C16 2.16 15.7893 1.65129 15.4142 1.27622C15.0391 0.901143 14.5304 0.69043 14 0.69043H2Z"
                                                fill="#FFC24F"
                                            />
                                            <path
                                                d="M5 6.69043C5 6.95565 4.89464 7.21 4.70711 7.39754C4.51957 7.58507 4.26522 7.69043 4 7.69043C3.73478 7.69043 3.48043 7.58507 3.29289 7.39754C3.10536 7.21 3 6.95565 3 6.69043C3 6.42521 3.10536 6.17086 3.29289 5.98332C3.48043 5.79579 3.73478 5.69043 4 5.69043C4.26522 5.69043 4.51957 5.79579 4.70711 5.98332C4.89464 6.17086 5 6.42521 5 6.69043ZM9 6.69043C9 6.95565 8.89464 7.21 8.70711 7.39754C8.51957 7.58507 8.26522 7.69043 8 7.69043C7.73478 7.69043 7.48043 7.58507 7.29289 7.39754C7.10536 7.21 7 6.95565 7 6.69043C7 6.42521 7.10536 6.17086 7.29289 5.98332C7.48043 5.79579 7.73478 5.69043 8 5.69043C8.26522 5.69043 8.51957 5.79579 8.70711 5.98332C8.89464 6.17086 9 6.42521 9 6.69043ZM13 6.69043C13 6.95565 12.8946 7.21 12.7071 7.39754C12.5196 7.58507 12.2652 7.69043 12 7.69043C11.7348 7.69043 11.4804 7.58507 11.2929 7.39754C11.1054 7.21 11 6.95565 11 6.69043C11 6.42521 11.1054 6.17086 11.2929 5.98332C11.4804 5.79579 11.7348 5.69043 12 5.69043C12.2652 5.69043 12.5196 5.79579 12.7071 5.98332C12.8946 6.17086 13 6.42521 13 6.69043Z"
                                                fill="#FFC24F"
                                            />
                                        </svg>
                                        Chat
                                    </a>
                                    <a
                                        href="#"
                                        title="Email"
                                        aria-label="Email"
                                        className="font-medium flex flex-col text-white items-center justify-center gap-2 transition-all hover:text-accent font-mons text-[14px]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="14"
                                            viewBox="0 0 19 14"
                                            fill="none"
                                        >
                                            <path
                                                d="M13.0504 7.21784L17.9201 2.84441V11.5414L13.0504 7.21784ZM6.77537 7.95848L8.48544 9.49295C8.75382 9.72864 9.10375 9.87104 9.48615 9.87104H9.4996H9.49881H9.5099C9.89308 9.87104 10.243 9.72782 10.5146 9.49049L10.5122 9.49213L12.2223 7.95766L17.4206 12.5725H1.57944L6.77537 7.95848ZM1.57232 1.80752H17.4301L9.81312 8.64592C9.72748 8.71594 9.62146 8.75401 9.51227 8.75395H9.50119H9.50198H9.4909C9.38132 8.75409 9.27495 8.71571 9.18926 8.6451L9.19005 8.64592L1.57232 1.80752ZM1.08067 2.84359L5.94962 7.21703L1.08067 11.5381V2.84359ZM18.1814 0.845922C17.9914 0.747716 17.7681 0.69043 17.5314 0.69043H1.47177C1.2423 0.690486 1.01599 0.745679 0.8107 0.851651L0.819409 0.847559C0.573645 0.972863 0.366674 1.16671 0.221877 1.40721C0.0770804 1.6477 0.000227494 1.92526 0 2.20853L0 12.1699C0.000419129 12.573 0.155531 12.9595 0.431302 13.2446C0.707073 13.5297 1.08098 13.69 1.47098 13.6904H17.529C17.919 13.69 18.2929 13.5297 18.5687 13.2446C18.8445 12.9595 18.9996 12.573 19 12.1699V2.20853C19 1.61356 18.6683 1.09798 18.1853 0.850014L18.1766 0.845922H18.1814Z"
                                                fill="#FFC24F"
                                            />
                                        </svg>
                                        Email
                                    </a>
                                    <a
                                        href="#"
                                        title="Text"
                                        aria-label="Text"
                                        className="font-medium flex flex-col text-white items-center justify-center gap-2 transition-all hover:text-accent font-mons text-[14px]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="10"
                                            height="16"
                                            viewBox="0 0 10 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M1.875 0.69043C0.846875 0.69043 0 1.5373 0 2.56543V13.8154C0 14.8436 0.846875 15.6904 1.875 15.6904H8.125C9.15312 15.6904 10 14.8436 10 13.8154V2.56543C10 1.5373 9.15312 0.69043 8.125 0.69043H1.875ZM1.875 1.94043H8.125C8.47188 1.94043 8.75 2.21855 8.75 2.56543V13.8154C8.75 14.1623 8.47188 14.4404 8.125 14.4404H1.875C1.52813 14.4404 1.25 14.1623 1.25 13.8154V2.56543C1.25 2.21855 1.52813 1.94043 1.875 1.94043ZM5 12.5654C4.65625 12.5654 4.375 12.8467 4.375 13.1904C4.375 13.5342 4.65625 13.8154 5 13.8154C5.34375 13.8154 5.625 13.5342 5.625 13.1904C5.625 12.8467 5.34375 12.5654 5 12.5654Z"
                                                fill="#FFC24F"
                                            />
                                        </svg>
                                        Text
                                    </a>
                                    <a
                                        href="tel:"
                                        title="Call"
                                        aria-label="Call"
                                        className="font-medium flex flex-col text-white items-center justify-center gap-2 transition-all hover:text-accent font-mons text-[14px]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="17"
                                            viewBox="0 0 13 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M3.23993 0.775156L2.52293 0.991156C1.88451 1.18368 1.31437 1.55458 0.879622 2.06019C0.444873 2.56581 0.163608 3.18509 0.0689304 3.84516C-0.22807 5.91316 0.43593 8.33116 2.03693 11.1042C3.63393 13.8702 5.39193 15.6522 7.32693 16.4322C7.94866 16.6827 8.62926 16.7495 9.28783 16.6245C9.9464 16.4995 10.5552 16.1881 11.0419 15.7272L11.5839 15.2132C11.9359 14.8801 12.1549 14.4305 12.2004 13.9481C12.2458 13.4656 12.1145 12.9831 11.8309 12.5902L10.4749 10.7102C10.2916 10.4564 10.0334 10.2663 9.73666 10.1666C9.43987 10.0669 9.11931 10.0625 8.81993 10.1542L6.76893 10.7812L6.71593 10.7912C6.48993 10.8242 5.96793 10.3352 5.31793 9.20916C4.63793 8.03116 4.49793 7.34216 4.68493 7.16416L5.72793 6.19116C6.10934 5.83562 6.36988 5.3696 6.47301 4.85847C6.57613 4.34735 6.51665 3.81677 6.30293 3.34116L5.64093 1.87016C5.44187 1.4275 5.08863 1.07233 4.64706 0.870868C4.20549 0.669402 3.70573 0.635384 3.24093 0.775156H3.23993ZM4.72993 2.28016L5.38993 3.75116C5.51847 4.03639 5.55441 4.35472 5.49271 4.66143C5.43101 4.96814 5.27476 5.24782 5.04593 5.46116L3.99993 6.43516C3.33093 7.06916 3.55293 8.15116 4.45293 9.70916C5.29893 11.1752 6.07093 11.8992 6.90093 11.7732L7.02493 11.7472L9.11293 11.1102C9.21274 11.0795 9.31964 11.0809 9.41863 11.114C9.51763 11.1472 9.60376 11.2105 9.66493 11.2952L11.0209 13.1752C11.1629 13.3716 11.2287 13.6129 11.2061 13.8543C11.1835 14.0956 11.074 14.3205 10.8979 14.4872L10.3549 15.0012C10.0073 15.3302 9.57247 15.5525 9.10218 15.6416C8.63189 15.7308 8.14589 15.6831 7.70193 15.5042C6.00393 14.8202 4.39893 13.1932 2.90393 10.6042C1.40493 8.00916 0.797931 5.80216 1.05893 3.98716C1.12649 3.51559 1.32738 3.07314 1.63795 2.7119C1.94852 2.35067 2.35583 2.08568 2.81193 1.94816L3.52893 1.73216C3.76139 1.6623 4.01132 1.67939 4.23211 1.78021C4.4529 1.88104 4.62949 2.05874 4.72893 2.28016H4.72993Z"
                                                fill="#FFC24F"
                                            />
                                        </svg>
                                        Call
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
