import { CurrencyName } from 'entities/choseCurrency';
import { ConvertResult } from './ConvertResult';

export interface CurrencyConverterSchema {
  inputValue?: string;
  errorMessage?: string;
  convertResult?: ConvertResult;
  isLoading: boolean;
  data: CurrencyName[];
}
