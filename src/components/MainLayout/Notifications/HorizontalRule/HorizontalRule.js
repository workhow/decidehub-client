import React, {Component} from 'react'

class HorizontalRule extends Component {
    render() {
        return (
            <div>
                <hr className="my-8"
                    style={{
                    border: 0,
                    backgroundColor: "#DAE1DD",
                    height: '1px'
                }}/>
            </div>
        )
    }
}

export default HorizontalRule;
