import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

const groupByCategory = async () => {
try {
    const products = await fs.readFile(PATH_DB, 'utf-8');
    const parseProducts = JSON.parse(products);
    const categories = parseProducts.map(product => product.category);
    // const filteredCategories = categories.filter((product, index, array) => {
    //     return array.indexOf(category) === index; });

    const result = {};
    categories.forEach((category) => {
        result[category] = [];
        parseProducts.forEach((product) => {
            if (category === product.category) {
                result[category].push(product);            
            }
        })
    })
    console.log(result);
    
} catch (e) {
    console.log("Print error:", e);
}};

groupByCategory();



