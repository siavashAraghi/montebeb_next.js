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
  mobile_marketing_img_url:string;
  origin:string,
  cat_url?:string
  colors?:Array<{name:string}>
  features:string
  category_name:string
}

export interface GeneralDataTypes {
  id:number;
  title:string;
  desciption:string;
  short_description:string;
  keys:string;
  logo_url:string;
  address:string;
  tel:string;
  mobile:string;
  email:string;
  header_text: string
  
}

export interface PostTypes {
  id:number;
  title:string;
  content:string;
  short_description:string;
  author_id:number;
  created_at:string;
  image_url:string;
  published:boolean;
}

export interface CategoryType {
  id:number;
  name:string;
  title:string;
  description:string;
  image_url:string;
  parent_id:number;
  list_type:string;
  url_address:string;
}

export interface ImagesTypes {
product_name:string; 
product_id:number;
image_url:string;
color_name:string;
color_id:number;
}