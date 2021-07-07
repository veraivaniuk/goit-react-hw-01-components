import s from './DataOfStatistic.module.css';
import PropTypes from 'prop-types'; 

function getRandomColor() {
    const r = function () {
      return Math.floor(Math.random() * 256);
    };
    return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}

export default function DataOfStatistic ({id, label, percentage}) {
    return (
            <li key = {id} className={s.item}  style={{ backgroundColor: getRandomColor(255) }}>
                <span className={s.label}>{label + " "}</span>
                <span className={s.percentage} >{percentage}%</span>
            </li>
    );
}

DataOfStatistic.prototype = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired, 
    id: PropTypes.number.isRequired,
  }