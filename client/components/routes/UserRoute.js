import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import TopNav from "../TopNav";
import { Layout, Menu } from "antd";
import { SyncOutlined, LineChartOutlined, PieChartOutlined, SettingOutlined } from "@ant-design/icons";

const { Content, Footer, Header, Sider } = Layout;

const UserRoute = ({ children }) => {
  // state
  const [ok, setOk] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");
  // router
  const router = useRouter();

  const onCollapse = collapsed => {
    console.log(collapsed);
    if(collapsed){
      setCollapsed(true);
    }else{
      setCollapsed(false);
    }
  };


  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/current-user");
      //   console.log(data);
      if (data.ok) setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push("/login");
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>  
    <Sider className="d-none d-lg-block" collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <div style={{minHeight: "60px"}}>{!collapsed && <h4 className="text-light text-center pt-2">Terapeut</h4>}</div>
        <Menu theme="dark" defaultSelectedKeys={[current]} mode="inline" >
          <Menu.Item key="/user" onClick={(e) => setCurrent(e.key)}  icon={<PieChartOutlined />}>
            <Link href="/user">
              Dashboard
            </Link>
            </Menu.Item>    
            <Menu.Item key="/therapy" onClick={(e) => setCurrent(e.key)}  icon={<LineChartOutlined />}>
            <Link href="/therapy">
              Therapy
            </Link>
            </Menu.Item>
            <Menu.Item key="/setings" onClick={(e) => setCurrent(e.key)}  icon={<SettingOutlined />}>
            <Link href="/setings">
              Setari
            </Link>
            </Menu.Item>
        </Menu>
      </Sider>  
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <TopNav />
      </Header>
      {!ok ? (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-primary p-5"
        />
      ) : (
          <Content style={{ margin: '16px 16px' }}>  
              {children}
          </Content>
        )}      
      <Footer style={{ textAlign: 'center' }}>--© {(new Date().getFullYear())} Make IT Oradea, All Rights Reserved</Footer> 
    </Layout>  
  </Layout>
  );
};

export default UserRoute;
