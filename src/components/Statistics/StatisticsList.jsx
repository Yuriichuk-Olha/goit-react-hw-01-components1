import PropTypes from 'prop-types';
import Statistics from "./Statistics";
import css from './Statistics.module.css';

export default function StatisticsList({title, stats}) {
   
    return (
        <div>
            <ul className={css.statList} title={title}>
                {stats.map(stat=>(
                <li key={stat.id}> 
            
                    <Statistics                                       
                    id={stat.id}
                    label={stat.label}
                    percentage={stat.percentage}
                    />
                
                </li>
                )
                )}
            </ul>
        </div>
        )   
};

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};