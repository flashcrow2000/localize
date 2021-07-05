import axios from 'axios';

export const getLocalizedKey = async (page, locale, key) => {
    const localizedKey = await axios.get(`http://localhost:4400/translations?page=${page}&locale=${locale ?? ''}&key=${key ?? ''}`);
    return localizedKey.data;
}