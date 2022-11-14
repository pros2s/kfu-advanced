export interface CurrencyName {
  abbr: string;
  description: string;
}

export interface ChooseCurrencySchema {
  errorMessage?: string;
  isLoading: boolean;
  data: CurrencyName[];
}
