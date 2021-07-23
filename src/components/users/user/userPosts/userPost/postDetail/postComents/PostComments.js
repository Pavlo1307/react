import PostComment from "./postComment/PostComment";

export default function PostComments({postComments}){

    console.log(postComments)

    return(

        <div>
            {postComments.map((postComment)=><PostComment postComment={postComment}/>)}
        </div>
    );
}