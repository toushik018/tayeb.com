import type { NextApiRequest, NextApiResponse } from 'next';
import { getSkills } from '@/lib/getSkills';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const skills = await getSkills();
        res.status(200).json({ success: true, data: skills });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch skills' });
    }
}
