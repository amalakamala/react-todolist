function Persona (props) {
        return (
           <div>
              <img src={props.foto} style={{ 'maxWidth': 100 }}/>
              <p>
                Mi nombre es {props.nombre} {props.apellido} y tengo {props.edad} años
              </p> 
            </div>
          )
      }
      
      function Ficha (props) {
        console.log(props)
        return (
          <div>
            {props.children.filter(item => item.props.nombre.search(/r/i) >= 0)}
          </div>
        )
      } 
      
      Persona.propTypes = {
        nombre: PropTypes.string.isRequired,
        apellido: PropTypes.string.isRequired,
        edad: PropTypes.number.isRequired,
        foto: PropTypes.string.isRequired
       } 
      
      
      let personas = [
        {
          nombre: 'Alexandra',
          apellido: 'Neira',
          edad: 31,
          foto: 'http://i0.kym-cdn.com/entries/icons/mobile/000/011/365/GRUMPYCAT.jpg'
        },
        {
          nombre: 'Rangi',
          apellido: 'Becerra',
          edad: 32,
          foto: 'https://avatars2.githubusercontent.com/u/1004748?s=460&v=4'

        },
        {
          nombre: 'Caterina',
          apellido: 'Da Silva',
          edad: 26,
          foto: 'https://cdn.bulbagarden.net/upload/thumb/0/02/129Magikarp.png/250px-129Magikarp.png'

        }
      ]

       
      ReactDOM.render( 
           <Ficha borderColor='red' background='blue'>
             {personas
               .map((item, i) => (
               <Persona key={i} 
                 {...item} />
             ))}
           </Ficha>,
        document.getElementById('app')
      );