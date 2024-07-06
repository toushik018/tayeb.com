import { IBlog } from '@/types/blog';
import axiosInstance from './axios';

export async function getBlogs(): Promise<IBlog[]> {
    try {
        const response = await axiosInstance.get('/blog');
        const blogs = response.data && response.data.data ? response.data.data : [];
        return blogs.map((blog: IBlog) => ({
            ...blog,
            publishedAt: new Date(blog.publishedAt).toISOString(),
        }));
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
}
