const React = require('react');

    class Index extends React.Component {
      render() {
          //destructering same as fruit = this.props.fruit
          const { pokemon } = this.props;
          return (
                <div>
                    <h1>See all the Pokemon!</h1>
                </div>
          )}}
module.exports = Index