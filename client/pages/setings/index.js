import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";

const SetingsIndex = () => {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <UserRoute>
      <h1 className="text-center ">Dashboard Setari </h1>
    </UserRoute>
  );
};

export default SetingsIndex;