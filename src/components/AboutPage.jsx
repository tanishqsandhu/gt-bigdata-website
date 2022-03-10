// import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { About } from "./about";
import { WhyBDBI } from "./whyBDBI";
import JsonData from "../data/data.json";

export const AboutPage = () => {
    // const [aboutPageData, setAboutPageData] = useState({});
    // useEffect(() => {
    //     setAboutPageData(JsonData);
    // }, );

    return (
        <div>
            <Navigation />
            <About data={JsonData.About}/>
            <WhyBDBI data={JsonData.About} />
            <Footer data={JsonData.Contact}/>
        </div>
    );
};
