import {Outlet} from "react-router-dom";

function App() {

    return (
        <div>
            тут будет панель навигации
            <div id="detail">
                <Outlet/>
            </div>
        </div>
    )
}

export default App