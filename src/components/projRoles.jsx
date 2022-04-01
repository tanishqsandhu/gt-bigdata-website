import { useState } from "react";

function RoleCard(props) {

    const [hover, setHover] = useState(false);

    function setClass() {
        if (hover) {
            return "shade";
        } else {
            return "light";
        }
    }

    function visibility() {
        if (hover) {
            return "desc fade-in"
        } else {
            return "desc fade-out"
        }
    }


    return (
        <div>
            <div className="role-card">
                <div className="title">
                    <div className={setClass()} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        {props.data.title}
                    </div>
                </div>
                <div className={visibility()}>
                    {props.data.desc}
                </div>
            </div>
        </div>
    );
}



export const ProjRoles = (props) => {

    return (
        <div className="container">
            <h1 style={{textAlign: 'center',color: '#6372ff', margin: '2em 1em 1em 1em'}}>Project roles</h1>
            <h3 >Learn more about each of the 3 roles every project has! 
                Each category is coordinated with workshops that help
                students develop production-level code. <span style={{'color':'#6372ff'}}> Hover over the buttons to learn more!</span>
            </h3>
            <RoleCard data={props.data.analysisRole}></RoleCard>
            <RoleCard data={props.data.platformRole}></RoleCard>
            <RoleCard data={props.data.datavizRole}></RoleCard>
        </div>
    );
}