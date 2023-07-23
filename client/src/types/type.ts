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

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  userId: string | null;
};

export type FavoriteState = {
  favorites: Product[];
  userId: string | null;
};


export type ProductsState = {
  items: Product[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};

export type Props = {
  product: Product;
};

export type SignupData = {
  username: string;
  email: string;
  password: string;
}

export type LoginData = {
  email: string;
  password: string;
}