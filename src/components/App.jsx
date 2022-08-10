import axios from "axios";
import { Button, Divider, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions";
import { URL } from "../constants";
import Table from "./Table";
const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersReducer.users);

  const onSubmitGetUsers = async () => {
    const res = await axios.get(URL);
    dispatch(getUsers(res.data.results));
  };

  return (
    <>
      <Button onClick={() => onSubmitGetUsers()}>Default Button</Button>
      <Divider orientation="left">Users List</Divider>
      <List
        size="small"
        bordered
        dataSource={users}
        renderItem={item => <List.Item>{item.name.first}</List.Item>}
      />
      <Table />
    </>
  );
};

export default App;
