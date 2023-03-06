import Statistics from "./Statistics";

export default function StatisticsList({stats}) {
    console.log(stats);
    return (
        <div>
                {stats.map(stats=>(
                <li key={stats.id}> 
                
                
                    <Statistics                                       
                    id={stats.id}
                    label={stats.label}
                    percentage={stats.percentage}
                    />
                
                </li>
                )
                )}
        </div>
        )   
};

// StatisticsList.propTypes = {
//     stats: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//         }),
//     ),
// };