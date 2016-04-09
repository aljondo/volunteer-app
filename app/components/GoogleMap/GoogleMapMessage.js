import React from 'react'

const GoogleMapMessage = (props) => {

    var outerStyle = {
        height: "100%",
        width: "100%",
        textAlign: "center",
        backgroundColor: "#e0ebeb"
    };

    var innerStyle = {
        top: "50%",
        position: "relative",
        transform: "translateY(-50%)",
        fontWeight: "600"
    };

    return (
        <div style={outerStyle}>
            <div style={innerStyle}>
                {props.message}
            </div>
        </div>
    )
};

export default GoogleMapMessage