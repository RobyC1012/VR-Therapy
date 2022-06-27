import TopNav from "../components/TopNav";
import { Layout, Menu } from "antd";
import { SyncOutlined, EditOutlined, PieChartOutlined, DollarOutlined } from "@ant-design/icons";

const { Content, Footer, Header, Sider } = Layout;

const Index = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}> 
    <Header style={{ padding: 0}}>
        <TopNav />
      </Header>
      <h1 className="jumbotron text-center bg-primary square">
        Fearfree
      </h1>
      <Content>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src="/img/bg1.png" ></img>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© {(new Date().getFullYear())} Make IT Oradea, All Rights Reserved</Footer>
    </Layout>
  );
};

export default Index;
