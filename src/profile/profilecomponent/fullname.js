
  const  Handlealert=(fname)=>{alert(`Hello ${fname}`)}

function Fullname(props){
    return(
        <>
        <h1 id="fname">{props.fname}</h1>
        <button onClick={ ()=>    Handlealert((props.fname))  }  >click me !</button>
</>
        
    )
}
 
export default Fullname