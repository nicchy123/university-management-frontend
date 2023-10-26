import { type } from "os"

export interface Imeta{
    limit: number,
    page: number,
    size: number
}

export type ResponceSuccesType  = {
    data: any,
    meta: Imeta
} 
type IGenericErrorMessage = {
    path: string | number,
    message: string
}
export type ResponceErrorType = {
  statusCode: number;
  messages: string;
  errorMessages: IGenericErrorMessage[]
}; 