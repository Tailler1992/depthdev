import Column from '../Column/Column';

import s from './Board.module.scss';

const Board = () => {
    return (
        <div className={s.board}>
            <Column />
            <Column />
        </div>
    );
};

export default Board;
