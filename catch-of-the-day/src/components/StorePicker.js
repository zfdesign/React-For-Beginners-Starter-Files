import React from "react";

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        event.preventDefault();
        // Get the text from the input
        console.log(this.myInput.value.value);
    };

    render() {
        return (
            <form className="store-selctor" onSubmit={this.goToStore}>
                <h2>Please enter a Store</h2>
                <input 
                    type="text" 
                    required 
                    placeholder="Store name"
                    ref={this.myInput}
                    defaultValue=""
                />
                <button type="submit">Visit store</button>
            </form>
        )
    }
}

export default StorePicker;