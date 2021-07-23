import PostComment from "./postComment/PostComment";

export default function PostComments({postComments}){


    return(

        <div>
            {postComments.map((postComment)=><PostComment key={postComment.id} postComment={postComment}/>)}
        </div>
    );
}