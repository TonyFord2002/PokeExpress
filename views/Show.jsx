
const React = require('react')

    class Show extends React.Component {
      render() {
          const { pokemon } = this.props
          const pokename = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
                      <body style = {{backgroundColor: 'gold'}}>
                      <div>
                    <h1><img style = {{height:'250px'}}src = 'https://i0.wp.com/twobeardgaming.com/wp-content/uploads/2020/05/pokemon-gotta.png?fit=1200400&ssl=1'></img></h1>
                    {/* <h1 style = {{color: 'red', fontFamily: 'cursive'}}>Gotta Catch 'Em All!!</h1> */}
                    <h2 style = {{color: 'blue'}}>{pokename}</h2>
                    <img src = {`${pokemon.img}.jpg`}></img>
                    <br></br>
                    <a style = {{color: 'red'}} href = '/pokemon'>Back to list</a>
                    </div>
                    </body>
    </html>
                   )
                }
            }
            module.exports = Show