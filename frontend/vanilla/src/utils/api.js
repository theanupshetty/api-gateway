// api.js
const userServiceUrl = process.env.REACT_APP_USER_SERVICE_URL;
const productServiceUrl = process.env.REACT_APP_PRODUCT_SERVICE_URL;
const orderServiceUrl = process.env.REACT_APP_ORDER_SERVICE_URL;

export const login = async () => {
    const response = await fetch(userServiceUrl);
    return response.json();
};

export const fetchProducts = async () => {
    const response = await fetch(productServiceUrl);
    return response.json();
};

export const fetchOrders = async () => {
    const response = await fetch(orderServiceUrl);
    return response.json();
};
