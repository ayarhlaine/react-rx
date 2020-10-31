import { colors } from '../../colors/colors';
import './WelcomeDiagram.css';
const WelcomeDiagram = ({ values }) => {
    return (
        <div className='welcomeDiagram'>
            {
                values.map((value, index) => (
                    <div key={index}
                    style={{
                        backgroundColor: colors[index]
                    }}
                    className='welcomeDiagram__item'>{value}</div>
                ))
            }
        </div>
    )
}

export default WelcomeDiagram
