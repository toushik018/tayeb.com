export interface IBlog {
    slug: string;
    title: string;
    summary: string;
    publishedAt: string; // Changed to string
    readingTime: string;
    body: {
        code: string;
    };
    draft: boolean;
    [key: string]: any;
}
