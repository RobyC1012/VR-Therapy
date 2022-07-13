import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
import TopNav from "../components/TopNav";
import { Layout, Menu } from "antd";
import { SyncOutlined, EditOutlined, PieChartOutlined, DollarOutlined, SafetyCertificateFilled } from "@ant-design/icons";

const { Content, Footer, Header, Sider } = Layout;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  
  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  // const { user } = state;

  // router
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      // console.log("LOGIN RESPONSE", data);
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      // save in local storage
      window.localStorage.setItem("user", JSON.stringify(data));
      // redirect
      router.push("/user");
      // setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}> 
    <Header style={{ padding: 0}}>
        <TopNav />
      </Header>
      <h1 className="jumbotron text-center bg-primary square">Autentificare</h1>
      <Content style={{ padding: '0 50px'}}>  
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
            type="email"
            id="email"
            required class="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label for="email" className="input-label">Email address</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              id="password"
              required class="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="password" className="input-label">Password</label>
          </div>

          <button
            type="submit"
            className="btn btn-block btn-primary"
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>

        <p className="text-center pt-3">
          Nu sunteti inregistrat?{" "}
          <Link href="/register">
            <a>Inregistrare</a>
          </Link>
        </p>

        <p className="text-center">
          <Link href="/forgot-password">
            <a className="text-danger">Am uitat parola</a>
          </Link>
        </p>
      </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© {(new Date().getFullYear())} Make IT Oradea, All Rights Reserved</Footer>
    </Layout>
  );
};

export default Login;
