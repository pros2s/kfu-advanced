import { CurrencyName } from 'entities/choseCurrency';

export interface CurrencyConverterSchema {
  errorMessage?: string;
  isLoading: boolean;
  data: CurrencyName[];
}
