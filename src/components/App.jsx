import { Button } from "antd";
import { useDispatch } from "react-redux";
import { getUsers } from "../actions";

const App = () => {
  const dispatch = useDispatch();
  const onSubmitGetUsers = () => {
    dispatch(getUsers(["s"]));
  };

  return <Button onClick={() => onSubmitGetUsers()}>Default Button</Button>;
};

export default App;
