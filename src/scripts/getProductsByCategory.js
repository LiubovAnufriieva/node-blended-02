import fs from "node:fs/promises";
import { PATH_DB }from "../constants/path.js";

const getProductsByCategory = async category => {
    try {
        const content = await fs.readFile(PATH_DB, "utf-8");
        const contentParse = JSON.parse(content);
        const result = contentParse.filter(item => item.category.toLowerCase() === category.toLowerCase().trim());
        console.log(result);
      } catch (e) {
        console.log("Print error", e);
      }
};

getProductsByCategory("Music"); 


