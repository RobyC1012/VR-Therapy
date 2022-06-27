import TopNav from "../components/TopNav";  
import {Layout, Menu} from 'antd';
import UserRoute from "../components/routes/UserRoute";

const { Content, Footer, Header, Sider } = Layout;

const contact = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}> 
            <Header style={{ padding: 0}}>  <TopNav />
            </Header>
            <h1 className="text-center" style={{ paddingTop: 5}}>Contact us page in progress... </h1>
            <Content>
                <div>
                    <h2>Work in progress...</h2>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>© {(new Date().getFullYear())} Make IT Oradea, All Rights Reserved</Footer>
        </Layout>
    );
}
export default contact;