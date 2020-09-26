import { getDocuments } from '../../controllers'

export default async (request, response) => {
    const { method: httpMethod } = request;
    if (httpMethod === 'GET') {
        try {
            let { id, filter } = request.query;
            console.log({filter})
            filter = !!filter && filter.split(',');
            let images = await getDocuments(false, id);
            if (!images || !images.length) {
                throw new Error(404)
            }
            images = !filter ? images : images.map(imageFields => {
                return Object.fromEntries(Object.entries(imageFields).filter(([key]) => filter.indexOf(key) !== -1))
            })
            images = images.length === 1 ? images[0] : images;
            response.status(200).json(images)
        } catch (error) {
            response.status(404).json({ error: 'Resource not found !', errorMessage: error.message })
        }
    } else if (httpMethod === 'POST') {
        response.status(200).json('Not ready yet !')
    }
}