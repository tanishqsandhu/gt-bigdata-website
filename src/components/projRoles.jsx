import { useEffect } from "react";
import { useState } from "react";

function RoleCard(props) {

    const [hover, setHover] = useState({
        hover: false,
        load: false
    });

    useEffect(() => {
        setHover({
            hover: false,
            load: false
        })
    },[])

    // function setClass() {
    //     if (hover.hover) {
    //         return "shade";
    //     } else if (hover.load) {
    //         return "light";
    //     }
    //     return "";
    // }

    function visibility() {
        if (hover.hover) {
            return "descText fade-in"
        } else if (hover.load) {
            return "descText fade-out"
        }
        return "default";
    }

    function changeState() {
        if (hover.hover) {
            setHover({
                hover: false,
                load: true
            });
        } else {
            setHover({
                hover: true,
                load: true
            })
        }
    }

    return (
        <div>
            <div className="role-card">
                <div className="role-title">
                    <button className='btn btn-custom page-scroll' onClick={changeState}>
                        {props.data.title}
                    </button>
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
        <div className=" project-roles container">
            <div className="row">
                <div className="project-img">
                    <img src="../img/project_team.png" alt="project" />
                </div>
                <h1 style={{textAlign: 'center',color: '#6372ff', margin: '2em 1em 2em 1em'}}>Project roles</h1>
                <h3 >Learn more about each of the 3 roles every project has! 
                    Each role has workshops that help
                    students develop production-level code. <span style={{'color':'#6372ff'}}> Click the buttons to learn more!</span>
                </h3>
                <RoleCard data={props.data.analysisRole}></RoleCard>
                <RoleCard data={props.data.platformRole}></RoleCard>
                <RoleCard data={props.data.datavizRole}></RoleCard>

            </div>
        </div>
    );
}