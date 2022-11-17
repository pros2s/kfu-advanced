import { CurrencyName } from 'features/choseCurrency';

export interface ResentRatesSchema {
  errorMessage?: string;
  isLoading: boolean;
  data: CurrencyName[];
}
