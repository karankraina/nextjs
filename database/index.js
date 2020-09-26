import db from './connection';

export const galleryImages = (isAdmin, id) => db.any('select * from sharda_gallery where ($1 = true OR isactive = true) AND ($2 is null OR $2 = id) order by 1 desc', [isAdmin, id]);

export const documentFiles = (isAdmin, id) => db.any('select * from sharda_documents where ($1 = true OR isactive = true) AND ($2 is null OR $2 = id) order by 1 desc', [isAdmin, id]);

export default { galleryImages, documentFiles }