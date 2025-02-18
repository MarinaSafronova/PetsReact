import { Link } from "react-router";
import AboutImg from "../../../assets/EsaLaws/hero-esa.png";
function HeroEsa() {
    return (
        <div className="w-full relative pt-[100px] pb-10 lg:pt-[140px]">
            <div className="w-full px-5 mx-auto max-w-7xl">
                <div className="flex items-center justify-start gap-1 font-proxima text-s text-brown opacity-80">
                    <Link to="/">Home</Link>
                    {"/"} ESA Pet Parent Guide
                </div>
                <div className="flex flex-col-reverse items-center justify-between mt-4 lg:mt-1 lg:flex-row">
                    <div>
                        <img
                            src={AboutImg}
                            alt=""
                            className="max-w-[528px] w-full"
                        />
                    </div>
                    <div className="lg:max-w-[612px] items-start flex flex-col gap-5 lg:gap-7 relative z-10">
                        <h1 className="font-bold text-35 font-sans leading-[45px] lg:text-5xl lg:leading-[60px] text-secondary">
                            Emotional Support Animal (ESA) Pet Parent Guide
                        </h1>
                        <h2 className="font-sans font-semibold leading-[33px] lg:leading-[45px] text-22 lg:text-35 text-primary">
                            Everything You Need to Know About Emotional Support
                            Animals
                        </h2>
                        <p className="text-brown text-s lg:text-sm leading-[25px] lg:leading-[30px] font-Cerebri-Regular">
                            At{" "}
                            <span className="font-Cerebri-ExtraBold">
                                HelpfulPets.com
                            </span>{" "}
                            we know how much your pet means to you. That’s why
                            we’re here to provide clear, trustworthy information
                            about{" "}
                            <span className="font-Cerebri-ExtraBold">
                                Emotional Support Animals (ESAs),
                            </span>{" "}
                            housing rights, travel policies, and mental health
                            support. Whether you&apos;re just learning about
                            ESAs or need guidance on next steps, we’ve got you
                            covered.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-6 pt-3 pb-3 pl-3 lg:pt-5 lg:pb-5 lg:pl-5 mt-8 pr-3 lg:pr-4 max-w-[1154px] text-primary bg-light-blue rounded-3xl mx-auto">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M25.7263 0.702695C25.2762 0.252759 24.6659 0 24.0295 0C23.3931 0 22.7828 0.252759 22.3327 0.702695L5.53269 17.5029L0.732692 22.3029C0.503467 22.5243 0.32063 22.7892 0.194848 23.082C0.0690669 23.3748 0.00285978 23.6897 9.06161e-05 24.0084C-0.00267854 24.3271 0.0580456 24.6431 0.17872 24.938C0.299394 25.233 0.477601 25.501 0.702944 25.7263C0.928286 25.9517 1.19625 26.1299 1.4912 26.2505C1.78615 26.3712 2.10218 26.4319 2.42086 26.4292C2.73953 26.4264 3.05445 26.3602 3.34726 26.2344C3.64007 26.1086 3.9049 25.9258 4.12629 25.6966L4.82949 24.9934V40.7999C4.82949 42.7095 5.58806 44.5409 6.93832 45.8911C8.28858 47.2414 10.1199 48 12.0295 48H36.0295C37.9391 48 39.7704 47.2414 41.1207 45.8911C42.4709 44.5409 43.2295 42.7095 43.2295 40.7999V24.9934L43.9327 25.6966C44.3853 26.1337 44.9916 26.3757 45.6209 26.3702C46.2501 26.3647 46.8521 26.1123 47.2971 25.6673C47.742 25.2223 47.9944 24.6204 47.9999 23.9911C48.0054 23.3618 47.7635 22.7556 47.3263 22.3029L25.7263 0.702695Z"
                                fill="#234683"
                            />
                            <path
                                d="M34.7442 24.8023C34.4897 24.1366 34.0671 23.6566 33.5216 23.4148L33.5143 23.4118C33.266 23.3047 33.0017 23.2499 32.735 23.2503H32.7057C31.457 23.2709 30.1822 24.4394 29.534 26.158C29.0587 27.4148 29.0041 28.7665 29.3883 29.774C29.6422 30.4402 30.0658 30.9202 30.6135 31.162L30.6195 31.1645C30.8678 31.2715 31.1321 31.3263 31.3988 31.326C32.6594 31.326 33.9475 30.1575 34.6076 28.4162C35.077 27.1609 35.1288 25.8103 34.7442 24.8023ZM29.755 32.2148C29.0348 31.7384 28.3541 31.2877 27.9095 30.4781C26.6828 28.237 25.942 26.8843 23.9998 26.8843C22.0576 26.8843 21.315 28.237 20.0856 30.4781C19.64 31.2887 18.9579 31.7399 18.2355 32.2184C17.4071 32.7665 16.5513 33.3328 16.1818 34.4473C16.0382 34.849 15.9658 35.2774 15.9687 35.7091C15.9687 37.5236 17.2522 39 18.8291 39C19.6427 39 20.5087 38.6896 21.425 38.361C22.306 38.045 23.2169 37.7185 24.0044 37.7185C24.7919 37.7185 25.7005 38.045 26.5783 38.361C27.4928 38.6876 28.3546 38.998 29.1705 38.998C30.7451 38.998 32.0263 37.5216 32.0263 35.7071C32.0276 35.275 31.9537 34.8467 31.8086 34.4453C31.4391 33.3298 30.5828 32.763 29.755 32.2148ZM19.1408 25.1102C19.6863 25.8638 20.3785 26.2787 21.0899 26.2787C21.187 26.2786 21.284 26.2707 21.3801 26.2549C22.8639 26.0147 23.7885 24.021 23.485 21.7123C23.358 20.7417 23.0188 19.8377 22.5329 19.1675C21.9884 18.4154 21.2953 18.001 20.5843 18.001C20.4872 18.001 20.3902 18.009 20.2941 18.0247C18.8103 18.265 17.8857 20.2587 18.1892 22.5673C18.3157 23.5364 18.6549 24.4394 19.1408 25.1102ZM26.62 26.2549C26.7161 26.2707 26.813 26.2786 26.9102 26.2787C27.6221 26.2787 28.3138 25.8638 28.8593 25.1102C29.3447 24.4394 29.6821 23.5364 29.8104 22.5663C30.1139 20.2587 29.1893 18.265 27.7055 18.0237C27.6094 18.008 27.5124 18 27.4153 18C26.7043 18.001 26.0112 18.4154 25.4667 19.1675C24.9808 19.8377 24.6416 20.7417 24.515 21.7133C24.2116 24.021 25.1362 26.0147 26.62 26.2549ZM17.3801 31.1645L17.3865 31.162C17.9334 30.9202 18.3565 30.4407 18.61 29.775C18.9941 28.7655 18.94 27.4153 18.4656 26.1585C17.8087 24.4192 16.5211 23.2503 15.2618 23.2503C14.9952 23.2498 14.7308 23.3046 14.4826 23.4118L14.4762 23.4143C13.9307 23.654 13.5076 24.1356 13.2541 24.8013C12.8699 25.8108 12.924 27.1609 13.3985 28.4177C14.0553 30.157 15.343 31.326 16.6022 31.326C16.8684 31.3262 17.1323 31.2715 17.3801 31.1645Z"
                                fill="#EAF5FF"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="mt-1 leading-[25px] md:leading-[30px] text-s md:text-sm font-Cerebri-Medium">
                            Here, you&apos;ll find trusted answers to the most
                            common ESA questions, plus expert-backed advice on
                            how to keep your ESA happy, healthy, and by your
                            side.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroEsa;
