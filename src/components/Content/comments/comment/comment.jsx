import style from './comment.module.css';

function Comment(props) {
    return (
        <div className={style.comment}>
            <div className={style.user_info}>
                <p>{props.postId}</p>
                <p>{props.email}</p>
            </div>
            <div className={style.header}>
                <p>{props.name}</p>
            </div>
            <div className={style.body}>
                <p>{props.body}</p>
            </div>
        </div>
    )
}
export default Comment