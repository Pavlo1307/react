import {Link} from "react-router-dom";

export default function AllPost({item}){

    return(
        <div>
            {item.id} - {item.title} - <Link to={'/posts/'+item.id+'/comments'}>comments</Link>



        </div>
    );
}