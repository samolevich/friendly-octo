import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Button } from "antd";

import { getUsers } from "../actions";
import { URL } from "../constants";

const ButtonLoader = () => {
  const dispatch = useDispatch();

  const onSubmitGetUsers = async () => {
    const res = await axios.get(URL);
    dispatch(getUsers(res.data.results));
  };
  return (
    <Button size="large" onClick={() => onSubmitGetUsers()}>
      Get Users from Randomuser.me
    </Button>
  );
};

export default ButtonLoader;
