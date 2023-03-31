import Post from "../../Post/Post"

function New(props) {
    return (
        <div >
            {props.post_data.map((el) => <Post author={el.author} title={el.title} key={el.id} />)}
        </div>
    )
}
export default New