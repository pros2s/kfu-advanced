export interface CurrencyName {
  abbr: string;
  description: string;
}

export interface ChooseCurrencySchema {
  errorMessage?: string;
  isLoading: boolean;
  isCurMenu: boolean;
  currentCurrency: CurrencyName;
  data: CurrencyName[];
}
