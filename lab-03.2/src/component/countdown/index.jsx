import {Component} from "react"
import './style.css'
export default class CountDown extends Component{
    constructor(props){
        super(props);
        this.state ={
            date : new Date(),
            second:10        }
    }
    componentDidMount(){
        this.timer = setInterval( ()=> this.timeUpdate(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    timeUpdate =() =>{
        let value = (this.state.second <= 0)? 0 : this.state.second - 1;
        this.setState({
            date : new Date(),
            second : value
        })
    }
    render(){
        return(
            <div>
                <h1>Count Down</h1>
                <span>{this.state.date.toLocaleTimeString()}</span> <br></br>
                <span>{this.state.second === 0?'Time out!':this.state.second}</span>
            </div>
        )
    }
}
