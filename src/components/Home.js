import React from "react";

const Home = () => {

    return (
        <div className="home-container">
            <div className="banner" style={{
                backgroundImage: `url(https://starcatcher.us/Content/Starcatcher.png)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "75vh",
                maxWidth: "100%",
            }} />
            <div className="banner-caption shadow " style={{
                minHeight: "25vh",
                width: "100%",
                background: "#3a3f44",
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "space-evenly",
                position: "relative",
                top: "-56px"
            }}>
                <h1 className="text-white mb-3">Welcome to Starcatcher!</h1>
                <p className="text-light mb-2">This is where you can find information about our projects and servers.</p>
            </div>
            <div style={{ position: "relative" }}>
                moo oooooooo ooo ooo

                oooooooooooo
                o
            </div>
        </div >
    )
}

export default Home