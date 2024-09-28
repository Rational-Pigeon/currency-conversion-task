import { exchangeRate } from "./handle-rate";
import { convertUSDToRial, convertRialToUSD } from "./conversions";

const rialInput = document.getElementById("rial") as HTMLInputElement;
const usdInput = document.getElementById("usd") as HTMLInputElement;
const rialFormatted = document.getElementById("rialFormatted") as HTMLSpanElement;
const usdFormatted = document.getElementById("usdFormatted") as HTMLSpanElement;

export function formatNumberWithCommas(value: string): string {
    const cleanValue = value.replace(/[^\d.]/g, "");
    if (cleanValue === "") return "";

    const formattedValue = parseFloat(cleanValue).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return formattedValue;
}

function displayFormattedCurrencies(rial: string, usd: string) {
    const formattedRial = formatNumberWithCommas(rial);
    const formattedValue = formatNumberWithCommas(usd);

    rialFormatted.textContent = formattedRial ? `${formattedRial} IRR` : "";
    usdFormatted.textContent = formattedValue ? `${formattedValue} USD` : "";
}


export function updateUSD() {
    const rialValue = parseFloat(rialInput.value);
    if (!isNaN(rialValue)) {
        usdInput.value = convertRialToUSD(rialValue, exchangeRate);
    }
    displayFormattedCurrencies(rialInput.value, usdInput.value);
}

export function updateRial() {
    const usdValue = parseFloat(usdInput.value);
    if (!isNaN(usdValue)) {
        rialInput.value = convertUSDToRial(usdValue, exchangeRate);
    }
    displayFormattedCurrencies(rialInput.value, usdInput.value);
}

export function clearInputs() {
    rialInput.value = "";
    usdInput.value = "";
}
