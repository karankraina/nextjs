import database from '../database';

export const getGalleryImages = async (isAdmin = false, id=null) => {
    try {
        const res = await database.galleryImages(isAdmin, id);
        return res;
    } catch (error) {
        console.log('There was some error in fetching gallery images', error.message)
        return error.message
    }
}

export const getDocuments = async (isAdmin = false, id=null) => {
    try {
        const res = await database.documentFiles(isAdmin, id);
        return res;
    } catch (error) {
        console.log('There was some error in fetching gallery images', error.message)
        return error.message
    }
}