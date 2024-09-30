import { createFakeProduct } from "../utils/createFakeProducts.js";
import fs from "node:fs/promises";
import { PATH_DB }from "../constants/path.js";

const generateProducts = async (number) => {
  try {
    const content = await fs.readFile(PATH_DB, "utf-8");
    const contentParse = JSON.parse(content);
    for (let i = 0; i < number; i += 1) {
      contentParse.push(createFakeProduct());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contentParse, null, 2), "utf-8");
  } catch (e) {
    console.log("Print error", e);
  }
};

generateProducts(5);
