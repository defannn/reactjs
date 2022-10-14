const TraceButton = () => {console.log("di klik");
alert("kuciyose");
} 
const MyButton = () => {
    return(
<div>
    <button onClick={() => TraceButton()} >
        click
    </button>
</div>

    )
}

export default MyButton;