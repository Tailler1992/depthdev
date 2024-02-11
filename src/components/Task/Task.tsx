import s from './Task.module.scss';

const Task = () => {
    return (
        <div className={s.task}>
            <div className={s.wrapper}>
                <div className={s.header_wrapper}>
                    <div className={s.text}>
                        <span className={s.priority}>DEV-36</span>
                        <h5 className={s.title}>This is title for task</h5>
                    </div>
                    <div className={s.header}>
                        <button className={s.btn_drag}>
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
