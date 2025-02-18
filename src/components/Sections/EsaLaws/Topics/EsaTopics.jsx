import { useMemo, useState } from "react";
import Arrow from "../../../../assets/arrow.svg";
import Card from "./Card";
import Esa1 from "../../../../assets/EsaLaws/esa1.png";
import Esa2 from "../../../../assets/EsaLaws/esa2.png";
import Esa3 from "../../../../assets/EsaLaws/esa3.png";
import Esa4 from "../../../../assets/EsaLaws/esa4.png";
import Rights1 from "../../../../assets/EsaLaws/rights1.png";
import Rights2 from "../../../../assets/EsaLaws/rights2.png";
import Rights3 from "../../../../assets/EsaLaws/rights3.png";
import Travel1 from "../../../../assets/EsaLaws/travel1.png";
import Travel2 from "../../../../assets/EsaLaws/travel2.png";
import Travel3 from "../../../../assets/EsaLaws/travel3.png";
import Letter1 from "../../../../assets/EsaLaws/letters1.png";
import Letter2 from "../../../../assets/EsaLaws/letters2.png";
import Letter3 from "../../../../assets/EsaLaws/letters3.png";
import Mental1 from "../../../../assets/EsaLaws/mental.png";
import Mental2 from "../../../../assets/EsaLaws/mental2.png";
import Mental3 from "../../../../assets/EsaLaws/mental3.png";
import CardMobile from "./CardMobile";

