import {Link} from "react-router-dom";
export default function User({item}) {

    return(
        <div>
            {item.id} - {item.name}
            <button onClick={()=>(item.id)
            }> clisk me</button>
        </div>
    );
}
