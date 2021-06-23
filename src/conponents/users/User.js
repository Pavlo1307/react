import Posts from "./Posts";

export default function User({itemUsers}){

    return (
        <div>
            <h2>{itemUsers.id} - {itemUsers.name} </h2>
            <Posts postId={itemUsers.id}/>

        </div>
    )


}