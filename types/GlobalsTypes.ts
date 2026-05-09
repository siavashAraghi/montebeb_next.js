// import { MongoClient } from "mongodb";

// export interface GlobalTypes {
// mongoClientPromise:Promise<MongoClient> | null
// }

export enum PagesName {
  home = "Home",
  products = "Products",
  product = "Product",
  blogs = "Blogs",
  blog = "Blog",
  aboutUs = "AboutUs",
  contactUS = "ContactUs",
}

export enum Templates {
  default = "Primary",
}
export interface Settings {
  id: number;
  active: boolean;
  templateName: string;
  createTime: string;
}

export interface NavLinks {
  id: number;
  name: string;
  title: string;
  description: string;
  url_address: string;
  list_type: number;
  source_type: string;
  parent_id:number
}

export interface Product {
  id: number;
  name: string;
  title: string;
  short_description: string;
  description: string;
  main_img_url: string;
  price: number;
  in_marketing: boolean;
  create_at: string;
  marketing_img_url:string;
}

export interface GeneralDataTypes {
  id:number;
  title:string;
  desciption:string;
  keys:string;
  logo_url:string
}
