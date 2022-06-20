import { useState } from "react";
import data from "../../Data";

const useUserData = () => {
  const [userData, setUserData] = useState(data);
  const [sortState,setSortState] = useState("asc");

  const sortUserData = (key) => {
    let initialData = [...userData];

    let sortedUserData = initialData.sort((user1, user2) => {
    if (user1[key] < user2[key]) {
        return sortState === "asc" ? -1 : 1;
    }
    if (user1[key] > user2[key]) {
         return sortState === "asc" ? 1 : -1;
    }
    return 0;
  });
  setSortState(sortState === "default" ? "asc" : sortState === "asc" ? "desc" : "asc" )
  setUserData(sortedUserData);
  }


  return { userData,sortUserData,sortState };
};

export default useUserData;
