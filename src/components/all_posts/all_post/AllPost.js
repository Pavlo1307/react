import {Link, Route, Switch} from "react-router-dom";
import Comments from "../../comments/Comments";

export default function AllPost({item}){
    return(
        <div>
            {item.id} - {item.title} - <Link to={'/posts/'+item.id+'/comments'}>comments</Link>
            <Route  exact path={'/posts/' + item.id +  '/comments'}
                    render={(props)=>
                        <Comments id={item.id}/>}/>
        </div>
    );
}