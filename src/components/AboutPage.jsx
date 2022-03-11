// import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { About } from "./about";
import { WhyBDBI } from "./whyBDBI";
import { ProjRoles } from "./projRoles";
import { Committees } from "./committees";
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
            <WhyBDBI data={JsonData.About.whyBDBI}/>
            <ProjRoles data={JsonData.About.projRoles}/>
            <Committees data={JsonData}></Committees>
            <Footer data={JsonData.Contact}/>
        </div>
    );
};
