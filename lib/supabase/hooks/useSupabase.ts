// import { useState } from "react";
// import { supabase } from "../products";


// export const useSupabase = () => {
//     // State for storing all products, filtered data, and single product
//     const [products, setProducts] = useState<any[]>([]);
//     const [filterData, setFilteredData] = useState<any[]>([]);
//     const [singleProduct, setSingleProduct] = useState<any | null>(null);
//     const [menProduct, setMenProduct] = useState<any | null>(null);
//     const [womenProduct, setWomenProduct] = useState<any | null>(null);

//     // Fetch all products from Supabase
//     const getDataFromSupabase = async () => {
//         const { data, error } = await supabase.from('Proanyts').select("*");
        
//         if (data) {
//             setProducts(data);
//             // console.log("All products:", data);
//         }
        
//         if (error) {
//             console.error("Error fetching products:", error);
//         }
//     };

//     // Fetch filtered products based on a search query
//     const getFilteredData = async (query: string) => {
//         const { data, error } = await supabase
//             .from('Products')
//             .select("*")
//             .or(`title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`);

//         if (data) {
//             setFilteredData(data);
//             console.log("Filtered data:", data);
//         }

//         if (error) {
//             console.error("Error fetching filtered data:", error);
//         }
//     };

//     // Fetch a single product by its ID
//     const getSingleProduct = async (id: number) => {
//         const { data, error } = await supabase
//             .from('Products')
//             .select('*')
//             .eq('id', id)
//             .single();  // This ensures only one record is returned

//         if (data) {
//             setSingleProduct(data);
//             console.log("Single product:", data);
//         }

//         if (error) {
//             console.error("Error fetching single product:", error);
//         }
//     };
 
//     const getMenClothing = async () => {
//         const { data, error } = await supabase
//             .from('Products')
//             .select('*')
//             .ilike('category', `men's clothing`);
    
//         if (data) {
//             setMenProduct(data);
//             console.log("Men's clothing products:", data);
//         }
    
//         if (error) {
//             console.error("Error fetching men's clothing products:", error);
//         }
//     };
    
//     const getWomenClothing = async () => {
//         const { data, error } = await supabase
//             .from('Products')
//             .select('*')
//             .ilike('category', `women's clothing`);
    
//         if (data) {
//             setWomenProduct(data);
//             console.log("women's clothing products:", data);
//         }
    
//         if (error) {
//             console.error("Error fetching women's clothing products:", error);
//         }
//     };

//     return {
//         products,
//         filterData,
//         singleProduct,
//         menProduct,
//         womenProduct,
//         getDataFromSupabase,
//         getFilteredData,
//         getSingleProduct,
//         getMenClothing,
//         getWomenClothing
//     };
// };














import { useState } from "react";
import { supabase } from "../products"; // Adjust the path if necessary

interface Product {
  rating: number;
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  // Add other fields as needed
}

export const useSupabase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterData, setFilteredData] = useState<Product[]>([]);
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const [menProduct, setMenProduct] = useState<Product[]>([]);
  const [womenProduct, setWomenProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // Added to prevent repeated loading

  // Fetch all products from Supabase
  const getDataFromSupabase = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('Products').select("*");

    if (data) {
      setProducts(data);
    }
    if (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  // Fetch filtered products based on a search query
  const getFilteredData = async (query: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('Products')
      .select("*")
      .or(`title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`);

    if (data) {
      setFilteredData(data);
    }
    if (error) {
      console.error("Error fetching filtered data:", error);
    }
    setLoading(false);
  };

  // Fetch a single product by its ID
  const getSingleProduct = async (id: number) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('Products')
      .select('*')
      .eq('id', id)
      .single();

    if (data) {
      setSingleProduct(data);
    }
    if (error) {
      console.error("Error fetching single product:", error);
    }
    setLoading(false);
  };

  // Fetch men's clothing products
  const getMenClothing = async () => {
    if (menProduct.length > 0) return; // Prevent re-fetch if data already exists
    setLoading(true);
    const { data, error } = await supabase
      .from('Products')
      .select('*')
      .ilike('category', `men's clothing`);

    if (data) {
      setMenProduct(data);
    }
    if (error) {
      console.error("Error fetching men's clothing products:", error);
    }
    setLoading(false);
  };

  // Fetch women's clothing products
  const getWomenClothing = async () => {
    if (womenProduct.length > 0) return; // Prevent re-fetch if data already exists
    setLoading(true);
    const { data, error } = await supabase
      .from('Products')
      .select('*')
      .ilike('category', `women's clothing`);

    if (data) {
      setWomenProduct(data);
    }
    if (error) {
      console.error("Error fetching women's clothing products:", error);
    }
    setLoading(false);
  };

  return {
    products,
    filterData,
    singleProduct,
    menProduct,
    womenProduct,
    loading,
    getDataFromSupabase,
    getFilteredData,
    getSingleProduct,
    getMenClothing,
    getWomenClothing,
  };
};
