import ReactDOM from "react-dom";
import Instagram from "./Instagram";

function Page(){

    return (
        <Instagram />
    );
    
}

ReactDOM.render(<Page />, document.querySelector(".root"));