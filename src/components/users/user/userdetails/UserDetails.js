import PostDetails from "./PostDetails";

export default function UserDetails({usersPosts}){

    return(
        <div>
            {usersPosts.map(value=> <PostDetails post={value}/>)}


        </div>
    )

}