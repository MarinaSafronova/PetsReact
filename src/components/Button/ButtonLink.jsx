import PropTypes from "prop-types";
import { Link } from "react-router";
import Icon from "../../assets/icons/button.svg";

const ButtonLink = ({ link, color,to , myClass}) => {
    
    return (
        <Link to={to}>
            <div className={`flex flex-col  text-center ${color} rounded-none  w-full`}>
                <div className="flex gap-2 p-1.5 bg-accent rounded-[35px] transition-all hover:shadow-lg pr-4 relative h-[71px]">
                    <img
                        loading="lazy"
                        src={Icon}
                        className="absolute object-contain shrink-0 bg-primary rounded-full aspect-square h-[60px] w-[60px]"
                        alt="ESA Letter Icon"
                    />
                    <div className="flex-auto w-full my-auto">
                        <p
                            className={`pl-[63px] md:pl-[65px]  w-full h-full font-bold whitespace-nowrap ${myClass} font-sans text-lg sm:text-sm xl:text-2xl tracking-[0.5px] text focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            aria-label="Get Your ESA Letter Now"
                        >
                            {link}<span className="inline-block ml-1 lg:ml-2">{'>'}</span>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

ButtonLink.propTypes = {
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    myClass: PropTypes.string,
};

export default ButtonLink;
