import { useState } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import JsonData from "../data/data.json";

let years = ["2021", "2020", "2019"];


export const ProjectPage = () => {
    const [year, setYear] = useState("2021");
    const YearButton = (props) => {
        return (
          <button className='btn btn-custom page-scroll' onClick={e => setY(e)}>
            {props.year}
          </button>
        )
      };

    const setY =(e) => setYear(e.target.innerText);

    return (
        <div>
            <div id='project' className='text-center'>
            <Navigation />
            <div className='col-md-8 col-md-offset-2 section-title'>
                <h2>Projects</h2>
                <p>Check out our Projects for the current and past years!</p>
            </div>
            <div className="container">
                <div className="btn-group">
                {
                    years.map(num => (
                    <YearButton year={num}/>
                    ))
                }
                </div>
                <h1 className="year" style={{"margin": "1em 0em 1em 0em"}}>
                    {year}
                </h1>
                <div id='row' className="cardrow">
                    {JsonData.Projects[year]? JsonData.Projects[year].map((d, i) => (
                    <div className='card col-xs-4'>
                        <img src={d.img} alt=""/>
                        <div className='caption'>
                            <h4>{d.name}</h4>
                            <p>{d.description}</p>
                        </div>
                    </div>
                    ))
                    : 'hey'}
                </div>
            </div>
        </div>
            <Footer data={JsonData.Contact}/>
        </div>
    )
}