import axios from "axios";

export const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products"
    );
    return response.data;
};

export const fetchProduct = async (id) => {
    const response = await axios.get("https://fakestoreapi.com/products/" + id
    );
    return response.data;
};

