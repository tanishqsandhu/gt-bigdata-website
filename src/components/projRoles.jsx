function RoleCard(props) {
    return (
        <div className="container">
            <div className="row role-card">
                <h3>
                    <span>
                        {props.data.title}
                    </span>
                </h3>
                <div>{props.data.desc}</div>
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
                students develop production-level code.
            </h3>
            <RoleCard data={props.data.analysisRole}></RoleCard>
            <RoleCard data={props.data.platformRole}></RoleCard>
            <RoleCard data={props.data.datavizRole}></RoleCard>
        </div>
    );
}