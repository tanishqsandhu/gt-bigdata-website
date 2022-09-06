// import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { DiamondSponsors } from "./diamond";
import { PlatinumSponsors } from "./platinum";
// import { PastSponsors } from "./past";
import JsonData from "../data/data.json";
import { PastSponsors } from "./past";

export const SponsorsPage = () => {
    return (
        <div>
        <div id='sponsors' className="text-center">
                <div className='col-md-8 col-md-offset-2 section-title'>
                    <h2>Sponsors</h2>
                    <p>Thanks for making what we do possible!</p>
                </div>
            <Navigation />
            <div className="container container-table">
                <div className="row vertical-center-row">      
                    {/* <h2 style={{textAlign: 'center', margin: '3em 1em 1em 1em'}}>Our Sponsors</h2>
                    <div className="keywords" style={{textAlign: 'center', margin: '1em 1em 1em 1em', color: "#6372ff", fontSize: 25}}>Thanks for making what we do possible!</div> */}
                    <div className="sponsorButtons">
                        <a href="" class="btn btn-sponsors btn-custom">View Information</a>
                        <a href="" class="btn btn-sponsors btn-custom">Become a Sponsor</a>
                    </div>
                </div>
            </div>
            <DiamondSponsors data={JsonData.Sponsors.DiamondSponsors}/>
            {/* <PlatinumSponsors data={JsonData.Sponsors.PlatinumSponsors}/> */}
            <PastSponsors data={JsonData.Sponsors.PastSponsors}/>

            <Footer data={JsonData.Contact} />
        </div>   
        </div>  
    );
};

