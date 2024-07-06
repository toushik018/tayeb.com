import type { NextApiRequest, NextApiResponse } from 'next';
import { getProjects } from '@/lib/getProjects';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const projects = await getProjects();
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch projects' });
    }
}
