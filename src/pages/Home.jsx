import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighLighText from "../components/core/homepage/HighLighText";
import CTAButton from "../components/core/homepage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/homepage/CodeBlocks";
import HighlightText from "../components/core/homepage/HighLighText";
import TimelineSection from "../components/core/homepage/TimelineSection";
import LearningLanguageSection from "../components/core/homepage/LearningLanguageSection";
import InstructorSection from "../components/core/homepage/InstructorSection";
import Footer from "./Footer";
import ExploreMore from "../components/core/homepage/ExploreMore";

const Home = () => {
    return (
        <div>
            {/* Section : 1 */}
            <div className="relative mx-auto max-w-maxContent flex flex-col w-11/12 items-center text-white justify-between">
                <Link to={"/signup"}>
                    <div className="group mt-16 mx-auto bg-richblack-800 p-2 shadow-sm rounded-full shadow-white transition-all duration-200 hover:scale-95 w-fit">
                        <div className="flex flex-row gap-3 items-center rounded-full px-5">
                            <p className="text-richblack-200">Become an Instructor </p>
                            <FaArrowRight className="" />
                        </div>
                    </div>
                </Link>

                <div className="mt-9 text-4xl font-semibold">
                    Empower Your Future with
                    <HighLighText text={" Coding Skills"} />
                </div>

                <div className="text-richblack-300 mt-6 w-[75%] text-center  text-lg">With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</div>

                <div className="flex flex-row gap-7  mt-8">
                    <CTAButton className="" active={true} linkto={"/signup"}>
                        Leran More
                    </CTAButton>
                    <CTAButton className="" active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                <div className="mx-3 my-12 shadow-[0px_-20px_17px_2px_#4299e1]">
                    <video className="max-w-5xl shadow-2xl shadow-blue-500" muted loop autoPlay>
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>

                {/* Code section 1 */}
                <div>
                    <CodeBlocks
                        className=""
                        position={"lg:flex-row"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Unlock Your
                                <HighlightText text={" coding potential "} />
                                with our online courses
                            </div>
                        }
                        subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                        ctabtn1={{
                            btnText: "try it yourself",
                            linkto: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "learn more",
                            linkto: "/login",
                            active: false,
                        }}
                        codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n<body>\nh1><ahref="/">Header</a>\n</h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>`}
                        codeColor={"text-yellow-25"}
                    />
                </div>

                {/* Code Section 2 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Start
                                <HighlightText text={" coding  "} />
                                in seconds
                            </div>
                        }
                        subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                        ctabtn1={{
                            btnText: "try it yourself",
                            linkto: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "learn more",
                            linkto: "/login",
                            active: false,
                        }}
                        codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n<body>\nh1><ahref="/">Header</a>\n</h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>`}
                        codeColor={"text-yellow-25"}
                    />
                </div>
                <ExploreMore />
            </div>
            {/* Section : 2 */}
            <div className="bg-pure-greys-5 text-richblack-700">
                <div className="homepage_bg h-[310px]">
                    <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
                        <div className="h-[150px]"></div>
                        <div className="flex flex-row gap-7 text-white ">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-3">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div>Learn more</div>
                            </CTAButton>
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-10/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
                    <div className="flex flex-row gap-5 mb-10 mt-[95px]">
                        <div className="text-4xl font-semibold w-[45%]">
                            Get the Skills you need for a
                            <HighlightText text={" Job that is in demand"} />
                        </div>

                        <div className="flex flex-col gap-10 w-[40%] items-start">
                            <div className="text-[16px]">The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div>Learn more</div>
                            </CTAButton>
                        </div>
                    </div>

                    <TimelineSection />

                    <LearningLanguageSection />
                </div>
            </div>

            {/* Section : 3 */}
            <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
                <InstructorSection />

                <h2 className="text-center text-4xl font-semobold mt-10">Reviews from Other Learners</h2>
                {/* Review Slider here */}
            </div>

            {/* footer */}
            <Footer />
        </div>
        // Section : 4
    );
};

export default Home;
