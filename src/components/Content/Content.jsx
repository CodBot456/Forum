import { Routes, Route } from "react-router-dom"
import New from "./new/New"
import Best from "./best/Best"
import Hot from "./hot/Hot"
import Groops from "./groops/Groops"
import Subs from "./subs/Subs"

function Content(props) {
    return (
        <div className="content">
            <Routes>
                <Route path='/best' element={<Best post_data={props.post_data} />} />
                <Route path='/new' element={<New post_data={props.post_data} />} />
                <Route path='/hot' element={<Hot post_data={props.post_data} />} />
                <Route path='/subs' element={<Subs />} />
                <Route path='/groops' element={<Groops />} />
            </Routes>
        </div>
    )
}
export default Content