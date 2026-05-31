import { PrismaClient } from "@/generated/prisma/client";

export interface Globals {
  server: {
    prisma: PrismaClient | null;
    isDbConnected: boolean;
  };
}
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
  createTime: Date;
}

export interface NavLinks {
  id: number;
  name: string;
  title: string;
  description: string;
  url_address: string;
  list_type: number;
  source_type: string;
  parent_id: number;
}

export interface Product {
  id: number;
  name: string;
  url_address: string | null;
  title: string;
  description: string;
  short_description: string;
  main_img_url: string;
  price: number;
  created_at: Date;
  in_marketing: boolean;
  marketing_img_url: string | null;
  mobile_marketing_img_url: string | null;
  origin: string | null;
  features: string | null;
  colors?: Array<{ name: string }>;
  // cat_url?: string;
  categories: {
    category_id: number;
    name: string;
    url_address: string;
  }[];
}
export interface GeneralDataTypes {
  id: number;
  title: string | null;
  description: string | null;
  keys: string | null;
  logo_url: string | null;
  header_text: string | null;
  short_description: string | null;
  address: string | null;
  tel: string | null;
  mobile: string | null;
  email: string | null;
  about_img_url: string | null;
  about_description: string | null;
}

export interface PostTypes {
  id: number;
  title: string;
  content: string;
  published: boolean | null;
  created_at: Date | null;
  author_id: number | null;
  image_url: string | null;
  short_description: string | null;
}

export interface CategoryType {
  id: number;
  name: string;
  parent_id: number | null;
  url_address: string;
  title: string | null;
  description: string | null;
  list_type: number | null;
  image_url: string | null;
}

export interface ImagesTypes {
  product_id: number;
  product_name: string;
  image_url: string | null;
  color_name: string | undefined;
  color_id: number | undefined;
}

type FormFields = 'name' | 'email' | 'phone' | 'message'; // Add all relevant keys here
export type MessageType = {
  [key in FormFields]?: string
}

export type FormState = {
  success: boolean;
  message?: string;
  error?: string;
  fieldErrors?: {
    [key in FormFields]? : string
  }
};

export interface CaptchaProps {
  question: string;
  token: string;
  id: string;
}
