import "./styles.css";
import { handleRateChange } from "./handle-rate";
import { validateInput } from "./validate";
import { displayFormattedCurrencies } from "./display";
import { updateUSD, updateRial } from "./display";

const rialInput = document.getElementById("rial") as HTMLInputElement;
const usdInput = document.getElementById("usd") as HTMLInputElement;




rialInput.addEventListener("input", () => {
    validateInput(rialInput);
    updateUSD();
    displayFormattedCurrencies(rialInput.value, usdInput.value);
});

usdInput.addEventListener("input", () => {
    validateInput(usdInput);
    updateRial();
    displayFormattedCurrencies(rialInput.value, usdInput.value);
});


handleRateChange();
