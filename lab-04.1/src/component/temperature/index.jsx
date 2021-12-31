import {Component} from 'react'
class Temperature extends Component {
    constructor(props) {
        super(props);
    }
    handle = (e)=>{
        // this.setState ( {temperature : e.target.value})
        this.props.onTempChange(e.target.value)
    }
    render() { 
        const temperature = this.props.value;
        const type = this.props.type
        return ( 
            <fieldset>
                <legend>Enter temperature in {type}</legend>
                <input value={temperature} onChange={this.handle} />
            </fieldset>
         );
    }
}
 
export default Temperature;

