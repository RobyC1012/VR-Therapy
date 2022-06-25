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
      <Content>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Introdu nume"
            required
          />

          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introdu email"
            required
          />

          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Introdu parola"
            required
          />

          <button
            type="submit"
            className="btn btn-block btn-primary"
            disabled={!name || !email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Trimite"}
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
      <Footer style={{ textAlign: 'center' }}>--© {(new Date().getFullYear())} Make IT Oradea, All Rights Reserved</Footer>
    </Layout>
  );
};

export default Register;
