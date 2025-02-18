import { Link } from "react-router";
import AboutImg from "../../../assets/about/image.png";
function HeroAbout() {
    return (
        <div className="w-full relative pt-[100px] pb-10 lg:pb-24 lg:pt-[140px]">
            <div className="w-full px-5 mx-auto max-w-7xl">
                <div className="flex items-center justify-start gap-1 font-proxima text-s text-brown opacity-80">
                    <Link to="/">Home</Link>
                    {"/"} About Us
                </div>
                <div className="flex flex-col items-center justify-between mt-4 lg:mt-1 lg:flex-row">
                    <div className="lg:max-w-[612px] items-start flex flex-col gap-5 lg:gap-7 relative z-10">
                        <h1 className="font-sans font-semibold leading-[33px] lg:leading-[45px] text-22 lg:text-35 text-primary">
                        Who We Are
                            <span className="font-bold block text-35 leading-[45px] lg:text-5xl lg:leading-[60px] text-secondary">
                                Emotional Support Animal Advocates
                            </span>
                        </h1>
                        <p className="text-brown text-s lg:text-sm leading-[25px] lg:leading-[30px] font-Cerebri-Regular">
                            <span className="font-Cerebri-ExtraBold ">At HelpfulPets.com,</span> we understand the powerful bond
                            between people and their pets. For many, these
                            companions are more than animals—they’re lifelines.
                            That’s why our mission is to make it easier than
                            ever to obtain a legitimate <span className="font-Cerebri-ExtraBold">Emotional Support Animal
                            (ESA) letter.</span> We’re here to help you keep your
                            beloved companion by your side while accessing the
                            mental health resources you need for peace of mind.
                        </p>
                    </div>
                    <div>
                        <img
                            src={AboutImg}
                            alt=""
                            className="max-w-[528px] w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroAbout;
