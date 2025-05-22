import "./App.css";
import Form from "./components/Form";
import Header from "./components/header";
import Footer from "./components/footer";
import DownloadNow from "./components/DownloadNow";
import { useRef, useState } from "react";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const downloadRef = useRef(null);

  console.log("isRegistered", isRegistered);

  return (
    <div className="flex flex-col justify-center items-center">
      {successMessage && (
        <div className="w-full bg-green-100 text-green-800 text-center py-3 px-6 font-medium border-b border-green-300 fixed top-0 left-0 z-50">
          {successMessage}
        </div>
      )}
      <Header />
<Form
  setIsRegistered={setIsRegistered}
  setSuccessMessage={setSuccessMessage}
  downloadRef={downloadRef}
/>

      <DownloadNow isRegistered={isRegistered} ref={downloadRef} />
      <Footer />
    </div>
  );
}

export default App;
