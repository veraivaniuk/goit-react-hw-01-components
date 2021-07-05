import PropTypes from 'prop-types'; 
export default function DataOfStatistic ({id, label, percentage}) {
    return (
            <li key = {id} className="item">
                <span className="label">{label + " "}</span>
                <span className="percentage">{percentage}%</span>
            </li>
    );
}

DataOfStatistic.prototype = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired, 
    id: PropTypes.number.isRequired,
  }