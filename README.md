# react-thai-address-autocomplete

[![](https://img.shields.io/npm/v/react-thai-address-autocomplete.svg)](https://www.npmjs.com/package/react-thai-address-autocomplete)


## install
```sh
$ npm install -S react-thai-address-autocomplete
```

## usage
```tsx
import ThaiAddressAutoComplete, {
	Address,
} from './ThaiAddressAutoComplete';

const address: Address = {
	'city': '',
	'province': '',
	'tumbon': '',
	'zipcode': '',
};

<ThaiAddressAutoComplete
	address={address}
	handleSelect={(address: Address) => {
		console.log(address);
	}}
	renderItems={(item: Address, index: number) => {
		return (
			<p>
				{JSON.stringify(item)}
			</p>
		);
	}}
/>
```

## types
* Address

```js
{
	'city': 'city', // string;
	'province': 'province', // string;
	'tumbon': 'tumbon', // string;
	'zipcode': 10001, // string | number
}
```

## props

### address

type:

	Address

### handleSelect

type:

	(address: Address) => void

### renderItems

type:

	(item: Address, index: number) => JSX.Element
