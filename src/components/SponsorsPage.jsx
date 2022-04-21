import { useState, useEffect } from "react";
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
            <Navigation />
            
            <div className="container-fluid">
                <div className="row">      
                    <h1 style={{textAlign: 'center', margin: '3em 1em 1em 1em', color: '#6372ff'}}>Our Sponsors</h1>
                    <h3 style = {{textAlign: 'center', margin: '2em 1em 2em 1em'}}>Thanks to our sponsors for making what we do possible!</h3>               
                </div>
                <a href="#" class="btn btn-primary2">View Information</a>
                <a href="#" class="btn btn-primary3">Become a Sponsor</a>
            </div>
            <DiamondSponsors data={JsonData.Sponsors.DiamondSponsors}/>
            <PlatinumSponsors data={JsonData.Sponsors.PlatinumSponsors}/>
            <PastSponsors data={JsonData.Sponsors.PastSponsors}/>

            <Footer data={JsonData.Contact} />
        </div>     
    );
};

