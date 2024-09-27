export function convertRialToUSD(rial: number, rate: number) {
    return (rial / rate).toFixed(2);
}

export function convertUSDToRial(usd: number, rate: number) {
    return (usd * rate).toFixed(2);
}
