export const Product = (props) => {
    const {name, sale, price} = props;
  return (
    <div>
      <h3>{name}</h3>
      {
        sale && <div>
            <p style={{color:'green'}}>En oferta!</p>
            <p> Precio anterior: {price}</p>
            <p> Oferta: {price*0.5}</p>
        </div>
      }
      {
        !sale && <p style={{color:'red'}}>Sin oferta</p>
      }
    </div>
  )
}

export default Product