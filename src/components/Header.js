import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAddTask }) => {
    return (
        <header>
            <div className='grid grid-flow-col justify-between mx-2 my-2'>
                <h1 className='h1'>{title}</h1>
                <div>
                    <Button text={showAddTask ? 'Close' : 'Add'} showAddTask={showAddTask} onClick={onAdd} />
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

// const headerStyle = { color: 'red', backgroundColor: 'black' }

export default Header
