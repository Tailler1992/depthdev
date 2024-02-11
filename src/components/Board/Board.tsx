import { useMemo, useState } from 'react';
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';

import Column from '../Column/Column';

import { IColumn, ITask } from '../../types/types';

import s from './Board.module.scss';

const initialColumns: IColumn[] = [
    {
        id: 'todo',
        title: 'Backlog',
    },
    {
        id: 'doing',
        title: 'Todo',
    },
    {
        id: 'review',
        title: 'In Progress',
    },
    {
        id: 'done',
        title: 'Done',
    },
];
const initialTasks: ITask[] = [
    {
        id: '1',
        columnId: 'todo',
        title: 'Task 1',
        status: 'todo',
        priority: 'high',
    },
    {
        id: '2',
        columnId: 'todo',
        title: 'Task 2',
        status: 'todo',
        priority: 'high',
    },
    {
        id: '3',
        columnId: 'doing',
        title: 'Task 3',
        status: 'todo',
        priority: 'normal',
    },
    {
        id: '4',
        columnId: 'doing',
        title: 'Task 4',
        status: 'todo',
        priority: 'low',
    },
    {
        id: '5',
        columnId: 'doing',
        title: 'Task 5',
        status: 'todo',
        priority: 'low',
    },
];

interface BoardProps {}

const Board = ({}: BoardProps) => {
    const [columns, setColumns] = useState<IColumn[]>(initialColumns);
    const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

    const [task, setTask] = useState<ITask[]>(initialTasks);

    const [activeColumn, setActiveColumn] = useState<IColumn | null>(null);

    const [activeTask, setActiveTask] = useState<ITask | null>(null);

    // const sensors = useSensors(
    //     useSensor(PointerSensor, {
    //         activationConstraint: {
    //             distance: 1,
    //         },
    //     }),
    // );

    const onDragStart = (event: DragStartEvent) => {
        if (event.active.data.current?.type === 'Column') {
            setActiveColumn(event.active.data.current.column);
            return;
        }

        if (event.active.data.current?.type === 'Task') {
            setActiveTask(event.active.data.current.task);
            return;
        }
    }

    const onDragEnd = (event: DragEndEvent) => {
        setActiveColumn(null);
        setActiveTask(null);

        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        if (activeId === overId) return;

        const isActiveAColumn = active.data.current?.type === 'Column';
        if (!isActiveAColumn) return;

        console.log('DRAG END');

        setColumns((columns) => {
            const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

            const overColumnIndex = columns.findIndex((col) => col.id === overId);

            return arrayMove(columns, activeColumnIndex, overColumnIndex);
        });
    }

    const onDragOver = (event: DragOverEvent) => {
        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        if (activeId === overId) return;

        const isActiveATask = active.data.current?.type === 'Task';
        const isOverATask = over.data.current?.type === 'Task';

        if (!isActiveATask) return;

        // Im dropping a Task over another Task
        if (isActiveATask && isOverATask) {
            setTask((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);
                const overIndex = tasks.findIndex((t) => t.id === overId);

                if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
                    // Fix introduced after video recording
                    tasks[activeIndex].columnId = tasks[overIndex].columnId;
                    return arrayMove(tasks, activeIndex, overIndex - 1);
                }

                return arrayMove(tasks, activeIndex, overIndex);
            });
        }

        const isOverAColumn = over.data.current?.type === 'Column';

        // Im dropping a Task over a column
        if (isActiveATask && isOverAColumn) {
            setTask((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);

                tasks[activeIndex].columnId = overId;
                console.log('DROPPING TASK OVER COLUMN', { activeIndex });
                return arrayMove(tasks, activeIndex, activeIndex);
            });
        }
    }

    return (
        <DndContext
            // sensors={sensors}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
        >
            <SortableContext items={columnsId}>
                <div className={s.board}>
                    {columns.map((column) => (
                        <Column
                            key={column.id}
                            tasks={task.filter((task) => task.columnId === column.id)}
                            column={column}
                        />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
};

export default Board;
