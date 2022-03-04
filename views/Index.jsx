const React = require('react');

    class Index extends React.Component {
      render() {
          //destructering same as poke = this.props.poke
          const { pokemon } = this.props;
          return (
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
                                      {poke.img}
                                      <br />
                                      <br />
                                  </li>
                              );
                          })}
                      </ul>
                   
                </div>
          )}}
module.exports = Index