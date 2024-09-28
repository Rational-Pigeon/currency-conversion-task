import "./styles.css";
import { handleRateChange } from "./handle-rate";
import { validateInput } from "./validate";
import { updateUSD, updateRial, clearInputs } from "./display";

const rialInput = document.getElementById("rial") as HTMLInputElement;
const usdInput = document.getElementById("usd") as HTMLInputElement;




rialInput.addEventListener("input", () => {
    validateInput(rialInput);
    rialInput.value === "" ? clearInputs() : updateUSD();
});

usdInput.addEventListener("input", () => {
    validateInput(usdInput);
    usdInput.value === "" ? clearInputs() : updateRial();
});


handleRateChange();
