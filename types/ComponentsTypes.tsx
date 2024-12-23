type Review = {
    name: string;
    rating: string;
    text: string;
};
export type Product = {
    id: string;
    name: string;
    price: number;
    image?: string
    description: string;
    images: string[];
    mainImage: string;
    sku: string;
    category: string;
    tags: string[];
    reviews: Review[];
    sizes: string[];
    colors: string[];
    additionalInfo: Array<{ label: string; value: string }>;
};

export interface ProductType {
    id: string;
    name: string;
    price: number;
    mainImage: string
    availableSizes: string[]; // List of available sizes
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  additionalInfo: string;
}


type BadgeType = "discount" | "new";

export interface ProductCardProps {
  id: number | string;
  image: string;
  name: string;
  description: string;
  currentPrice: string;
  originalPrice?: string;
  badge?: { type: BadgeType; label: string };
}

// Define the form data type
export interface FormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}