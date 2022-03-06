import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Footer } from "./footer";
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
            <Footer data={landingPageData.Contact} />
        </div>
    );
};