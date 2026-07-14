export interface ICustomer {
    name: string
    address: string
    images: string[]
    phoneNumber: string
  }

export interface IVIPState{
    id:string | number;
    image:string;
    title:string;
    location:string;
    area:string;
    bedrooms:string;
    parking:string;
    price:string;
    period:string;
}
  
export interface IChildren{
    children:React.ReactNode;
}