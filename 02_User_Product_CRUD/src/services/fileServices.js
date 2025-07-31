import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const createFile = async (data, pathData) => {

    try {
        const dataFilePath = path.join(__dirname, `../data/${pathData}`)

        await fs.mkdir(path.dirname(dataFilePath), { recursive: true })

        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 4), 'utf-8');
    }catch (error) {
        const pathUsed = dataFilePath || `../data/${pathData}`;
        throw new Error(`Error al crear o guardar el archivo: ${pathUsed}, ${error.message}`);
    }
}


export const readFile = async (pathData) => {
     try {
        const dataFilePath = path.join(__dirname, `../data/${pathData}`)

        const data = await fs.readFile(dataFilePath, 'utf8')

        return JSON.parse(data)
    } catch (error) {
        throw new Error(`Error al leer el archivo: ${dataFilePath}, ${error}`)
}
}
