// import { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Footer } from "./footer";
import JsonData from "../data/data.json";
import { Testimonials } from "./testimonials";

// const TestimonialCard = ({ children }) => {
//     return (
//         <div className="col-md-4 test-card">
//             {children}
//         </div>
//     );
// };

export const Landing = () => {
    // const [landingPageData, setLandingPageData] = useState({});
    // useEffect(() => {
    //     setLandingPageData(JsonData);
    // }, []);
    return (
        <div>
            <Navigation />
            <Header data={JsonData.Header} />
            <h2 className="testimonial">
                <span>TESTIMONIALS</span>
            </h2>
            <div className="container">
                {/* <div className="row">
                    <TestimonialCard>"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae deleniti dolores ratione consequuntur, voluptates tempore ad suscipit sint amet, dolorem iste distinctio culpa veniam unde nobis rerum architecto soluta."</TestimonialCard>
                    <TestimonialCard>"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae deleniti dolores ratione consequuntur, voluptates tempore ad suscipit sint amet, dolorem iste distinctio culpa veniam unde nobis rerum architecto soluta."</TestimonialCard>
                    <TestimonialCard>"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae deleniti dolores ratione consequuntur, voluptates tempore ad suscipit sint amet, dolorem iste distinctio culpa veniam unde nobis rerum architecto soluta."</TestimonialCard>
                </div> */}
                <Testimonials data= {JsonData.Board}></Testimonials>
            </div>
            <Footer data={JsonData.Contact} />
        </div>
    );
};