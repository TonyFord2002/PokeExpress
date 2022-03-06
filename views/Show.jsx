const React = require('react');

    class Show extends React.Component {
      render() {
          const { pokemon } = this.props
          const pokename = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          return (
              <div>
            <h1>Gotta Catch 'Em All!!</h1>
            <h2>{pokename}</h2>
            <img src = {`${pokemon.img}.jpg`}></img>
            <br></br>
            <a href = '/pokemon'>Back to list</a>
            </div>
           )
        }
    }
    module.exports = Show