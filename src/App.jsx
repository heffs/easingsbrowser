import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import EasingsList from "./components/EasingsList";
import EasingGraph from "./components/EasingGraph";
import EasingCode from "./components/EasingCode";
import { easingFunctions } from "./easingFunctions";


function App() {
    const [selectedFunction, setSelectedFunction] = useState(easingFunctions[3]);

    function selectedFunctionCode() {
        return `function ${selectedFunction.name.split(" ").map((w) => w[0].toUpperCase() + w.slice(1)).join("")}${selectedFunction.text}`
    }
    return (
        <div id="app">
            <Header />
            <EasingsList easingFunctions={easingFunctions} selectedFunction={selectedFunction} setSelectedFunction={setSelectedFunction} />
            <EasingGraph selectedFunction={selectedFunction} params={selectedFunction.params} />
            <EasingCode text={selectedFunctionCode()} source={selectedFunction.source} />
        </div>
    );
}

export default App;
