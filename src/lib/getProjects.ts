import axiosInstance from './api';

export type Project = {
    _id: string;
    title: string;
    repo: string;
    demo: string;
    thumbnail: string;
    description: string;
    tags: string[];
    live: string;
};



export async function getProjects(): Promise<Project[]> {
    try {
        const response = await axiosInstance.get('/project');
        const data = response.data;

        // Assuming the response contains an array of projects
        const projects = data && data.data ? data.data : [];
        return projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}


export async function getProjectById(id: string): Promise<Project | null> {
    try {
        const response = await axiosInstance.get(`/project/${id}`);
        const data = response.data;

        // Assuming the response contains the project data
        const project = data && data.data ? data.data : null;
        return project;
    } catch (error) {
        console.error(`Error fetching project with id ${id}:`, error);
        return null;
    }
}
