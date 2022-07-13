import TopNav from "../../components/TopNav";
import { Layout, Menu } from "antd";
import { Context } from "../../context";
import router, { useRouter } from "next/router";
import UserRoute from "../../components/routes/UserRoute";
import { useContext, useEffect } from "react";
import { route } from "next/dist/next-server/server/router";

const { Content, Footer, Header, Sider } = Layout;


const appointmentsIndex = () => {
    
    return (
        <UserRoute>
            
            <div>
                <h1 className="text-center">Appointments</h1>
                <hr className="text-danger" />
            </div>
            <div className="grid-container">
                <div className="grid-item">item1</div>
                <div className="grid-item">item2</div>
                <div className="grid-item">item3</div>
                <div className="grid-item">item4</div>
                <div className="grid-item">item5</div>
            </div>
        </UserRoute>
);}
export default appointmentsIndex;
