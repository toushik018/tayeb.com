import axiosInstance from './axios';

export async function getDescription() {
    try {
        const response = await axiosInstance.get('/description');
        const data = response.data;

        // Assuming the response contains an array of descriptions
        // and you want to use the first one
        const description = data && data.data && data.data.length > 0 ? data.data[0].content : "";
        return description;
    } catch (error) {
        console.error('Error fetching description:', error);
        return "";
    }
}
