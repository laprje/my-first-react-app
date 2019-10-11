import React, {Component} from 'react'
class Lance extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return(
            <div>
                <h1>Lance</h1>
                <h2>The Student</h2>
                <h3>Age: {this.props.age}</h3>
                <h3>Hobbies: {this.props.hobbies}</h3>
            </div>
        )
    }
}

export default Lance;