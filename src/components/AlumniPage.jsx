import {Navigation} from "./navigation";
import {Footer} from "./footer";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";


const ComingSoon = () => {
    return (
        <div className="sign">
            <div className="text">
                COMING SOON!
            </div>
        </div>
    )
};

export const AlumniPage = () => {
    const [alumniPageData, setAlumniPageData] = useState({});
    useEffect(() => {
        setAlumniPageData(JsonData);
    }, []);

    return (
        <div>
            <Navigation/>
            <ComingSoon/>
            <Footer data={alumniPageData.Contact} />
        </div>
    );
};

