import TopNav from "../../components/TopNav";
import { Layout, Menu } from "antd";
import { Context } from "../../context";
import { useRouter } from "next/router";
import UserRoute from "../../components/routes/UserRoute";
import { useContext, useEffect } from "react";
import { route } from "next/dist/next-server/server/router";

const { Content, Footer, Header, Sider } = Layout;


const adminIndex = () => {
    const router = useRouter(); 
    const {
        state: { user },
      } = useContext(Context);
    if(user != null && user.role != "Admin"){
        router.push("/");
    }
    return (
        <UserRoute>
            <div>
                <h1 className="text-center">Admin Panel</h1>
                <hr className="text-danger" />
            </div>
        </UserRoute>
);}
export default adminIndex;
