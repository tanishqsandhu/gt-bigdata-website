const BDBICard = (props) => {
  return (
    <div className="col-xs-6 col-md-3 card">
      <div className="card-img">
        <img src={props.data.img} alt=""/>
      </div>
      <div className="card-text">
      {props.data.text}
      </div>
    </div>
  );
};

export const WhyBDBI = (props) => {

  return (
    <div className="container">
      <h1 style={{textAlign: 'center', margin: '1em', color: '#5ca9fb'}}>Why BDBI?</h1>
      <div className="row">
        <BDBICard data ={props.data.impactCard}/>
        <BDBICard data ={props.data.skillCard}/>
        <BDBICard data ={props.data.professionalCard}/>
        <BDBICard data ={props.data.networkCard}/>
      </div>
    </div>
  );
};