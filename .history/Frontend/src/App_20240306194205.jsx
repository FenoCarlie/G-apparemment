import "./App.css";
import Appartement from "./views/Appartement";
import Header from "./views/Header";

function App() {
    return (
        <div className="h-screen bg-[#dadada]">
            <Header />
            <Appartement />
        </div>
    );
}

export default App;
