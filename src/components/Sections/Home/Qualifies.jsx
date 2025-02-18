import QualifiesImage from "../../../assets/image.png";
import Icon from "../../../assets/icons/guard.svg";
import ButtonLink from "../../Button/ButtonLink";
import IconCheck from "../../../assets/icons/yellow-check.svg";

const leftConditions = [
    "Anxiety",
    "Panic Attacks",
    "Depression",
    "PTSD",
    "Stress",
];

const rightConditions = [
    "Schizophrenia",
    "Phobias",
    "Personality",
    "Disorders",
];

function Qualifies() {
    return (
        <div className="w-full pt-16 pb-10">
            <div className="w-full px-5 mx-auto max-w-7xl">
                <div className="flex flex-col gap-4 lg:flex-row">
                    <img
                        src={QualifiesImage}
                        alt="qualifies"
                        className="object-contain w-full aspect-fill lg:max-w-[678px]"
                    />
                    <div className="flex flex-col mt-3.5 mr-0 w-full max-md:max-w-full gap-6 lg:gap-10 lg:max-w-[555px]">
                        <div className="flex flex-col pl-1.5 max-md:max-w-full gap-3">
                            <h1 className="self-start font-sans text-3xl font-bold lg:text-4xl text-primary">
                                Who Qualifies for an ESA?
                            </h1>
                            <p className="text-lg lg:text-sm lg:leading-[33px] text-brown font-Cerebri-Regular max-md:max-w-full">
                                If you experience mental or emotional health
                                challenges, you may qualify for an Emotional
                                Support Animal (ESA) under federal law. ESA
                                Letters are commonly approved for
                            </p>
                        </div>
                        <div className="flex flex-col rounded-none lg:max-w-[474px]">
                            <div className="w-full py-5 pl-8 pr-16 bg-white shadow-card rounded-xl">
                                <div className="flex flex-col lg:gap-5 md:flex-row">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        {leftConditions.map(
                                            (condition, index) => (
                                                <div
                                                    className="flex items-center gap-2.5 lg:mb-1"
                                                    key={index}
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={IconCheck}
                                                        className="object-contain aspect-[1.73] w-[19px]"
                                                        alt=""
                                                    />
                                                    <span className="text-s md:text-sm leading-[33px] text-brown font-Cerebri-Medium">
                                                        {condition}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <div className="flex flex-col w-6/12 lg:ml-5 max-md:ml-0 max-md:w-full">
                                        {rightConditions.map(
                                            (condition, index) => (
                                                <div
                                                    className="flex items-center gap-2.5 lg:mb-1"
                                                    key={index}
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={IconCheck}
                                                        className="object-contain aspect-[1.73] w-[19px]"
                                                        alt=""
                                                    />

                                                    <span className="text-s md:text-sm leading-[33px] text-brown font-Cerebri-Medium">
                                                        {condition}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start gap-4 mt-8 lg:mt-1 lg:gap-10 xl:gap-28 lg:flex-row">
                    <div className="flex items-start gap-6 pt-3 pb-3 pl-3 lg:pt-5 lg:pb-5 lg:pl-5 pr-3 lg:pr-8 max-w-[553px] text-purple bg-light-purple rounded-3xl max-md:max-w-full">
                        <div>
                            <img
                                src={Icon}
                                alt=""
                                className="w-full min-w-[46px]"
                            />
                        </div>
                        <div>
                            <h2 className="font-extrabold sm md:text-xl font-Cerebri-ExtraBold">
                                Under the Fair Housing Act,
                            </h2>
                            <p className="mt-1 text-s md:text-sm leading-5 md:leading-[27px] font-Cerebri-Regular">
                                landlords must accept your ESA regardless of pet
                                policies. No in-person visit is required.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-3.5 mr-0 max-md:max-w-full gap-10 lg:max-w-[555px]">
                        <div>
                            <ButtonLink
                                link="Check Your Eligibility Now"
                                color="text-dark"
                                to="/checkout/start"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Qualifies;
