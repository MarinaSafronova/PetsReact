import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Logo from "../../assets/logo/HepfulPets.svg";
import ButtonGetStart from "../Button/ButtonGetStart";
import Decor from "../../assets/icons/menu-decor.svg";
function Header() {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
    const { pathname } = useLocation();

    const [scrolltopdata, setscrolltopdata] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 15) {
                setscrolltopdata("");
            } else {
                setscrolltopdata("shadow-md");
            }
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    
    
    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
        if (nav === false) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: "Home", to: "/" },
        { id: 2, text: "ESA Laws", to: "/laws" },
        { id: 3, text: "FAQs", to: "/FAQs" },
        { id: 4, text: "About", to: "/about" },
        { id: 5, text: "Contact Us", to: "Contact Us" },
    ];
    return (
        <header
            className={`flex items-center min-h-[72px] py-3 ${scrolltopdata} lg:py-4 z-50 bg-dark-blue lg:min-h-[102px] lg:px-2 fixed top-0 left-0 right-0`}
        >
            <div className="flex items-center justify-between w-full gap-2 px-5 mx-auto max-w-7xl">
                {/* Logo */}
                <Link to="/">
                    <img
                        loading="lazy"
                        src={Logo}
                        alt="HepfulPets"
                        className="w-full max-w-[140px] xl:max-w-[223px]"
                    />
                </Link>
                <nav>
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.to}
                                className="m-2 font-sans text-lg font-semibold duration-300 cursor-pointer text-nowrap text-dark hover:text-secondary"
                            >
                                {item.text}
                            </NavLink>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-8">
                    <ButtonGetStart />

                    {/* Mobile Navigation Icon */}
                    <div onClick={handleNav} className="block md:hidden">
                        {nav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                                fill="none"
                                className="relative right-2 top-2 z-[100]"
                            >
                                <circle
                                    cx="25"
                                    cy="25"
                                    r="25"
                                    transform="rotate(-180 25 25)"
                                    fill="#FFC24F"
                                />
                                <path
                                    d="M16 15L25.0454 24.8485L16 34.697"
                                    stroke="#234683"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M34.6362 34.697L25.5454 24.8485L34.6362 15"
                                    stroke="#234683"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="20"
                                viewBox="0 0 30 20"
                                fill="none"
                                className="fill-[#234683] transition-all hover:fill-accent"
                            >
                                <path
                                    d="M1.66667 20C1.19445 20 0.798894 19.84 0.480006 19.52C0.161117 19.2 0.00111686 18.8044 5.74712e-06 18.3333C-0.00110536 17.8622 0.158895 17.4666 0.480006 17.1466C0.801117 16.8266 1.19667 16.6666 1.66667 16.6666H28.3333C28.8055 16.6666 29.2017 16.8266 29.5217 17.1466C29.8417 17.4666 30.0011 17.8622 30 18.3333C29.9989 18.8044 29.8389 19.2005 29.52 19.5216C29.2011 19.8428 28.8055 20.0022 28.3333 20H1.66667ZM1.66667 11.6667C1.19445 11.6667 0.798894 11.5067 0.480006 11.1867C0.161117 10.8667 0.00111686 10.4711 5.74712e-06 9.99999C-0.00110536 9.52888 0.158895 9.13332 0.480006 8.81332C0.801117 8.49332 1.19667 8.33332 1.66667 8.33332H28.3333C28.8055 8.33332 29.2017 8.49332 29.5217 8.81332C29.8417 9.13332 30.0011 9.52888 30 9.99999C29.9989 10.4711 29.8389 10.8672 29.52 11.1883C29.2011 11.5094 28.8055 11.6689 28.3333 11.6667H1.66667ZM1.66667 3.33333C1.19445 3.33333 0.798894 3.17333 0.480006 2.85333C0.161117 2.53333 0.00111686 2.13778 5.74712e-06 1.66666C-0.00110536 1.19555 0.158895 0.799999 0.480006 0.48C0.801117 0.16 1.19667 0 1.66667 0H28.3333C28.8055 0 29.2017 0.16 29.5217 0.48C29.8417 0.799999 30.0011 1.19555 30 1.66666C29.9989 2.13778 29.8389 2.53389 29.52 2.855C29.2011 3.17611 28.8055 3.33555 28.3333 3.33333H1.66667Z"
                                    fill=""
                                />
                            </svg>
                        )}
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={
                        nav
                            ? "fixed md:hidden overflow-y-auto left-0 z-50 top-0 w-full bg-primary h-full pt-14 pl-[40px] pr-[30px] pb-[30px]  duration-300"
                            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
                    }
                >
                    <div className="flex flex-col gap-10">
                        <nav>
                            <ul>
                                {/* Mobile Logo */}

                                {/* Mobile Navigation Items */}
                                {navItems.map((item) => (
                                    <li
                                        key={item.id}
                                        className="p-3 border-b border-white tr3ansition-all hover:border-accent"
                                    >
                                        <NavLink
                                            to={item.to}
                                            onClick={() => handleNav()}
                                            className="font-sans text-xl font-normal text-white duration-300 cursor-pointer text-ellipsis hover:text-accent"
                                        >
                                            {item.text}{" "}
                                            <span className="inline-block ml-1">
                                                {">"}
                                            </span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="flex items-center justify-between gap-4 py-4">
                            <img
                                src={Decor}
                                loading="lazy"
                                alt=""
                                className="max-w-[130px] w-full"
                            />
                            <ButtonGetStart />
                        </div>
                        <div className="grid items-start justify-between grid-cols-2">
                            <div className="flex flex-col gap-10">
                                <div className="pt-0 w-full text-white max-w-[200px]">
                                    <span className="block mb-2 text-base font-black lg:mb-1 font-mons">
                                        Easy links
                                    </span>
                                    <div>
                                        <Link
                                            to="#"
                                            className="mb-2 lg:mb-1 block text-base font-normal transition-all font-mons lg:leading-[37px] hover:text-accent text-nowrap"
                                        >
                                            ESALaws FAQs
                                        </Link>
                                        <Link
                                            to="#"
                                            className="mb-2 lg:mb-1 block text-base  font-normal transition-all font-mons lg:leading-[37px] hover:text-accent text-nowrap"
                                        >
                                            About Contact Login
                                        </Link>
                                        <Link
                                            to="#"
                                            className="mb-2 lg:mb-1 block text-base font-normal transition-all font-mons lg:leading-[37px] hover:text-accent text-nowrap"
                                        >
                                            TermsofUse
                                        </Link>
                                        <Link
                                            to="#"
                                            className=" block text-base font-normal transition-all font-mons lg:leading-[37px] hover:text-accent text-nowrap"
                                        >
                                            PrivacyPolicy
                                        </Link>
                                    </div>
                                </div>
                                <div className=" max-w-[200px]">
                                    <span className="block mb-2 text-base font-black text-white lg:mb-1 font-mons">
                                        Contact Us
                                    </span>
                                    <a
                                        href="mailto:info@helpfulpet.com"
                                        className="mb-2 lg:mb-1 block text-white text-base  font-normal transition-all font-mons lg:leading-[37px] hover:text-accent text-nowrap"
                                    >
                                        info@helpfulpet.com
                                    </a>
                                    <a
                                        href="tel:+510030390750"
                                        className="block text-white text-base  font-normal transition-all font-mons lg:leading-[37px] hover:text-accent text-nowrap"
                                    >
                                        +51 003 039 07 50
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-[200px] ml-auto">
                                <span className="block mb-2 text-base font-black text-white lg:mb-1 font-mons">
                                    Follow Us
                                </span>
                                <div className="flex items-center gap-4 mt-3">
                                    <a
                                        href="#"
                                        className="block w-[19px] h-[19px]"
                                    >
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
                                    <a
                                        href="#"
                                        className="block w-[19px] h-[19px]"
                                    >
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
                                    <a
                                        href="#"
                                        className="block w-[19px] h-[19px]"
                                    >
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
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
