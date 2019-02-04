import React from 'react';

const Modal = props => (
	<div className="backdrop" onClick={props.onClose}>
		<div
			className="modal"
			onClick={e => {
				e.stopPropagation();
			}}>
			{props.children}
		</div>
	</div>
);

export default Modal;
