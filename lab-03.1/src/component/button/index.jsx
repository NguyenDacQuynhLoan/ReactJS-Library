import './style.css'

import {Component} from 'react'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  handle_click = (e) => {
    console.log(this.props.value);
    this.props.handle_click(this.props.value)
  }
  render() { 
    const classStyle  = this.props.style ==='zero' ? this.props.style:''
    return ( 
      <button   onClick={this.handle_click} type='button' className={classStyle}>
      {this.props.value}
    
      </button>
     );
  }
}
 
export default Button;