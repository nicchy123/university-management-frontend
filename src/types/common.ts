
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
export interface Name {
  firstName: string;
  lastName: string;
  middleName: string;
}
export interface IAdmin {
  id: string;
  name: Name;
  gender: string;
  managementDepartment: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  dateOfBirth: string;
  bloodGroup: string;
  designation: string;
  presentAddress: string;
  permanentAddress: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}