const EsaTopics = () => {
    const topics = [
        {
            title: "ESA Basics",
            articles: [
                {
                    title: "What is an Emotional Support Animal?",
                    tags: ["ESA Basic", "Community", "Health"],
                    to: "/laws/post/1",
                    image: Esa1,
                },
                {
                    title: "ESA vs. Service Animals: What's the Difference?",
                    tags: ["ESA Basic", "Community", "Health"],
                    to: "/laws/post/2",
                    image: Esa2,
                },
                {
                    title: "Does My Pet Qualify as an ESA?",
                    tags: ["ESA Basic", "Community", "Health"],
                    to: "/laws/post/3",
                    image: Esa3,
                },
                {
                    title: "How to Get an ESA Letter?",
                    tags: ["ESA Basic", "Community", "Health"],
                    to: "/laws/post/4",
                    image: Esa4,
                },
            ],
            category: "esa-basic",
        },
        {
            title: "Housing & ESA Rights",
            articles: [
                {
                    title: "Can My Landlord Deny My ESA?",
                    tags: ["Esa rights", "Community", "Health"],
                    to: "/laws/post/5",
                    image: Rights1,
                },
                {
                    title: "What to Do If Your Landlord Refuses Your ESA Letter?",
                    tags: ["Esa rights", "Community", "Health"],
                    to: "/laws/post/6",
                    image: Rights2,
                },
                {
                    title: "ESA Housing Laws: What You Need to Know?",
                    tags: ["Esa rights", "Community", "Health"],
                    to: "/laws/post/7",
                    image: Rights3,
                },
            ],
            category: "esa-rights",
        },
        {
            title: "Traveling with Your ESA",
            articles: [
                {
                    title: "Do Airlines Still Allow ESAs?",
                    tags: ["Traveling", "Community", "Health"],
                    to: "/laws/post/8",
                    image: Travel1,
                },
                {
                    title: "How to Prepare for Travel with Your ESA?",
                    tags: ["Traveling", "Community", "Health"],
                    to: "/laws/post/9",
                    image: Travel2,
                },
                {
                    title: "What to Do If an Airline Denies Your ESA?",
                    tags: ["Traveling", "Community", "Health"],
                    to: "/laws/post/10",
                    image: Travel3,
                },
            ],
            category: "esa-traveling",
        },
        {
            title: "ESA Letters & Process",
            articles: [
                {
                    title: "What Does an ESA Letter Include?",
                    tags: ["ESA letter", "Community", "Health"],
                    to: "/laws/post/11",
                    image: Letter1,
                },
                {
                    title: "How Long Does an ESA Letter Last?",
                    tags: ["ESA letter", "Community", "Health"],
                    to: "/laws/post/12",
                    image: Letter2,
                },
                {
                    title: "What to Expect from an ESA Evaluation?",
                    tags: ["ESA letter", "Community", "Health"],
                    to: "/laws/post/13",
                    image: Letter3,
                },
            ],
            category: "esa-letter",
        },
        {
            title: "Mental Health & Well-Being",
            articles: [
                {
                    title: "How ESAs Support Anxiety & Depression?",
                    tags: ["Well-being", "Community", "Health"],
                    to: "/laws/post/14",
                    image: Mental1,
                },
                {
                    title: "The Science Behind Emotional Support Animals?",
                    tags: ["Well-being", "Community", "Health"],
                    to: "/laws/post/15",
                    image: Mental2,
                },
                {
                    title: "Tips for Strengthening Your Bond with Your ESA?",
                    tags: ["Well-being", "Community", "Health"],
                    to: "/laws/post/16",
                    image: Mental3,
                },
            ],
            category: "esa-mental",
        },
    ];

    const [filter, setFilter] = useState("all");

    const filteredPortfolio = useMemo(() => {
        if (filter === "all") return topics;

        return topics.filter((portfolio) => portfolio.category === filter);
    }, [filter]);

    return (
        <div className="relative flex flex-col items-center w-full px-5 pb-16 mx-auto max-w-7xl">
            <div className="flex flex-col">
                <div className="flex flex-col gap-4 mb-5 font-sans whitespace-nowrap xl:flex-row xl:gap-0 xl:items-center text-s max-w-[36%]  sm:max-w-[60%] md:max-w-[80%] lg:max-w-full mx-auto">
                    <div className="pl-3 font-semibold text-primary xl:pl-0">
                        Browse by Topic:
                    </div>
                    <div className="flex items-center ml-3 font-medium text-center justify-between gap-1 lg:gap-2 text-brown min-h-[60px] xl:min-h-[auto]  overflow-x-scroll lg:overflow-x-visible ">
                        <div
                            onClick={() => setFilter("all")}
                            className={`flex justify-center px-3 cursor-pointer ${
                                filter === "all" ? "active-tab" : "opacity-50 "
                            } hover:text-purple hover:opacity-100 transition-all items-center min-h-[35px]`}
                        >
                            All Topic
                        </div>
                        <div
                            onClick={() => setFilter("esa-basic")}
                            className={`flex  justify-center px-3 cursor-pointer ${
                                filter === "esa-basic"
                                    ? "active-tab"
                                    : "opacity-50 "
                            } hover:text-purple hover:opacity-100 transition-all items-center min-h-[35px]`}
                        >
                            ESA Basic
                        </div>
                        <div
                            onClick={() => setFilter("esa-rights")}
                            className={`flex justify-center px-3 cursor-pointer ${
                                filter === "esa-rights"
                                    ? "active-tab"
                                    : "opacity-50 "
                            } hover:text-purple hover:opacity-100 transition-all items-center min-h-[35px]`}
                        >
                            Housing & ESA Rights
                        </div>
                        <div
                            onClick={() => setFilter("esa-traveling")}
                            className={`flex justify-center px-3 cursor-pointer ${
                                filter === "esa-traveling"
                                    ? "active-tab"
                                    : "opacity-50 "
                            } hover:text-purple hover:opacity-100 transition-all items-center min-h-[35px]`}
                        >
                            Traveling with Your ESA
                        </div>
                        <div
                            onClick={() => setFilter("esa-letter")}
                            className={`flex justify-center px-3 cursor-pointer ${
                                filter === "esa-letter"
                                    ? "active-tab"
                                    : "opacity-50 "
                            } hover:text-purple hover:opacity-100 transition-all items-center min-h-[35px]`}
                        >
                            ESA Letters & Process
                        </div>
                        <div
                            onClick={() => setFilter("esa-mental")}
                            className={`flex justify-center px-3 cursor-pointer ${
                                filter === "esa-mental"
                                    ? "active-tab"
                                    : "opacity-50 "
                            } hover:text-purple hover:opacity-100 transition-all items-center min-h-[35px]`}
                        >
                            Mental Health & Well-Being
                        </div>
                    </div>
                </div>
                <img
                    loading="lazy"
                    src={Arrow}
                    alt=""
                    className="object-contain absolute z-10 self-center top-28 xl:mt-7 xl:top-10 w-2.5 aspect-[0.18]"
                />
            </div>
            <div className="hidden lg:block">
                    {filteredPortfolio.map((topic, index) => (
                        <Card
                            key={index}
                            articles={topic.articles}
                            title={topic.title}
                        />
                    ))}
                </div>
                <div className="w-full lg:hidden">
                    {filteredPortfolio.map((topic, index) => (
                        <CardMobile
                            key={index}
                            articles={topic.articles}
                            title={topic.title}
                            category={topic.category}
                        />
                    ))}
                </div>
        </div>
    );
};

export default EsaTopics;
