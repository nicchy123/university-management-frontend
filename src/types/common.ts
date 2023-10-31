import { type } from "os"

export interface Imeta{
    limit: number,
    page: number,
    size: number
    total?: number
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

export type IDepartment = {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    _v: string;
}