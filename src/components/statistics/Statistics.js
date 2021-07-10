import s from './Statistics.module.css';
import DataOfStatistic from "./dataOfStatistic/DataOfStatistic";
import PropTypes from 'prop-types';

function Statistics ( {title, stats} ) {

    return (
         <section> 
             {title && (<h2 className={s.title}>{title}</h2>) }              
            
            <ul className={s.list}>
                {stats.map(({id, label, percentage }) => 
                (<DataOfStatistic key={id} label={label} percentage={percentage}/>))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired, 
        id: PropTypes.number.isRequired,
    })),
}

export default Statistics;
