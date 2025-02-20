import PropTypes from "prop-types";
import Icon from "../../assets/icons/button.svg";

const Button = ({ link }) => {
    return (
        <button type="submit" className="flex flex-col w-full text-center text-blue-900 rounded-none">
            <div className="flex w-full gap-2 p-1.5 bg-accent rounded-[35px] min-w-[206px] pl-[65px] lg:pl-[76px] transition-all hover:shadow-lg pr-4 relative min-h-[69px]">
                <img
                    loading="lazy"
                    src={Icon}
                    className="absolute top-[50%] translate-y-[-50%] left-[7px] object-contain shrink-0  bg-primary rounded-full aspect-square  h-[60px] w-[60px]"
                    alt="ESA Letter Icon"
                />
                <div className="flex-auto w-full my-auto ml-[-40px] md:ml-0">
                    <p
                        className="w-full h-full text-center font-bold whitespace-nowrap font-sans  text-2xl tracking-[0.5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Get Your ESA Letter Now"
                    >
                        {link}
                    </p>
                </div>
            </div>
        </button>
    );
};

Button.propTypes = {
    link: PropTypes.string.isRequired,
};

export default Button;
