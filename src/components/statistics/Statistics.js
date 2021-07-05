import DataOfStatistic from "./dataOfStatistic/DataOfStatistic";
import PropTypes from 'prop-types';

export default function Statistics ( {title, stats} ) {
    return (
         <section className="statistics"> 
             {title && (<h2 className="title">{title}</h2>) }              
            
            <ul className="stat-list">
                {stats.map(({id, label, percentage }) => 
                (<DataOfStatistic key={id} label={label} percentage={percentage}/>))}
            </ul>
        </section>
    )
}

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.array,
}
