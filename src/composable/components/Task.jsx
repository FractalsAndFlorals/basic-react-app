import PropTypes from 'prop-types'
const Task = (props) => {
    return (
        <div>{props.value}</div>
    )
}

export default Task;

Task.propTypes = {
  value: PropTypes.string.isRequired
}