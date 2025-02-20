import PropTypes from "prop-types";
import { Link } from "react-router";
import Icon from "../../assets/icons/button.svg";

const ButtonLink = ({ link,  color, to }) => {
    
    return (
        <Link to={to}>
            <div className={`flex flex-col  text-center ${color} rounded-full small:min-w-[350px] min-w-[365px] w-full`}>
                <div className="flex gap-2 p-1.5  bg-accent rounded-full transition-all hover:shadow-lg pr-4 relative h-[85px]">
                    <img
                        loading="lazy"
                        src={Icon}
                        className="absolute object-contain shrink-0 bg-primary rounded-full aspect-square h-[75px] w-[75px]"
                        alt="ESA Letter Icon"
                    />
                    <div className="flex-auto w-full my-auto">
                        <p
                            className="pl-[55px] text-center w-full  h-full font-bold whitespace-nowrap font-sans  text-2xl tracking-[0.5px] text focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Get Your ESA Letter Now"
                        >
                            {link}<span className="inline-block ml-2">{'>'}</span>
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
    to: PropTypes.string,
};

export default ButtonLink;
