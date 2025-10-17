import { Major } from "../../layout/settings/major/major";

export interface Student {
    id?: number;
    firstName?: string;
    lastName?: string;
    birthday?: string;
    major?: Major;
}