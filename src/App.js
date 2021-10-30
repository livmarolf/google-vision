import {UploadForm} from "./dragDrop/dragDrop";
import SignInScreen from "./firebase/firebase-config";

function App() {
  return (
    <div className="App">
      <SignInScreen />
      <UploadForm />
    </div>
  );
}

export default App;
