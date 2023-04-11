import { useEffect } from "react"
import { useState } from "react"
import Comment from "./comment/comment"

function Comments(props) {

    return (
        <div>
            {props.data.map((el) => <Comment postId={el.postId} body={el.body} name={el.name} email={el.email} />)}

        </div>
    )
}
export default Comments