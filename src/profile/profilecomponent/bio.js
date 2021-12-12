

function Bio(props){
    const State = {color : "red"}
    return(
        <p style={State}> {props.bio}
        </p>
    )
}
export default Bio