'use client'

import { Image } from "react-bootstrap"
import { BiDislike, BiLike, BiSend, BiSolidLike } from "react-icons/bi"
import { useSession } from "next-auth/react";
import { NextPage } from "next";
import { CommentItemChild } from "./CommentItemChild";
import { useState } from "react";
import { dateToTimeAgo } from "@/lib/common";
import { useRouter } from "next/navigation";

interface Props {
    getCommentData: () => void;
    commentId: string;
    avatarUrl: string;
    name: string;
    timeComment: string;
    comment: string;
    replies: {
        id: string;
        createdAt: string;
        userAccount:{
            avatar: string;
            fullname: string;
        }
        content: string;
        replyResponses: {
            id: string
        }[]
        parentReply: {
            userAccount: {
              fullname: string
            }
          }
    }[],
    commentResponses: {
        id: string;
    }[]
}


const CommentItemParent: NextPage<Props> = (props) => {

    const { avatarUrl, name, timeComment, comment, replies, commentId, getCommentData, commentResponses } = props
    const { data: session } = useSession();
    const router = useRouter()
    const [inputComment, setInputComment] = useState("")
    const [disableForm, setDisableForm] = useState(false)

    const [isLike, setIsLike] = useState(commentResponses.length > 0 ? true:false )

    const [openReply, setOpenReply] = useState(false)
  
    const handleReply = () => {
        setOpenReply((openReply) => !openReply);
    };

    const submitComment = async () => {

        setDisableForm(true)

        if(session == null) {
            router.push("/login")
        }

        const createReplyComment = {
            content: inputComment,
            userId: session?.user.id,
            commentId: commentId
        }

        const postReply = await fetch(`/api/comment/reply`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(createReplyComment)
          });

        if(postReply.status == 200) {
            setInputComment("")
            setDisableForm(false)
            getCommentData()

        } else {

            alert("fail to create reply, something wrong!")
            console.log("create reply response", postReply);
            
        }

        setInputComment("")
    }

    const likeComment = async (isLike: boolean) => {

       setDisableForm(true)


       if(isLike){

        const likeComment = await fetch(`/api/comment/like`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: session?.user.id,
                commentId: commentId
            })
        });

        if(likeComment.status == 200) {

            setIsLike(true)
            setDisableForm(false)

        } else {

            alert("fail to like a comment, something wrong!")
            console.log("create reply response", likeComment);
            setDisableForm(false)
            
        }


       }else{


        const likeComment = await fetch(`/api/comment/dislike`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: commentResponses[0].id
            })
        });

        if(likeComment.status == 200) {

            setIsLike(false)
            setDisableForm(false)

        } else {

            alert("fail to unlike a comment, something wrong!")
            console.log("unlike comment response", likeComment);
            setDisableForm(false)
            
        }
        


       }

       

        
    }
    
  return (
    <div className={ 'media-block ' + ( replies.length > 0 ? 'has-child':'') }  >


        <a className="media-left" href="#">
            <Image width={46} height={46} className="rounded-circle img-sm" alt="Profile Picture" src={avatarUrl} />
        </a>

        <div className="media-body">
            <div className="mar-btm ms-2">
                <a href="#" className="btn-link text-decoration-none">{name}</a>
                <p className="text-muted text-sm"><i className="fa fa-mobile fa-lg" />{ dateToTimeAgo(timeComment) }</p>
            </div>

            <p className="ms-2 mb-1">{comment}</p>
            
            <div className="mb-2">
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-default btn-hover-success" disabled={disableForm} onClick={() => likeComment(!isLike)} >

                        { !disableForm ? isLike ? <BiSolidLike />:<BiLike />: 
                        
                            <div className="spinner-border spinner-border-sm ms-1" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>    
                        }

                    </button>

                </div>
                <button className="btn btn-sm btn-default btn-hover-primary" onClick={handleReply} >reply</button>
                <button className="btn btn-sm btn-default btn-hover-primary" >report</button>
            </div>


            { openReply && 
            
                <div className="panel-body panel-form-comment mb-2">

                    <h5 className="ms-3">Reply</h5>

                    <div className="form-comment-area p-3">
                        <textarea className="form-control" rows={5} placeholder="What are you thinking?" value={inputComment} onChange={(e) => setInputComment(e.target.value)} disabled={disableForm} />
                        <div className="mar-top clearfix">
                            <button className="btn btn-sm btn-primary d-flex ms-auto align-items-center me-3" type="button" onClick={submitComment} disabled={disableForm}>
                                { disableForm ? 
                                    <> 
                                        Sending 
                                        <div className="spinner-border spinner-border-sm ms-1" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>  
                                    </>
                                :
                                    <>  Send Reply <BiSend className="ms-1"/>  </> 
                                }
                            </button>
                        </div>
                    </div>

                </div>
            
            }

            
            { replies.length > 0 && 
            
                <div className="reply-section">

                    { replies.map( (row, index) => {   
                        
                        // console.log(' reply', row.replyResponses);
                        

                        return(
                            <CommentItemChild 
                                key={index}
                                avatarUrl={row?.userAccount?.avatar} 
                                name={row?.userAccount?.fullname} 
                                timeComment={ dateToTimeAgo(row.createdAt)}
                                comment={row.content} 
                                parentId={commentId}
                                curentReplyId={row.id}
                                parentReply={row?.parentReply}
                                getCommentData={getCommentData}
                                replyResponses={row.replyResponses}
                                replyId={row.id}
                                
                            /> 

                        )

                    })}


                </div>
            }
            

        </div>
</div>
  )
}

export default CommentItemParent