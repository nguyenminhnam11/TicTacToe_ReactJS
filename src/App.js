import { ToastContainer } from "react-toastify";
import "./App.css";
import Caro from "./Components/Caro";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      {/* <Toggle /> */}
      <Caro />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
