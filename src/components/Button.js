import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, showAddTask }) => {
    return (
        <button className={`${!showAddTask ? 'bg-green-500' : 'bg-rose-500'} rounded-md pt-2 pb-2 pr-3 pl-3 text-white`} onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'green',
    text: 'button'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
