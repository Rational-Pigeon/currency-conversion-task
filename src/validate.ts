// preventing negative inputs
export function validateInput(input: HTMLInputElement) {
    if (input.valueAsNumber < 0) {
        input.setCustomValidity('مقادیر منفی مجاز نیست');
        input.reportValidity();
        input.value = "0";
    } else {
        input.setCustomValidity('');
    }
}
