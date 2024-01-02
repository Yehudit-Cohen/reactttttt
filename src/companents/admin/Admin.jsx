
import './Admin.css'
import { observer } from "mobx-react"
import Login from '../login/Login'
import MyStore from '../../store/MyStore'
import { Outlet, Link } from "react-router-dom"
import PageAdmin from '../pageAdmin/PageAdmin'
import Details from '../details/Details'

const Admin = (observer(() => {
    MyStore.setIsAdmin(true);
    return (
        <>

            {!MyStore.isLogin ?
                <Login /> :
                <PageAdmin />
            }
            {/* <Link to="./services">services</Link>
            |
            <Link to="./meeting">meeting</Link>
            <br />
            outlet:
            <br /> */}
            {/* <Outlet /> */}
        </>
    )
}))

export default Admin