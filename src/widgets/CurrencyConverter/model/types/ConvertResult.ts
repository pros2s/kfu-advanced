interface ConvertResultInfo {
  timestamp: number;
  rate: number;
}

export interface ConvertResult {
  info: ConvertResultInfo;
  date: string;
  result: number;
}

export interface ConvertParams {
  from?: string;
  to?: string;
  amount?: string;
}
