import React from 'react';

import {
	render,
} from 'react-dom';

import {
	Address,
} from 'react-thai-address';

import ThaiAddressAutoComplete from './ThaiAddressAutoComplete';

import './index.html';

interface ComponentState {
	address: Address;
}

class AppRouter extends React.Component<any, ComponentState> {
	constructor(props: any) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			'address': {
				'city': '',
				'province': '',
				'tumbon': '',
				'zipcode': '',
			},
		};
	}

	private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const {
			name,
			value,
		} = event.target;

		this.setState({
			'address': {
				...this.state.address,
				[name]: value,
			},
		});
	}

	private handleSelect(address: Address) {
		this.setState({
			'address': address,
		});
	}

	public render() {
		return (
			<div>
				{Object.keys(this.state.address).map((key) => {
					return (
						<div>
							<p>
								{key}
							</p>
							<input
								type={key === 'zipcode' ? 'number' : 'text'}
								name={key}
								value={this.state.address[key]}
								onChange={this.handleChange}
							/>
						</div>
					);
				})}

				<ThaiAddressAutoComplete
					address={this.state.address}
					handleSelect={this.handleSelect}
					renderItems={(item, i) => {
						return (
							<p>
								{JSON.stringify(item)}
							</p>
						);
					}}
				/>
			</div>
		);
	}
}

render(<AppRouter />, document.getElementById('app'));
