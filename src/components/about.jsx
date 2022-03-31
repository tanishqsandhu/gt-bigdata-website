export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            {" "}
            {/* <img src="img/about.jpg" className="img-responsive" alt="" />{" "} */}
          </div>
          <div className="col-xs-12">
            <div className="about-text">
              <h2>About Us</h2>
              <div className="keywords" style={{color: "#6372ff"}}>{props.data ? props.data.keywords : 'loading...'}</div>
              <p className="">{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p className="">{props.data ? props.data.paragraph2 : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
