import { CurrencyName } from 'entities/choseCurrency';

export interface ResentRatesSchema {
  errorMessage?: string;
  isLoading: boolean;
  data: CurrencyName[];
}
