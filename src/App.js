import ProfilePhoto from "./components/ProfilePhoto";
import FullName from "./components/FullName";
import Address from "./components/Address";
import "./styles.css";
function App() {
  return (
    <div className="container">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
