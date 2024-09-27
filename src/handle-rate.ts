import { formatNumberWithCommas } from "./display";
import { validateInput } from "./validate";

const apiRateRadio = document.getElementById("api-rate") as HTMLInputElement;
const customRateRadio = document.getElementById("custom") as HTMLInputElement;
const container = document.querySelector(".container") as HTMLElement;
let customRateInput: HTMLInputElement | null = null;

export let exchangeRate: number = 600000.0; //default value before fetching or manual setting

async function fetchExchangeRate(retryCount = 3) {
    try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        if (!response.ok) throw new Error("API Error");
        const data = await response.json();
        exchangeRate = data.rates.IRR;
    } catch (error) {
        if (retryCount > 0) {
            console.log(`Retrying... ${3 - retryCount} attempt(s) left`);
            setTimeout(() => fetchExchangeRate(retryCount - 1), 1000);
        } else {
            alert("API is currently unresponsive. Please try again later or use the custom rate option.");
        }
    }
}


export function handleRateChange() {
    if (customRateRadio.checked) {
        // Append custom rate input if not already present and update exchange rate based on the input
        if (!customRateInput) {
            const rateInputContainer = document.createElement("div");
            const rateFormattedDisplay = document.createElement("small");
            customRateInput = document.createElement("input");

            rateInputContainer.classList.add("custom-rate-input");
            rateFormattedDisplay.classList.add("formatted-output");

            customRateInput.type = "number";
            customRateInput.placeholder = "واحد دلار رابه ریال وارد کنید";
            customRateInput.classList.add("num-input", "custom-rate");

            rateInputContainer.appendChild(customRateInput)
            rateInputContainer.appendChild(rateFormattedDisplay)
            container.appendChild(rateInputContainer);

            customRateInput.addEventListener("input", () => {
                validateInput(customRateInput!);
                exchangeRate = parseFloat(customRateInput!.value) || 0;
                rateFormattedDisplay.textContent = formatNumberWithCommas(customRateInput!.value) || "0";
            });
        }
    } else {
        if (customRateInput) {
            container.removeChild(customRateInput);
            customRateInput = null;
        }
        fetchExchangeRate();
    }
}

customRateRadio.addEventListener("change", handleRateChange);
apiRateRadio.addEventListener("change", handleRateChange);
