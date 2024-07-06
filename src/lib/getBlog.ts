import { IBlog } from '@/types/blog';
import axiosInstance from './axios';


export async function getBlogById(id: string): Promise<IBlog | null> {
    try {
        const response = await axiosInstance.get(`/blog/${id}`);
        return response.data.data || null;
    } catch (error) {
        console.error('Error fetching blog by id:', error);
        return null;
    }
}
