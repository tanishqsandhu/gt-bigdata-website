import { Navigation } from "./navigation";
import { Footer } from "./footer";
import JsonData from "../data/data.json";
export const AlumniPage = (props) => {
  return (
    <div>
    <div id='team' className='text-center'>
      <Navigation />
      <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Alumni</h2>
          <p>
            Check out our alumni from past years!
          </p>
        </div>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autocomplete="off" checked/> 2021
            </label>
            <label class="btn btn-secondary">
                <input type="radio" name="options" id="option2" autocomplete="off"/> 2020
            </label>
            <label class="btn btn-secondary">
                <input type="radio" name="options" id="option3" autocomplete="off"/> 2019
            </label>
        </div>
      
        <div className="container">
        <div id='row' className="cardrow ">
            {JsonData.Team
            ? JsonData.Team.map((d, i) => (
              <div className='card col-xs-4'>
                <img src={d.img} />
                <div className='caption'>
                    <h4>{d.name}</h4>
                <div class="social-links">
                  {d.linkedin ? <a href={d.linkedin} className="linkedin"><i class="fa fa-linkedin"></i></a> : ""}
                  {d.instagram ? <a href={d.instagram} className="insta"><i class="fa fa-instagram"></i></a> : ""}
                  {d.twitter ? <a href={d.twitter} className="twitter"><i class="fa fa-twitter"></i></a> : ""}
                </div>
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