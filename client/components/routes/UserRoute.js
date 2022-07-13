import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import TopNav from "../TopNav";
import { Layout, Menu } from "antd";
import { SyncOutlined, LineChartOutlined, PieChartOutlined, SettingOutlined, AppstoreOutlined, HistoryOutlined } from "@ant-design/icons";
import { Context } from "../../context";
import { useContext } from "react";
import { LoginOutlined, CoffeeOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import router from "next/router";


const { Item, SubMenu, ItemGroup } = Menu;
TopNav.logout = async () => {
  const { data } = await axios.get("/api/logout");
  toast(data.message);
  router.push("/login");
}

const { Content, Footer, Header, Sider } = Layout;

const UserRoute = ({ children }) => {
  // state
  const [ok, setOk] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");
  

  const { state, dispatch } = useContext(Context);
  const { user } = state;

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
          <Menu.Item key="/" onClick={(e) => setCurrent(e.key)} icon={<AppstoreOutlined/>}>
            <Link href="/">
              <a>Fearfree</a>
            </Link>
          </Menu.Item>
          {user !== null && user.role[0] === "Admin" &&(
            <>
              <Menu.Item key="/admin" onClick={(e) => setCurrent(e.key)} icon={<SettingOutlined/>}>
                <Link href="/admin">
                  <a>Admin Panel</a>
                </Link>
              </Menu.Item>
            </>
          )}
          <Menu.Item key="/user" onClick={(e) => setCurrent(e.key)}  icon={<PieChartOutlined />}>
            <Link href="/user">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="/appointments" onClick={(e) => setCurrent(e.key)}  icon={<HistoryOutlined/>}>
            <Link href="/appointments">
              Appointments
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
        <Menu mode="horizontal" theme="dark" selectedKeys={[current]}>
          {user === null && (
            <>
              <Item
                key="/login"
                onClick={(e) => setCurrent(e.key)}
                icon={<LoginOutlined />}
                className="float-right"
              >
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </Item>
            </>
          )}
          
          {user !== null && (
            <SubMenu
              icon={<CoffeeOutlined />}
              title={user && user.name}
              className="float-right"
            >
              <ItemGroup>
                <Item key="/user">
                  <Link href="/user">
                    <a>Dashboard</a>
                  </Link>
                </Item>
                <Item onClick={TopNav.logout}>Logout</Item>
              </ItemGroup>
            </SubMenu>
          )}
        </Menu>
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
      <Footer style={{ textAlign: 'center' }}>© {(new Date().getFullYear())} Make IT Oradea, All Rights Reserved</Footer> 
    </Layout>  
  </Layout>
  );
};

export default UserRoute;
