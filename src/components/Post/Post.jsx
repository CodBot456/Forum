import style from "./Post.module.css"
function Post(props) {
    return (
        <div className={style.post}>
            <div className={style.post_header}>
                <a href="" className={style.nickname}>{props.author}</a>
                <a href="" className={style.title}>{props.title}⁠</a>
            </div>
            <div className={style.post_content}>
                <p className={style.content}>{props.content}</p>
            </div>
        </div>
    )
}
export default Post
