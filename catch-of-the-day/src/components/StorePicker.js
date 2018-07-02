import React from "react";

class StorePicker extends React.Component {
    super(props){

    }
    render(props) {
        return (
            <form className="store-selctor">
                <h2>Please enter a Store</h2>
                <input type="text" placeholder={ this.props.placeholderText } />
                <button type="submit">Visit store</button>
            </form>
        )
    }
}

export default StorePicker;