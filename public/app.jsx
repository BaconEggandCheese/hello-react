var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewState(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
      <div>
        <input type="text" ref="name" placeholder="Enter name"/>
      </div>
    <div>
        <textarea ref="message" placeholder="Enter message"></textarea>
    </div>
        <button>Set Name</button>
      </form>
    );
  }
});
//////////////////////////////////////////

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewState: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewState={this.handleNewState}/>

      </div>
    );
  }
});

var firstName = 'Rick';
var newMessage = 'The new message!';

ReactDOM.render(
  <Greeter name={firstName} message={newMessage}/>,
  document.getElementById('app')
);
