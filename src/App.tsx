import { UsersProvider } from "./contexts/UserContext";
import Layout from "./Layout";

function App() {
  return (
    <>
      <UsersProvider>
        <Layout />
      </UsersProvider>
    </>
  );
}

export default App;
