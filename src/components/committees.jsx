
//export as own component once done
function CommitteeImage({title, desc, img}) {
    return (
        <div className="comm-img">
            <img src={img} alt={title}/>
            <div>{title}</div>
        </div>
    );
}

// key={`${d.title}-${i}`}
function CommitteeGallery(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="commItems">
                    {props.data
                        ? props.data.map((d, i) => (
                            <div className='col-xs-12 col-sm-6'>
                                <CommitteeImage title={d.title} desc={d.desc} img={d.img} />
                            </div>
                        ))
                        : 'Loading...'}
                </div>
            </div>
        </div>
    )
};


export const Committees = (props) => {
    return (
        <div className="container">
            <div className="row">
                <h1 style={{textAlign: 'center', margin: '2em 1em 0em 1em', color: '#5ca9fb'}}>Committees</h1>
                <CommitteeGallery data={props.data.Gallery}/>
            </div>
        </div>
    )
}