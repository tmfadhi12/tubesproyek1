import { Outlet } from "react-router-dom"
import Header from "../../layouts/header"

const IndexHome = () => {
    return(
        <div>
            <header>
                <Header/>
            </header>
            <section className="my-20 flex justify-center">
                <Outlet/>
            </section>
        </div>
    )
}

export default IndexHome