import UserPost from "./userPost/UserPost";

export default function UserPosts({userPosts}){

    return(
        <div className={'user-posts'}>
            {userPosts.map(value=> <UserPost key={value.id} userPost={value}/>)}
        </div>
    );
}