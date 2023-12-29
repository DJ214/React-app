

export default function GrandSon(props){
    return(
        <div className="grandSon">
            <h4>{props.info.onlyForGrandChildren()}</h4>
        </div>
    )
}