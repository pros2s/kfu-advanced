import { CurrencyName } from 'entities/choseCurrency';
import { ConvertResult } from './ConvertResult';

export interface CurrencyConverterSchema {
  inputValue?: string;
  errorMessage?: string;
  convertResult?: ConvertResult;
  currentRate?: ConvertResult;
  isLoading: boolean;
  data: CurrencyName[];
}
