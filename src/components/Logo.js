import React, {Component} from 'react';
import '../App.css';

const MAX_SPEED = 80;

export default class Logo extends Component {
	speed = 1;
	timers = [];
	rotation = 0.0;
	image = null;

	lowerSpeed(val) {
		if (this.speed > 0)
			this.speed -= val;
	}

	increaseSpeed(val) {
		if (this.speed < MAX_SPEED)
			this.speed += val;
	}

	componentDidMount() {
		this.timers.push(setInterval(() => this.lowerSpeed(1), 50));
		this.timers.push(setInterval(() => {
			this.image.style.transform = `rotateY(${this.rotation / 50.0}deg)`;
			this.rotation += 15 * this.speed
		}, 15));
	}

	componentWillUnmount() {
		for (let i of this.timers)
			clearInterval(i)
	}

	render() {
		return (
			<div style={{width: 300, height: 300} } onClick={() => this.increaseSpeed(10)}>
				<img ref={c => this.image = c} src={this.props.src} className={`App-logo noselect`}/>
			</div>
		);
	}
}
