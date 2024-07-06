import type { NextApiRequest, NextApiResponse } from 'next';
import { getBlogs } from '@/lib/getBlogs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const blogs = await getBlogs();
        res.status(200).json({ success: true, data: blogs });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch blogs' });
    }
}
