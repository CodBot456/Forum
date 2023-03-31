import { useState } from "react"
import style from "./Panel.module.css"

function Panel(props) {
    function get_posts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    let [status, set_status] = useState("статус")
    let [edit_status, set_edit_status] = useState(false)

    return (

        <div className="panel">
            <h2 className={style.status_title}>status</h2>
            <div className={style.status_box}>
                {!edit_status && <p className={style.status_text} onClick={() => set_edit_status(true)}>{status}</p>}
                {edit_status && <input className={style.status_input} type="text" value={status} onChange={(e) => set_status(e.currentTarget.value)} onBlur={() => set_edit_status(false)} autoFocus={true} maxLength={19} />}
            </div>
        </div>
    )
}
export default Panel