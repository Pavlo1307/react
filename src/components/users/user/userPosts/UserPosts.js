import UserPost from "./userPost/UserPost";

export default function UserPosts({userPosts}){

    return(
        <div>
            {userPosts.map(value=> <UserPost userPost={value}/>)}
        </div>
    );
}