import Leftbar from "./component/leftbar/leftbar";
import Navbar from "./component/navbar/navbar";
import Rightbar from "./component/rightbar/Rightbar";
import Update from "./component/update/Update";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
};
export default App;
