import { useMemo } from 'react';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import Task from '../Task/Task';

import { IColumn, ITask } from '../../types/types';

import s from './Column.module.scss';

interface ColumnProps {
    column: IColumn;
    tasks: ITask[];
}

const Column = ({ column, tasks }: ColumnProps) => {
    const tasksIds = useMemo(() => {
        return tasks.map((task) => task.id);
    }, [tasks]);

    const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
        id: column.id,
        data: {
            type: 'Column',
            column,
        },
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <SortableContext items={tasksIds}>
            <div style={style} ref={setNodeRef} className={`${s.column} ${s[`column_${column.id}`]}`}>
                <div className={s.header} >
                    <h2 className={s.title}>{column.title}</h2>
                    <span className={s.count}>{tasks.length}</span>
                    <button className={s.btn_drag} {...attributes} {...listeners}>
                        <svg viewBox="0 0 20 20" width="12">
                            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
                        </svg>
                    </button>
                </div>
                <div className={s.tasks}>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </div>
                <button className={s.btn_new_issue}>
                    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                        <path
                            d="M13 11V3.993A.997.997 0 0012 3c-.556 0-1 .445-1 .993V11H3.993A.997.997 0 003 12c0 .557.445 1 .993 1H11v7.007c0 .548.448.993 1 .993.556 0 1-.445 1-.993V13h7.007A.997.997 0 0021 12c0-.556-.445-1-.993-1H13z"
                            fill="currentColor"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                    Create a new issue
                </button>
            </div>
        </SortableContext>
    );
};

export default Column;
