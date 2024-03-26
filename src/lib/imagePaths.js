import { base } from '$app/paths';

export const generateSubfolderImages = (folderPath, filenames) => {
    return filenames.map(filename => `${base}${folderPath}/${filename}`);
};

export const generateSingleImages = (folderPath, filenames) => {
    const images = {};
    filenames.forEach(filename => {
        const key = filename.split('.')[0];
        images[key] = `${base}${folderPath}${filename}`;
    });
    return images;
};