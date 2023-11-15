let ExampleApplication = React.createClass({
  render: function() {
    let elapsed = Math.round(this.props.elapsed  / 100);
    let seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    let message =
      'React has been successfully running for ' + seconds + ' seconds.';

    return <p>{message}</p>;
  }
});

let start = new Date().getTime();

setInterval(function() {
  ReactDOM.render(
    <ExampleApplication elapsed={new Date().getTime() - start} />,
    document.getElementById('container')
  );
}, 50);
