import { Component } from "react";
class Images extends Component {
    render(){
        return(
            <img src={this.props.src} alt={this.props.alt} className="shadow-lg rounded" />
        )
    }
}

export default Images;