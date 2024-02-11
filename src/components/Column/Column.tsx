import Task from '../Task/Task';

import s from './Column.module.scss';

const Column = () => {
    return (
        <div className={s.column}>
            <div className={s.header}>
                <h2 className={s.title}>Title</h2>
                <span className={s.count}>4</span>
            </div>
            <div className={s.tasks}>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    );
};

export default Column;
