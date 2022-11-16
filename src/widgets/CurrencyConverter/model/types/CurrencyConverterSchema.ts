import { CurrencyName } from 'entities/choseCurrency';

export interface CurrencyConverterSchema {
  inputValue?: string;
  errorMessage?: string;
  rateResult?: number;
  isLoading: boolean;
  data: CurrencyName[];
}
