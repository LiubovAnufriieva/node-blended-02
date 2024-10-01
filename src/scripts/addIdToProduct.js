import { PATH_DB } from "../constants/path.js";
import fs from "node:fs/promises";

const addIdToProduct = async () => {};
try {
  const products = await fs.readFile(PATH_DB, "utf-8");
  const parseProducts = JSON.parse(products);
  const result = parseProducts.map((product, index) => {
    return { ...product, id: index + Date.now() };
  });
  await fs.writeFile(PATH_DB, JSON.stringify(result, null, 2), "utf-8");
} catch (e) {
  console.log("Print error:", e);
}

addIdToProduct();
