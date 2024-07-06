import { ISkill } from '@/types/skill';
import axiosInstance from './axios';


export async function getSkills(): Promise<ISkill[]> {
    try {
        const response = await axiosInstance.get('/skills');
        const skills = response.data && response.data.data ? response.data.data : [];
        return skills;
    } catch (error) {
        console.error('Error fetching skills:', error);
        return [];
    }
}
