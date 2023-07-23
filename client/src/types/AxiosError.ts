// AxiosError.ts
import { AxiosResponse } from "axios";

export interface AxiosError extends Error {
  response?: AxiosResponse;
}
