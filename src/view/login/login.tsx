import { Component } from 'react';
// import { browserHistory } from 'react-router'
 
 
class Login extends Component {
    handleSubmit = ( e:any) => {
        // this.props.history.push({pathname:'/app'});
    };
 
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
			  <input type="text" placeholder="userName"/>
			  <input type="text" placeholder="repo"/>
			  <button type="submit">Go</button>
			</form>
        );
    }
}
 
 
export default Login;