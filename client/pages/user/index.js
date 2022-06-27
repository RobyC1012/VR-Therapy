import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";

const UserIndex = () => {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <UserRoute>
      <div>
        <h1 className="text-center">Dashboard</h1>
        <hr className="text-danger" />
      </div>
    </UserRoute>
  );
};

export default UserIndex;
