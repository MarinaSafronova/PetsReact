import { Link } from "react-router";
import AboutImg from "../../../assets/checkout/hero.png";

function CheckoutHero() {
  return (
        <div className="w-full relative pt-[100px] pb-10 lg:pb-24 lg:pt-[140px]">
            <div className="w-full px-5 mx-auto max-w-7xl">
                <div className="flex items-center justify-start gap-1 font-proxima text-s text-brown opacity-80">
                    <Link to="/">Home</Link>
                    {"/"}  Checkout
                </div>
                <div className="flex flex-col items-center justify-between gap-1 mt-4 lg:mt-1 lg:flex-row">
                    <div className="lg:max-w-[501px] items-start flex flex-col gap-5 lg:gap-7 relative z-10">
                        <h1 className="font-sans font-semibold leading-[33px] lg:leading-[45px] text-22 lg:text-35 text-primary">
                            Congratulation!
                            <span className="font-bold block lg:mt-4 text-35 leading-[45px] lg:text-5xl lg:leading-[60px] text-secondary">
                            You’re Pre-Approved for an ESA Letter
                            </span>
                        </h1>
                        <p className="text-brown text-s lg:text-2xl leading-[25px] lg:leading-[35px] font-Cerebri-Regular">
                        Your ESA Letter is Backed by <span className="font-Cerebri-Bold">Licensed Mental Health Professionals</span>
                        </p>
                    </div>
                    <div>
                        <img
                            src={AboutImg}
                            alt=""
                            className="max-w-[644px] w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutHero