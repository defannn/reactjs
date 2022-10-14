import React from "react";


class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1> Footer </h1>
                {this.props.paragraphFooter()}
            </div>
        )
    }
}
export default Footer;