import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { ITask } from '../../types/types';

import s from './Task.module.scss';

interface TaskProps {
    task: ITask;
}

const Task = ({ task }: TaskProps) => {
    const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
        id: task.id,
        data: {
            type: 'Task',
            task,
        },
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div style={style} ref={setNodeRef} className={s.task}>
            <div className={s.wrapper}>
                <div className={s.header_wrapper}>
                    <div className={s.text}>
                        <span className={s.priority}>{task.priority}</span>
                        <h5 className={s.title}>{task.title}</h5>
                    </div>
                    <div className={s.header}>
                        <button className={s.btn_drag} {...attributes} {...listeners}>
                            <svg viewBox="0 0 20 20" width="12">
                                <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <span className={s.status}>Frontend</span>
            </div>
        </div>
    );
};

export default Task;
