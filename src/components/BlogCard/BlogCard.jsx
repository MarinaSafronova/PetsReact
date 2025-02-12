import PropTypes from "prop-types";
import { Link } from "react-router";

const BlogCard = ({ imageSrc, date, title, description, tags }) => {
    return (
        <Link to="#">
            <div className="flex flex-col items-start w-full">
                <img
                    loading="lazy"
                    src={imageSrc}
                    alt={title}
                    className="object-contain self-stretch w-full max-w-[385px] rounded-2xl aspect-[1.23]"
                />
                <div className="mt-3.5 font-semibold text-13 leading-loose font-sans text-green">
                    {date}
                </div>
                <div className="mt-2 font-sans text-sm font-bold leading-snug md:text-2xl text-brown">
                    {title}
                </div>
                <div className="min-h-[80px]">
                    <div className="mt-4 leading-5 md:leading-[22px] max-w-[360px] text-brown font-Cerebri-Regular text-13 md:text-14">
                        {description}
                    </div>
                </div>

                <div className="flex gap-2.5 mt-3 lg:mt-4 leading-7">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="px-3.5 flex items-center justify-center min-h-[26px]  py-px whitespace-nowrap text-14 font-Cerebri-Regular rounded bg-light-purple-o text-brown"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
};

BlogCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlogCard;
