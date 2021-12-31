
import {Component} from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    showPic(e){
        this.props.showPic(e)
    }
    render() { 
        const e = `img/img${this.props.index}.jpeg`
        return ( 
            <img src={e} alt="" onClick={()=>this.showPic(e)}/>
         );
    }
}
 
export default List;