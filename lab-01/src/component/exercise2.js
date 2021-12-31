
function text(){
    let abc = new Date()
    return abc 
}
function Exercise2(props){
        return (
        <div className='clock'>
            <p className='clockShowName'>Hello, I am Clock</p> 
            <p className='clockShowTime'>{ 'Now is ' + text().toLocaleTimeString()}</p>
            <br></br> <br></br>
        </div>
    )
}
export default Exercise2;
