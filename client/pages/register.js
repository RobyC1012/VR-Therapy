import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
import user from "../../server/models/user";
import TopNav from "../components/TopNav";
import { Layout } from "antd";
import { SyncOutlined } from "@ant-design/icons";

const { Content, Footer, Header, Sider } = Layout;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      // console.log("REGISTER RESPONSE", data);
      toast("Inregistrare reusita. Rugam autetificare.");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
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
      <h1 className="jumbotron text-center bg-primary square">Inregistrare</h1>
      <Content  style={{ padding: '0 50px'}}>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <input
              type="text"
              id="name"
              required class="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="name" className="input-label">Name</label>
          </div>

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
            disabled={!name || !email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>

        <p className="text-center p-3">
          Sunteti deja inregistrat?{" "}
          <Link href="/login">
            <a>Autentificare</a>
          </Link>
        </p>
      </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© {(new Date().getFullYear())} Make IT Oradea, All Rights Reserved</Footer>
    </Layout>
  );
};

export default Register;
