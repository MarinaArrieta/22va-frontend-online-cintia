import Button from "./Button"

const main = () => {
    const pharagraf = ' - Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere architecto esse labore dolorem. Adipisci soluta fugit rem ut odit consectetur, dolorum tempore labore, incidunt sequi explicabo. Qui consequuntur obcaecati quisquam!' 
    const pharagrafStyle ={
      color: '#ffebcd'
    }
    const num = 1
    const styleH1 = {
        color:'orange',
        fontStyle: 'italic',
        fontWeight: '800'
    }
    const pad = {
        padding: '25px'
    }
    const styleDiv ={
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
  }
  return (
    <div style={pad}>
      <h1 style={styleH1}>Bla bla...</h1>
      <h2>Descripcion</h2>
      <p style={pharagrafStyle}>{num}{pharagraf}</p>
      <p style={pharagrafStyle}>{num+1}{pharagraf}</p>
      <div style={styleDiv}>
        <Button title='atras' color="#553b32" value='false'/>
        <Button title="siguiente" color="#32221d" value='true'/>
      </div>
    </div>
  )
}

export default main
