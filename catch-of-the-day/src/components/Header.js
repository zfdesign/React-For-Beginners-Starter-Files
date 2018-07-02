import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1>Catch 
                    <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">the</span>
                     </span>
                     day</h1>
                <div className="tagline">
                    <span>{this.props.tagline}</span>
                </div>
            </header>
        )
    }
}

export default Header;