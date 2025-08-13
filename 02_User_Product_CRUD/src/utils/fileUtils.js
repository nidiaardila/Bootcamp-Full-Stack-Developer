import { NotFoundError, YeisonError } from "../error/typesError.js";
import { readFile, createFile } from "../services/fileServices.js"

export const createDataFile = async (data, pathData) => {
    console.log('📦 createDataFile llamado con:', { pathData, data }); // 🔍

    try {
        const datafile = await readFile(pathData);
        let dataJson = null

        !datafile || datafile.length === 0 ? dataJson = [data] : dataJson = [...datafile, data]

        await createFile(dataJson, pathData)

    } catch (error) {
        // throw new Error(`Error al gestionar la creacion del archivo con la data. Error ${error}`)
        throw new YeisonError(`Error al gestionar la creación del archivo con la data`, error)
    } 
}

export const getAllData = async(pathData) => {
    try {
        const data = await readFile(pathData)
        return data;
    } catch (error) {
        // throw new Error(`No pudimos acceder a los datos`)
        throw new NotFoundError(`No pudimos acceder a los datos`, error)
    }
}

export const getElementById = async(id, pathData) => {
    try {
        const data = await readFile(pathData)
        const dataFound = data.find(dataFound => dataFound.id === id)

        return dataFound
    } catch (error) {
        // throw new Error ('No pudimos encontrar el dato por el id')
        throw new NotFoundError('No pudimos encontrar el dato por el id', error)
    }
}

export const updateData = async(id, newData, pathData) => {
    try {
        const data = await readFile(pathData);
        const indexData = data.findIndex(dataFound => dataFound.id === id);

        if(indexData === -1) throw new Error ('No pudimos encontrar el dato que buscas')

        //Cortesia: Devolver el dato anterior para comparar la informacion
        const oldData = {...data[indexData]}

        data[indexData] = { ...newData, id, active : true}
        await createFile(data, pathData)

        //Cortesia: Devolver data vieja
        return oldData

    } catch (error) {
        // throw new Error ('No pudimos actualizar la data') 
        throw new YeisonError ('No pudimos actualizar la data',  error) 
    }
}

export const permanentlyDeleteData = async(id, pathData) => {
    try {
        const data = await readFile(pathData);

        const indexData = data.findIndex(dataFound => dataFound.id === id);

        if(indexData === -1) throw new Error ('No pudimos encontrar la data');

        const dataDelete = data[indexData]
        data.splice(indexData, 1)

        await createFile(data, pathData)

        return dataDelete
    } catch (error) {
        // throw new Error ('No pudimos Eliminar la data')
        throw new YeisonError("No pudimos actualizar la data", error);
    }
}