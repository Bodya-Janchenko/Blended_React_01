type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrencyParams {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertCurrencyParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}
