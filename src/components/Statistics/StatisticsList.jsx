import PropTypes from 'prop-types';
import Statistics from "./Statistics";


export default function StatisticsList({title, stats}) {
   
    return (
        <div>
            <ul title={title}>
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