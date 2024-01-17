import { forwardRef, useEffect, useState } from "react";
import SearchItem from "./SearchItem";

type Props = {
  searchingUsers?: User[];
  selectUser:(user:User)=>void
};
type Ref = HTMLDivElement;
const SearchBox = forwardRef<Ref, Props>(
  ({ searchingUsers,selectUser }: Props,ref) => {


    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
      if (!searchingUsers) return;
      const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
          case "ArrowUp":
            setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            break;
          case "ArrowDown": 
            setSelectedIndex((prevIndex) =>
              Math.min(prevIndex + 1, searchingUsers?.length - 1 || 0)
            );
            break;
          case "Enter":
            if (searchingUsers && searchingUsers[selectedIndex]) {
              selectUser(searchingUsers[selectedIndex]);
            }
            break;
          default:
            break;
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      if (ref && typeof ref !== 'function' && ref.current) {
        const container = ref.current;
        const activeElement = container.querySelector('.bg-gray-300');
        if (activeElement) {
          const rect = activeElement.getBoundingClientRect();
          if (rect.top < container.offsetTop) {
            container.scrollTop += rect.top - container.offsetTop;
          } else if (rect.bottom > container.offsetHeight) {
            container.scrollTop += rect.bottom - container.offsetHeight;
          }
        }
      }

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [searchingUsers, selectedIndex]);
    console.log(searchingUsers)

    return (
      <>
        <div
          ref={ref}
          className=" min-h-28 max-h-56 min-w-60 w-80 absolute top-9 border shadow-md overflow-scroll overflow-x-hidden"
        >
          <ul>
            {searchingUsers &&
              searchingUsers.map((user,index) => {
                return (
                  <li key={user.id}>
                    <SearchItem
                      selectedIndex={selectedIndex}
                      setSelectedIndex={setSelectedIndex}
                      index={index}
                      onClick={() => selectUser(user)}
                      firstName={user.firstName}
                      lastName={user.lastName}
                      email={user.email}
                      img={user.image}
                    />
                  </li>
                );
              })

            }
          </ul>
        </div>
      </>
    );
  }
);

export default SearchBox;
