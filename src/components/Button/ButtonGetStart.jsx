import Icon from "../../assets/icons/button-2.svg";
import { Link } from "react-router";

const ButtonGetStart = () => {
    return (
        <Link to="/checkout/start">
            <div className="flex max-w-[150px] lg:max-w-[196px] pl-4 min-h-[40px] lg:min-h-[54px] w-full py-1.5 lg:pl-[24px] group items-center transition-all group-hover:shadow-lg bg-accent rounded-[45px] relative pr-[83px]">
                <div className="my-auto font-sans font-bold text-left text-s lg:text-sm text-nowrap text-dark">
                    Get Started
                </div>
                <div className="absolute right-[-10px] lg:right-[-30px] top[-50%] transition-all group-hover:shadow-lg rounded-full">
                    <img
                        loading="lazy"
                        src={Icon}
                        alt=""
                        className="object-contain w-[50px] h-[50px]  lg:w-[72px] lg:h-[72px]"
                    />
                </div>
            </div>
        </Link>
    );
};

export default ButtonGetStart;
