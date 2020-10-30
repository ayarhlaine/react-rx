import { colors } from '../../colors/colors';
import './Diagram.css';
const Diagram = ({ values }) => {
    return (
        <div className='diagram'>
            {
                values.map((value, index) => (
                    <div key={index}
                    style={{
                        backgroundColor: colors[index]
                    }}
                    className='diagram__item'>{value}</div>
                ))
            }
        </div>
    )
}

export default Diagram
