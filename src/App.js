import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from './ducks/counter';

import "./App.css";

export class App extends Component {
	render() {
		return (
			<div className="app">
				<section className="counter">
					<h1 className="counter__current-value">{ this.props.counter }</h1>
					<div className="counter__button-wrapper">
						<button
							className="counter__button increment-one"
							// onClick={ () => null }
							onClick={ () => this.props.increment(1) }
						>
							+1
						</button>
						<button
							className="counter__button increment-five"
							onClick={ () => null }
						>
							+5
						</button>
						<button
							className="counter__button decrement-one"
							// onClick={ () => null }
							onClick={ () => this.props.decrement(1) }
						>
							-1
						</button>
						<button
							className="counter__button decrement-five"
							onClick={ () => null }
						>
							-5
						</button>
						<br />
						<button
							className="counter__button undo"
							disabled={ true }
							onClick={ () => null }
						>
							Undo
						</button>
						<button
							className="counter__button redo"
							disabled={ true }
							onClick={ () => null }
						>
							Redo
						</button>
					</div>
				</section>
				<section className="state">
					<pre>
						{ JSON.stringify( this.props, null, 2 ) }
					</pre>
				</section>
			</div>
		);
	}
}

// export default App;



function mapStateToProps(state) {
	return {
		// prop1: state.prop1,
		// prop297: state.prop297
		counter: state.counter
	}
}
// This function puts counter on props

export default connect(mapStateToProps, { increment, decrement })(App);
// This also puts this.props.increment function on props
