// import { useState } from "react"
// import { supabase } from "../products";

// export const useSupabase = () => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const [products, setProducts] = useState<any>([]);
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const [filterData, setFilteredData] = useState<any>([]);
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const [singleProduct, setSingleProduct]  = useState<any>([]);

//     const getDataFromSupabase = async () => {

//         const {data, error} = await supabase.from('Products').select("*");
//         if (data) {
//             setProducts(data);
//             console.log(data);
//         }
//         if (error) {
//             console.log(error);
//         }
//  }

//     const getFilteredData = async (query:string) => {

//             const {data, error} = await supabase
//             .from('Products')
//             .select("*")
//             .or(`title.ilike.%${query}%', description.ilike.%${query}% , category.ilike.%${query}%`);
//             if (data) {
//                 setFilteredData(data);
//                 console.log(data);
//             }
//             if (error) {
//                 console.log(error);
//             }
//      }
//      const getSingleProduct = async (id: number) => {
//         const {data, error} = await supabase.from('Products').select('*').eq('id', id);

//         if (data){
//             setSingleProduct(data);
//         if (error){
//             console.log(error);
//         }
//         }
//      }


//     return { products,
//              getDataFromSupabase,
//              filterData,
//              getFilteredData,
//              singleProduct,
//              getSingleProduct };
             


// };
import { useState } from "react";
import { supabase } from "../products";

export const useSupabase = () => {
    // State for storing all products, filtered data, and single product
    const [products, setProducts] = useState<any[]>([]);
    const [filterData, setFilteredData] = useState<any[]>([]);
    const [singleProduct, setSingleProduct] = useState<any | null>(null);
    const [menProduct, setMenProduct] = useState<any | null>(null);
    const [womenProduct, setWomenProduct] = useState<any | null>(null);

    // Fetch all products from Supabase
    const getDataFromSupabase = async () => {
        const { data, error } = await supabase.from('Products').select("*");
        
        if (data) {
            setProducts(data);
            // console.log("All products:", data);
        }
        
        if (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Fetch filtered products based on a search query
    const getFilteredData = async (query: string) => {
        const { data, error } = await supabase
            .from('Products')
            .select("*")
            .or(`title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`);

        if (data) {
            setFilteredData(data);
            console.log("Filtered data:", data);
        }

        if (error) {
            console.error("Error fetching filtered data:", error);
        }
    };

    // Fetch a single product by its ID
    const getSingleProduct = async (id: number) => {
        const { data, error } = await supabase
            .from('Products')
            .select('*')
            .eq('id', id)
            .single();  // This ensures only one record is returned

        if (data) {
            setSingleProduct(data);
            console.log("Single product:", data);
        }

        if (error) {
            console.error("Error fetching single product:", error);
        }
    };
 
    const getMenClothing = async () => {
        const { data, error } = await supabase
            .from('Products')
            .select('*')
            .ilike('category', `men's clothing`);
    
        if (data) {
            setMenProduct(data);
            console.log("Men's clothing products:", data);
        }
    
        if (error) {
            console.error("Error fetching men's clothing products:", error);
        }
    };
    
    const getWomenClothing = async () => {
        const { data, error } = await supabase
            .from('Products')
            .select('*')
            .ilike('category', `women's clothing`);
    
        if (data) {
            setWomenProduct(data);
            console.log("women's clothing products:", data);
        }
    
        if (error) {
            console.error("Error fetching women's clothing products:", error);
        }
    };

    return {
        products,
        filterData,
        singleProduct,
        menProduct,
        womenProduct,
        getDataFromSupabase,
        getFilteredData,
        getSingleProduct,
        getMenClothing,
        getWomenClothing
    };
};
