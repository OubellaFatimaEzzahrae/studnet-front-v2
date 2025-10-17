import { Major } from "./major.model";

export interface Student {
    id?: number;
    firstName?: string;
    lastName?: string;
    birthday?: string;
    major?: Major;
}