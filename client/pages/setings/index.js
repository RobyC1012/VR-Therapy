import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";

const SetingsIndex = () => {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <UserRoute>
      <div>
        <h1 className="text-center">Settings</h1>
        <hr className="text-danger" />
      </div>
    </UserRoute>
  );
};

export default SetingsIndex;