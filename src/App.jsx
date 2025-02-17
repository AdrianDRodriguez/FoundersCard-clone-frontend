import axios from "axios";
import { Header } from "./Header";
import { MembersPage } from "./MembersPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <MembersPage />
      <Footer />
    </div>
  )
}

export default App;