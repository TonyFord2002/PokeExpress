const React = require('react');

    class Index extends React.Component {
      render() {
          //destructering same as poke = this.props.poke
          const { pokemon } = this.props
          return (
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
              <body style={{backgroundColor: 'lightgreen'}}>
                    <div>
                    <h1>See all the Pokemon!</h1>

                    <ul>
                          {pokemon.map((poke, i) => {
                              const pokename = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
                              return (
                                  <li>
                                      <a href={`/pokemon/${i}`}>
                                          {pokename}
                                      </a>{' '}
                                      <br />
                                      <br />
                                  </li>
                              );
                          })}
                      </ul>
                   
                </div>
                </body>
     </html>
          )}}
module.exports = Index

