
export default function MovieCard(props){
    // console.log(props)
    let {watchList} = props;
    
    function isContains(movieObj){
        for (let i = 0; i < watchList.length;i++){
            if(movieObj.id == watchList[i].id){
                return true;
            }
        }
        return false;
    }



    return(
        <div className=" my-3 hover:scale-110 
        duration-300 overflow-hidden rounded-2xl 
        h-[40vh] w-[200px] bg-cover bg-center 
        flex flex-col justify-between items-end"
        style ={{backgroundImage: `url(https://image.tmdb.org/t/p/original${props.poster_path})`}}
        >
            {isContains(props.movieObj)?

                <div onClick = {()=>props.handleRemoveFromWatchList(props.movieObj)}className="m-4 bg-stone-900 
                h-8 w-8 flex items-center 
                justify-center rounded-lg 
                hover:cursor-pointer">&#10060;</div>:

                <div onClick= {()=>props.handleAddToWatchList(props.movieObj)}className="m-4 bg-stone-900 
                h-8 w-8 flex items-center 
                justify-center rounded-lg 
                hover:cursor-pointer">&#129505;</div>
    
            }
           
 
            <div className="bg-stone-900/60 w-full text-center p-4 text-3xl text-white">
                {props.title}
            </div>
        </div>
    )
}