const BDBICard = (props) => {
  return (
    <div className="col-xs-3">
      {props.data.text}
    </div>
  );
};



export const WhyBDBI = (props) => {

  return (
    <div className="container">
      <h1 style={{textAlign: 'center'}}>Why BDBI?</h1>
      <div className="row">
        <BDBICard data = {props.data.impactCard}/>
        <BDBICard data = {props.data.skillCard}/>
        <BDBICard data = {props.data.professionalCard}/>
        <BDBICard data = {props.data.networkCard}/>
      </div>
    </div>
  );
};