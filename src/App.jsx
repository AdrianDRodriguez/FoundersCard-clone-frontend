import axios from "axios";
import { Header } from "./Header";
import { MembershipPage } from "./MembershipPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <MembershipPage />
      <Footer />
    </div>
  )
}

export default App;