export type Product = {
  _id: string;
  name: string;
  price: number;
  image: string[];
  description: string;
  category: string;
  colors: string[];
};

export type ProductDetailsState = {
  product: Product | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};
