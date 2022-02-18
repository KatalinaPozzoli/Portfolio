export interface Project {
    type: 'DESIGN' | 'DEVELOPMENT';
    title: string;
    image: string;
    tools: string[];
    description: string;
    buttonLabel: string;
    link: string;
}
