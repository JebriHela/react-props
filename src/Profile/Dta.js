import React from 'react';
import propTypes from 'prop-types';

const Dta = ({ fullName, bio, profession, display, children }) => {
    return <div>
        {/* {console.log(props)} */}
        <h1 className='profile' style={{ display: "flex", justifyContent: "space-evenly" }}>{fullName}</h1>
        <h2 className='profile' style={{ display: "flex", justifyContent: "space-evenly" }}>{bio}</h2>
        <h3 style={{
                width: "18rem",
                height: "5rem",
         marginLeft: "40%" ,
         paddingLeft: "5%" ,
         paddingTop: "3%" ,
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)"
            }}>{profession}</h3>

        {children}
    </div>;
};

Dta.defaultProps = {
    fullName: "Foulen",
    bio: "cv",
    profession: "Directeur",
    children: <p>Attention !!</p>
}

Dta.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    children: propTypes.node.isRequired
}


export default Dta;