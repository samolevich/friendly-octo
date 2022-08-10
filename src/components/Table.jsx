import React from "react";
import { List } from "antd";
import { useSelector } from "react-redux";

const Table = () => {
  const users = useSelector(state => state.usersReducer.users);
  return (
    <List
      size="small"
      bordered
      dataSource={users}
      renderItem={item => <List.Item>{item.name.first}</List.Item>}
    />
  );
};

export default Table;
