import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { About } from "./about";
import { Contact } from "./contact";
import JsonData from "../data/data.json";

export const Landing = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
    return (
        <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            {/* <Features data={landingPageData.Features} /> */}
            <About data={landingPageData.About} />
            <Contact data={landingPageData.Contact} />
        </div>
    );
};