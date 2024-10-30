const Button = (props) => {
    // console.log('props')color='green'
  return (
    <button type='submit' style={{backgroundColor:props.color}}>
        {props.title}
    </button>
  )
}

export default Button