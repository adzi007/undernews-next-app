'use client'

import { NextPage } from "next";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
import { Image } from "react-bootstrap";
import { BiLike, BiSend, BiSolidLike } from "react-icons/bi";

interface Props {
    getCommentData: () => void;
    replyId: string;
    parentId: string
    avatarUrl: string;
    name: string;
    timeComment: string;
    comment: string;
    replyResponses: {
        id: string
    }[]
    curentReplyId: string;
    parentReply: {
        userAccount: {
            fullname: string
        }
    }
}

export const CommentItemChild: NextPage<Props> = (props) => {

    const { replyId, avatarUrl, name, timeComment, comment, parentId, curentReplyId, parentReply, getCommentData, replyResponses } = props
    const [isLike, setIsLike] = useState(replyResponses.length > 0 ? true:false )
    const [inputComment, setInputComment] = useState("")
    const [disableForm, setDisableForm] = useState(false)
    const { data: session } = useSession();
    const router = useRouter()
    const [openReply, setOpenReply] = useState(false)

    const handleReply = () => {
        setOpenReply((openReply) => !openReply);
    };

    const submitComment = async () => {

        setDisableForm(true)

        if(session == null) {
            router.push("/login")
        }else{

            const createReplyComment = {
                content: inputComment,
                userId: session?.user.id,
                commentId: parentId,
                replyId: curentReplyId
            }
    
            const postReply = await fetch(`/api/comment/subreply`, {
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
    
                alert("fail to create sub reply, something wrong!")
                console.log("create sub reply response", postReply);
                
            }

            setInputComment("")
            setOpenReply(false)

        }

        
    }

    // console.log('replyResponses', replyResponses);
    

    const likeReply = async (isLike: boolean) => {

        setDisableForm(true)
 
 
        if(isLike){
 
             const likeReply = await fetch(`/api/comment/reply/like`, {
                 method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                 },
                 body: JSON.stringify({
                     userId: session?.user.id,
                     replyId: replyId,
                     isLike: true
                 })
             });
    
             if(likeReply.status == 200) {
    
                 setIsLike(true)
                 setDisableForm(false)
    
             } else {
    
                 alert("fail to like a reply, something wrong!")
                 console.log("create like reply response", likeReply);
                 setDisableForm(false)
                
             }
 
 
        }else{
 
 
             const likeReply = await fetch(`/api/comment/reply/like`, {
                 method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                 },
                 body: JSON.stringify({
                     id: replyResponses[0].id,
                     isLike: false
                 })
             });
    
             if(likeReply.status == 200) {
    
                 setIsLike(false)
                 setDisableForm(false)
    
             } else {
    
                 alert("fail to unlike a reply, something wrong!")
                 console.log("unlike reply response", likeReply);
                 setDisableForm(false)
                
             }
          
        }
         
     }
   

    return (
        <div className="media-block">
            <a className="media-left" href="#"><Image width={46} height={46} className="rounded-circle img-sm" alt="Profile Picture" src={avatarUrl} /></a>
            <div className="media-body">
                <div className="mar-btm ms-2">
                    <a href="#" className="btn-link text-decoration-none">{name}</a>
                    <p className="text-muted text-sm"><i className="fa fa-mobile fa-lg" />{ timeComment }</p>
                </div>
                <p className="ms-2 mb-1"> <b>{parentReply?.userAccount.fullname}</b> {comment}</p>
                <div className="mb-2">
                    <div className="btn-group">

                        <button type="button" className="btn btn-sm btn-default btn-hover-success" disabled={disableForm} onClick={() => likeReply(!isLike)} >

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
           
        </div>
    )
}
