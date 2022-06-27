import TopNav from "../../components/TopNav";
import { Layout, Menu } from "antd";
import { Context } from "../../context";
import { useRouter } from "next/router";
import UserRoute from "../../components/routes/UserRoute";

const { Content, Footer, Header, Sider } = Layout;

const adminIndex = () => {
    return (
        <UserRoute>
            <div>
                <h1 className="text-center">Admin Panel</h1>
                <hr className="text-danger" />
            </div>
        </UserRoute>
);}
export default adminIndex;
