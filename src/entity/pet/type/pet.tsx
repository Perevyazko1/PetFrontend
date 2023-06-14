export type pet = {
    id: number;
    name: string;
    gender: "man" | "woman";
    age?: number;
    about?: string;
    status?: string;
}