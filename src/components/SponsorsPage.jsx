import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { Sponsors } from "./sponsors";
import JsonData from "../data/data.json";

export const SponsorsPage = () => {
    const [sponsorsPageData, setSponsorsPageData] = useState({});
    useEffect(() => {
        setSponsorsPageData(JsonData);
    }, []);

    return (
        <div>
            <Navigation/>
            <Sponsors data = {sponsorsPageData.Sponsors}/>
            <Footer data={sponsorsPageData.Contact} />
        </div>
    );
};

