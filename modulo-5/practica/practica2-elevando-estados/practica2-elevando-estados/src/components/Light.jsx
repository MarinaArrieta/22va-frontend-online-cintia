const Light = ({color, handleLight, isActive}) => {

    return (
      <div>
        <div onClick={handleLight} style={{
            backgroundColor: isActive ? color : 'grey',
            boxShadow: isActive ? `0 0 15px ${color}` : 'none',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            margin: '10px auto',
            cursor: 'pointer',
          }}></div>
  
      </div>
    )
  }
  
  export default Light
