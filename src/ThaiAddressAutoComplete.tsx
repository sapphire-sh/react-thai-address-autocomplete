import React from 'react';

import ThaiAddress, {
	Address,
} from 'react-thai-address';

interface ComponentProps {
	address: Partial<Address>;

	handleSelect: (address: Address) => void;
	renderItems: (item: Address, index: number) => JSX.Element;
}

class ThaiAddressAutoComplete extends React.Component<ComponentProps> {
	constructor(props: ComponentProps) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	private handleClick(address: Address) {
		return () => {
			this.props.handleSelect(address);
		};
	}

	public render() {
		const {
			address,
		} = this.props;

		const filteredAddress = Object.keys(address).map((key) => {
			return {
				'key': key,
				'value': address[key],
			};
		}).filter((e) => {
			const {
				value,
			} = e;

			if(value === undefined) {
				return false;
			}
			return `${value}`.length >= 2;
		});

		if(filteredAddress.length === 0) {
			return null;
		}

		return (
			<div>
				{ThaiAddress.search({
					...filteredAddress.reduce((a, b) => {
						return {
							...a,
							[b.key]: b.value,
						}
					}, {}),
				}).map((item, i) => {
					return (
						<div
							key={i}
							onClick={this.handleClick(item)}
						>
							{this.props.renderItems(item, i)}
						</div>
					);
				})}
			</div>
		);
	}
}

export default ThaiAddressAutoComplete;
