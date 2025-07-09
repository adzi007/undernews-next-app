'use client'
import { NextPage } from "next";
import { BiSend } from "react-icons/bi"
import CommentItemParent from "./CommentItemParent"
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

interface Props {
    slug: string;
    postId: string;
    sessionServer: {
        user: {
            id: string
        }
    };
}

interface UserAccount {
  fullname: string;
  avatar: string;
}

interface CommentResponse {
    id: string;
    isLike: boolean;
    userAccount: {
        id: string
    }
}

interface ReplyResponse {
  id: string
}

interface Reply {
  id: string;
  createdAt: string;
  userAccount: UserAccount;
  content: string;
  replyResponses: ReplyResponse[];
  parentReply: {
    userAccount: {
      fullname: string
    }
  }
}

interface Comment {
  id: string;
  userAccount: UserAccount;
  createdAt: string;
  content: string;
  commentResponses: CommentResponse[];
  replies: Reply[];
}

interface PostResponses {
  isLike: boolean;
  isDisLike: boolean;
}

interface PostCommentResponse {
    post: {
        postResponses: PostResponses;
        comments: Comment[];
    }
  
}


const CommentSection: NextPage<Props> = (props) => {

    const [data, setData] = useState<PostCommentResponse>();

    const [inputComment, setInputComment] = useState("")
    const [disableForm, setDisableForm] = useState(false)

    const { slug, postId, sessionServer } = props

    const { data: session } = useSession();

    const router = useRouter()

    const getCommentData = () => {

        fetch('/api/comment?slug='+slug )
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.error('Error fetching data:', error));
    }
    
    useEffect(() => {

        if(sessionServer.user.id !== ""){

            fetch('/api/comment-user', {

                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                slug: slug,
                userId: sessionServer.user.id,
            })

            })
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));

        }else{

            fetch('/api/comment?slug='+slug )
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));

        }       
        

      },[slug, session, sessionServer] );

    const submitComment = async () => {
        setDisableForm(true)

        if(session == null) {
            router.push("/login")
        }

        const createComment = {
            content: inputComment,
            userId: session?.user.id,
            postId: postId
        }

        const postComment = await fetch(`/api/comment/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(createComment)
          });

        if(postComment.status == 200) {
            setInputComment("")
            setDisableForm(false)
            getCommentData()

        } else {

            alert("fail to create comment, something wrong!")
            console.log("create comment response", postComment);
            
        }

        setInputComment("")
    }   

    return (
        <div className="col-md-12">
            <div className="panel">

                
                <div className="panel-body panel-form-comment">

                    <h4 className="ms-3">Comments</h4>

                    <div className="form-comment-area p-3">
                        <textarea className="form-control" rows={5} placeholder="What are you thinking?" value={inputComment} onChange={(e) => setInputComment(e.target.value)} disabled={disableForm} />
                        <div className="mar-top clearfix">
                            <button className="btn btn-sm btn-primary d-flex ms-auto align-items-center me-3" type="button" onClick={submitComment} disabled={disableForm}> 

                            { disableForm ? 
                                <> Sending 
                                <div className="spinner-border spinner-border-sm ms-1" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>  </>
                            :
                                <>  Share <BiSend className="ms-1"/>  </> 
                            }

                            </button>
                        </div>
                    </div>
                    
                </div>

                <div className="d-inline-flex py-3 mt-2">
                    <div className="btn btn-sm btn-primary me-2 rounded-5 ">updated</div>
                    <div className="btn btn-sm btn-outline-primary me-2 rounded-5">popular</div>
                    <div className="btn btn-sm btn-outline-primary me-2 rounded-5">most reply</div>
                </div>
            </div>


            <div className="panel">
                <div className="panel-body">

                    { !data ? (<p>loading.....</p>):null }

                    { data && data.post.comments.length > 0 && data.post.comments.map( (row, index) => {

                        // console.log('row', row.commentResponses);
                        

                        return(
                            <CommentItemParent 
                                key={index}
                                avatarUrl={row.userAccount?.avatar} 
                                name={row.userAccount?.fullname} 
                                timeComment={row.createdAt}
                                comment={row.content}
                                replies={row.replies}
                                commentId={row.id}
                                getCommentData={getCommentData}
                                commentResponses={row.commentResponses}
                            />
                        )

                    })}
    
                </div>

            </div>

            <div className="d-flex w-100 justify-content-center">
                <button type="button" className="btn btn-primary">SHOW MORE</button>
            </div>
    </div>
    )
}

export default CommentSection