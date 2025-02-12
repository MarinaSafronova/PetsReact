import TitleBefore from "../../assets/esa-before.svg";
import TitleAfter from "../../assets/esa-after.svg";
import Button from "../Button/Button";
import ButtonStart from "../Button/ButtonStart";
import TitleBeforeForm from "../../assets/trust-before.svg";
import TitleAfterForm from "../../assets/trust-after.svg";
import Pattern from "../../assets/pattern-2.svg";
import Pattern2 from "../../assets/pattern-3.svg";
import ImageSection from "../../assets/start.svg";
import Footer from "../Footer/Footer";

function Form() {
    return (
        <>
            <div className="relative flex flex-col pb-[310px] lg:pb-1 w-full pt-20 lg:pt-20 bg-secondary bg-[url(assets/clouds.svg)] bg-no-repeat  bg-[center_top_1rem] ">
                <div className="relative z-10 flex flex-col items-center w-full px-5 pb-16 mx-auto gap-7 max-w-7xl">
                    <div className="relative flex justify-center w-full lg:items-center">
                        <div className="flex items-center justify-center">
                            <img
                                src={TitleBefore}
                                className="absolute left-0 max-w-[140px] lg:max-w-full"
                            />
                        </div>
                        <h2 className="flex flex-col items-center justify-center  text-5xl font-bold leading-[55px] absolute top-[20px] translate-x-[-50%] left-[50%] lg:top-0 lg:relative w-full min-w-[366px] lg:text-large font-sans text-center text-white max-w-96 lg:max-w-[100%]">
                            Ready to Get Started?
                            <span className="bg-accent w-[34px] h-[2px] flex items-center"></span>
                        </h2>
                        <div className="flex items-center justify-center">
                            <img
                                src={TitleAfter}
                                className="absolute right-0 max-w-[140px] lg:max-w-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full  gap-7 mt-[120px] lg:mt-0">
                        <p className="mt-2 text-3xl text-center text-white font-Cerebri-Regular">
                            Get your ESA Letter Today
                        </p>
                        <div className="flex flex-col min-w-[365px] items-center justify-center text-[#222D3F]">
                            <ButtonStart link="Get Started"
                                color="text-dark"/>
                        </div>
                    </div>
                    <img
                        src={Pattern2}
                        className="absolute top-5 left-[-60px] lg:top-[inherit] max-w-[130px] lg:max-w-[180px] z-10 lg:bottom-[-75px] lg:left-20"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        src={Pattern}
                        className="absolute right-[-60px] bottom-[-70px] max-w-[130px] lg:max-w-[180px] lg:bottom-[-140px] lg:right-20"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        src={ImageSection}
                        className="absolute bottom-[-390px] left-[50%] md:max-w-[450px] translate-x-[-50%] lg:translate-x-0 max-w-[399px] md:left-[30%] lg:left-0 xl:max-w-[565px] xl:left-[-80px] xl:bottom-[-360px] w-full"
                    />
                </div>
            </div>
            <div className="pt-28 lg:pt-16 bg-dark-blue">
                <div className="relative flex flex-col items-center w-full px-4 mx-auto lg:px-0 max-w-7xl">
                    <div className="max-w-full lg:max-w-[680px] relative  z-10 ml-auto flex flex-col items-center w-full  gap-7 mb-16">
                        <div className="relative flex justify-center w-full lg:items-center">
                            <div className="flex items-center justify-center">
                                <img
                                    src={TitleBeforeForm}
                                    className="absolute left-0 max-w-[140px] lg:max-w-full"
                                />
                            </div>
                            <h2 className="flex flex-col items-center justify-center font-bold text-3xl absolute top-[20px] translate-x-[-50%] left-[50%] lg:top-0 lg:relative w-full min-w-[366px] lg:text-4xl font-sans text-center text-primary max-w-96 lg:max-w-[100%]">
                                Newsletter
                                <span className="bg-accent w-[34px] h-[2px] flex items-center"></span>
                            </h2>
                            <div className="flex items-center justify-center">
                                <img
                                    src={TitleAfterForm}
                                    className="absolute right-0 max-w-[140px] lg:max-w-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-full gap-7 mt-[50px] lg:mt-0">
                            <p className="mt-2 text-xl leading-[30px]  text-brown font-Cerebri-Regular max-w-[441px] text-center mx-auto">
                                Sign up for our mailing list, and we&apos;ll
                                send you cool updates on pupp stuff!
                            </p>
                            <div className="flex  min-w-[365px] items-center justify-center  gap-3 w-full max-w-full">
                                <form className="flex flex-col justify-center w-full gap-3 px-4 ixtems-center md:flex-row">
                                    <input
                                        className="placeholder:text-brown mx-auto md:mx-[inherit] md:ml-auto flex items-center justify-start flex-1 px-9 py-4 min-h-[71px] grow bg-white rounded-[35px] max-w-[410px] w-full"
                                        type="text"
                                        placeholder="Enter your email"
                                        aria-label="Enter your email"
                                    />
                                    <div className="max-w-[410px] w-full md:max-w-[100%] mx-auto md:w-auto md:mx-[inherit] md:mr-auto ">
                                        <Button link="Suscribe" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Form;
