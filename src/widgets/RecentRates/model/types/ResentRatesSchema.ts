import { CurrencyName } from 'features/choseCurrency';

export interface ResentRatesParams {
  base?: string;
}

export interface ResentRatesSchema {
  errorMessage?: string;
  inputValue: string;
  isLoading: boolean;
  data: CurrencyName[];
  recetRates?: Record<string, number>;
  yesterdayRates?: Record<string, number>;
}
