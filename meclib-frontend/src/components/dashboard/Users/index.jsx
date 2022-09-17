import React, { useEffect, useState } from "react";
import { Axios } from "../../../axios/axios";
import UserCard from "./UserCard";

const Users = () => {
  const [allUser, setAllUser] = useState([]);

  const getAllUser = async () => {
    const {
      data: { data },
    } = await Axios.get("/users");
    setAllUser(data);
  };
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div className="my-[20px] grid grid-cols-2 sm:grid-cols-4 gap-[20px]">
      {allUser.map((user) => (
        <UserCard {...{ user }} />
      ))}
    </div>
  );
};

export default Users;
