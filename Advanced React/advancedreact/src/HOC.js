import React, { useEffect, useState } from 'react';

const PanelMouseLogger = ({ mousePosition }) => {
	if (!mousePosition) {
		return null;
	}

	return (
		<div>
			<p>Mouse Position: </p>
			<div>
				<span>X: {mousePosition.x}</span>
				<br />
				<span>Y: {mousePosition.y}</span>
			</div>
		</div>
	);
};

const PointMouseLogger = ({ mousePosition }) => {
	if (!mousePosition) {
		return null;
	}

	return (
		<div>
			<p>Mouse Position: </p>
			<div>
				<p>{`( ${mousePosition.x}, ${mousePosition.y} )`}</p>
			</div>
		</div>
	);
};

const withMousePosition = (Component) => {
	return (props) => {
		const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

		useEffect(() => {
			const handleMouseMove = (e) => {
				setMousePosition({ x: e.clientX, y: e.clientY });
			};

			window.addEventListener('mousemove', handleMouseMove);

			return () => {
				window.removeEventListener('mousemove', handleMouseMove);
			};
		}, []);

		return (
			<div>
				<Component {...props} mousePosition={mousePosition} />
			</div>
		);
	};
};

const PanelMouseLoggerWithMousePosition = withMousePosition(PanelMouseLogger);
const PointMouseLoggerWithMousePosition = withMousePosition(PointMouseLogger);

function HOC() {
	return (
		<div
			style={{
				display: 'flex',
				height: '100vh',
				width: '100vh',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				border: '1px solid black',
			}}
		>
			<PanelMouseLoggerWithMousePosition />
			<PointMouseLoggerWithMousePosition />
		</div>
	);
}

export default HOC;
