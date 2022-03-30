export const Events = (props) => {
    return (
        <div className="container container-events">
            <div className="row">
                <h1 style={{textAlign: 'center', margin: '5em 1em 1em 1em', color: '#6372ff'}}>Events</h1>
                <div className="events">
                    <ul className="">
                        {props.data
                        ? props.data.map((d, i) => (
                        <li className="col-xs-6 col-sm-4">
                            <span>{d}</span>
                        </li>
                        ))
                        : 'loading'}
                    </ul>
                    &nbsp;
                </div>
            </div>
        </div>
    );
};

