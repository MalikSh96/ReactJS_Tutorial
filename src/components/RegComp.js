import React, { Component } from 'react'

//regular component
class RegComp extends Component {
    render() {
        console.log('Regular Component Render');
        return (
            <div>
                Regular Component {this.props.name}  
            </div>
        )
    }
}

export default RegComp
