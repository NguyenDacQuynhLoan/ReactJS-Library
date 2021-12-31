import './style.css'
import {Component} from 'react';
import List from '../list';

class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            e :'./img/img1.jpeg'
         }
    }
    handler =(e)=>{
        console.log(e);
        this.setState({e : e})
    }
    render() { 
        const img = this.props.pictureList // array

        return ( 
            <>
            <img src={this.state.e} alt="" />
            <div>
                {
                    img.map((img,index)=>
                        <List 
                        key={index}
                        index ={img}
                        showPic = { this.handler}
                        />
                    )
                }
            </div>
            </>

        );
    }
}
 
export default Picture;