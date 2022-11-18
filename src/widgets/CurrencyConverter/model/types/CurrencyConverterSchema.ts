export interface CurrencyConverterSchema {
  inputValue: string;
  errorMessage?: string;
  rateResult?: number;
  isLoading: boolean;
}
