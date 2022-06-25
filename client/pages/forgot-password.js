import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import TopNav from "../components/TopNav";
import { useRouter } from "next/router";
import { Layout } from "antd";

const { Content, Footer, Header, Sider } = Layout;

const ForgotPassword = () => {
  // state
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // context
  const {
    state: { user },
  } = useContext(Context);
  // router
  const router = useRouter();

  // redirect if user is logged in
  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/forgot-password", { email });
      setSuccess(true);
      toast("Verifica email pentru codul secret");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // console.log(email, code, newPassword);
    // return;
    try {
      setLoading(true);
      const { data } = await axios.post("/api/reset-password", {
        email,
        code,
        newPassword,
      });
      setEmail("");
      setCode("");
      setNewPassword("");
      setLoading(false);
      toast("Felicitari! Acum va puteti autentifica cu noua parola");
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}> 
      <Header style={{ padding: 0}}>
        <TopNav />
      </Header>
      <h1 className="jumbotron text-center bg-primary square">
        Recuperare Parola
      </h1>
      <Content>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={success ? handleResetPassword : handleSubmit}>
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introdu email"
            required
          />
          {success && (
            <>
              <input
                type="text"
                className="form-control mb-4 p-4"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Introdu codul secret"
                required
              />

              <input
                type="password"
                className="form-control mb-4 p-4"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Parola noua"
                required
              />
            </>
          )}

          <button
            type="submit"
            className="btn btn-primary btn-block p-2"
            disabled={loading || !email}
          >
            {loading ? <SyncOutlined spin /> : "Trimite"}
          </button>
        </form>
      </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>--© {(new Date().getFullYear())} Make IT Oradea, All Rights Reserved</Footer>
    </Layout>
  );
};

export default ForgotPassword;
