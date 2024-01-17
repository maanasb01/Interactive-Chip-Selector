import { useEffect, useRef, useState } from "react";
import Chip from "./components/chip/Chip";
import SearchBox from "./components/searchBox/SearchBox";
import { useUsersContext } from "./contexts/UserContext";
import Info from "./components/info";



function Layout() {
  const [input, setInput] = useState("");
  const { users } = useUsersContext();
  const { selectedUsers, setSelectedUsers } = useUsersContext();
  const { searchUsers, setSearchUsers } = useUsersContext();
  const [searchingUsers, setSearchingUsers] = useState<User[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLatestChipHighlighted, setIsLatestChipHighlighted] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchBoxRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (input === "") {
      setSearchingUsers(searchUsers);
    } else {
      setSearchingUsers(search(searchUsers));
    }
  }, [input, searchUsers]);


  useEffect(() => {
    setSearchingUsers(users);
    const mouseHandler = (e: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !(searchBoxRef.current as Node & ParentNode).contains(
          e.target as Node
        ) &&
        inputRef.current &&
        !(inputRef.current as Node & ParentNode).contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        if (inputRef.current) {
          (inputRef.current as HTMLInputElement).blur();
        }
      }
    };

    document.addEventListener("mousedown", mouseHandler);
    document.addEventListener("keydown", escHandler);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", mouseHandler);
      document.removeEventListener("keydown", escHandler);
    };
  }, []);

  function removeChip(user: User) {
    setSearchUsers((prevUsers) => [...prevUsers, user]);
    setSelectedUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
  }


  const keys: Array<keyof User> = ["firstName", "lastName", "email"];

  const isString = (value: any): value is string => {
    return typeof value === "string";
  };

  const search = (data: User[]) => {
    return data.filter((item) =>
      keys.some((key) => {
        const value = item[key];
        return (
          isString(value) && value.toLowerCase().includes(input.toLowerCase())
        );
      })
    );
  };

  function handleDeleteChip(e: React.KeyboardEvent<HTMLInputElement>) {
    if (
      inputRef.current &&
      inputRef.current.value === "" &&
      e.key === "Backspace" &&
      !isLatestChipHighlighted
    ) {
      setIsLatestChipHighlighted(true);
    } else if (
      inputRef.current &&
      inputRef.current.value === "" &&
      e.key === "Backspace" &&
      isLatestChipHighlighted
    ) {
      const updatedUsers = [...selectedUsers];
      const removedUser = updatedUsers.pop();
      if (removedUser) {
        setSelectedUsers(updatedUsers);
        setSearchUsers((prevUsers) => [...prevUsers, removedUser]);
        setIsLatestChipHighlighted(false);
      }
    }
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value.toLowerCase());
    if (inputRef.current && inputRef.current.value !== "") {
      setIsLatestChipHighlighted(false);
    }
  }

  function selectUser(user: User) {
    setSelectedUsers((prevUsers) => [...prevUsers, user]);
    setSearchUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
    if (inputRef.current) inputRef.current.value = "";
    setInput('')
  }

  return (
    <>
    <Info />

    <div className=" flex text-3xl text-blue-500"><p className="mx-auto">Add Users</p></div>
      <div className="w-4/6 flex flex-wrap gap-2 mx-auto mt-5  border-b-2 border-blue-700 px-5 pb-1">
        {selectedUsers.length > 0 &&
          selectedUsers.map((user, index) => {
            return (
              <Chip
                onRemove={() => removeChip(user)}
                key={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                img={user.image}
                isHighlighted={
                  index === selectedUsers.length - 1 && isLatestChipHighlighted
                }
              />
            );
          })}

        <div className="relative">
          <input
            ref={inputRef}
            onChange={(e) => handleOnChange(e)}
            onFocus={() => setIsSearchOpen(true)}
            onKeyDown={(e) => handleDeleteChip(e)}
            type="text"
            className="outline-none  px-2 min-w-28 bg-inherit"
            placeholder="Add new user..."
          />

          {isSearchOpen && (
            <SearchBox ref={searchBoxRef} searchingUsers={searchingUsers} selectUser={selectUser}/>
          )}
        </div>
      </div>
    </>
  );
}

export default Layout;
