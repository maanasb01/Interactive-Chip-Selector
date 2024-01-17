import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import data from "../data/data.json"

interface UserContextValue {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  selectedUsers: User[];
  setSelectedUsers: React.Dispatch<React.SetStateAction<User[]>>;
  searchUsers: User[];
  setSearchUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UsersContext = createContext<UserContextValue>({
  users: [],
  setUsers: () => {},
  selectedUsers: [],
  setSelectedUsers: () => {},
  searchUsers: [],
  setSearchUsers: () => {},
});

export function useUsersContext() {
  return useContext(UsersContext);
}

type UsersProviderProps = {
  children: ReactNode;
};

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [searchUsers, setSearchUsers] = useState<User[]>([]);

  // function getUsers() {
  //   // try {
  //   //   const res = await fetch("https://dummyjson.com/users");
  //   //   if (!res.ok) {
  //   //     throw new Error(`HTTP error! Status: ${res.status}`);
  //   //   }

  //   //   const data: UserData = await res.json();
  //   //   const fetchedUsers: User[] = data.users;
  //   //   setUsers(fetchedUsers);
  //   // } catch (error) {
  //   //   console.error("Error fetching data");
  //   // }

  //   const users: User[] = data as User[];
  //   console.log(users)
  //   setUsers(users);
  // }
  useEffect(() => {
    // getUsers();
    const users: User[] = data as User[];

    setUsers(users);

    setSearchUsers(users);

  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        selectedUsers,
        setSearchUsers,
        searchUsers,
        setSelectedUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
