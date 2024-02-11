export type Id = string | number;

export type Status = 'todo' | 'progress' | 'review' | 'done';

export interface IColumn {
    id: Id;
    title: string;
}

export interface ITask {
    id: Id;
    title: string;
    priority: string;
    columnId: string;
    status: Status;
}
