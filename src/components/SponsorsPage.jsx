import {Navigation} from "./navigation";
import {Footer} from "./footer";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import {Flex} from '@adobe/react-spectrum'



const SponsorList = () => {
    return (
        <Flex alignItems='center' justifyContent="center" width="100%" height="100%">
            <h2 className="text">Current Sponsors</h2>
        </Flex>
    )
};

export const SponsorsPage = () => {
    const [sponsorsPageData, setSponsorsPageData] = useState({});
    useEffect(() => {
        setSponsorsPageData(JsonData);
    }, []);

    return (
        <div>
            <Navigation/>
            <SponsorList/>
            <Footer data={sponsorsPageData.Contact} />
        </div>
    );
};

