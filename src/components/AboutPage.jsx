// import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { About } from "./about";
import { WhyBDBI } from "./whyBDBI";
import { ProjRoles } from "./projRoles";
import { Committees } from "./committees";
import { Events } from "./events";
import { Person } from "./person";
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
            <Events data={JsonData.Events}></Events>
            <div className="container">
                <div className="row">
                    <h1 style={{textAlign: 'center', margin: '2em 1em 1em 1em', color: '#5ca9fb'}}>PAST SPEAKERS</h1>
                    <div className="speakers">
                        <ul>
                            {JsonData.Speakers ?  JsonData.Speakers.map((d, i) => (
                                <li className="col-xs-12">
                                    <Person name={d.name} title={d.title} ld = {d.linkedin} tw = {d.twitter} image = {d.img}></Person>
                                </li>
                            )): "loading"}
                        </ul>
                    </div>

                </div>
            </div>
            <Footer data={JsonData.Contact}/>
        </div>
    );
};
