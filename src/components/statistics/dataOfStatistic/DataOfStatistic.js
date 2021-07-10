import s from './DataOfStatistic.module.css';
import PropTypes from 'prop-types'; 

function getRandomColor() {
    const r = function () {
      return Math.floor(Math.random() * 256);
    };
    return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}

function DataOfStatistic ({id, label, percentage}) {

    return (
            <li key = {id} className={s.item}  style={{ backgroundColor: getRandomColor(255) }}>
                <span className={s.label}>{label + " "}</span>
                <span className={s.percentage} >{percentage}%</span>
            </li>
    );
}

export default DataOfStatistic;
