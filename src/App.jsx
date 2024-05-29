import React, { useEffect, useState } from "react";
import "./index.scss";
import { UsersList } from "./componenets/Users/UsersList";
import { Success } from "./componenets/Success";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
        console.log(users);
      });
  }, []);

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInviteClick = (id) => {
    console.log(id);

    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <UsersList
          getSuccesMessage={() => setSuccess(true)}
          invites={invites}
          inviteClick={handleInviteClick}
          searchValue={searchValue}
          handleSearchValue={handleSearchValue}
          isLoading={isLoading}
          items={users}
        />
      )}
    </div>
  );
}

export default App;
