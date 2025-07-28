import { readFile, createFile } from "../services/fileServices.js"

export const createDataFile = async (data, pathData) => {
    console.log('📦 createDataFile llamado con:', { pathData, data }); // 🔍

    try {

        const datafile = await readFile(pathData);
        let dataJson = null

        !datafile || datafile.length === 0 ? dataJson = [data] : dataJson = [...datafile, data]

        await createFile(dataJson, pathData)


    } catch (error) {
        throw new Error(`Error al gestionar la creacion del archivo con la data. Error ${error}`)
    }
    
}