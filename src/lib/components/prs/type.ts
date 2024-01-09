import type { User } from "../users/type";
import { defaults as user_defaults } from "../users/type";

export interface PRSummary {
    title: string;
    id: string;
    comments: number;
    author: User;
    created_at: number | undefined;
    loading: boolean;
}

export const defaults: PRSummary = {
    title: "",
    id: "",
    comments: 0,
    author: { ...user_defaults },
    created_at: 0,
    loading: true,
};

export interface PRSummaries {
    id: string;
    summaries: PRSummary[];
    loading: boolean;
}

export const summaries_defaults: PRSummaries = {
    id: "",
    summaries: [],
    loading: true,
};