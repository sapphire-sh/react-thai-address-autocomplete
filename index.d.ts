declare module "react-thai-address" {
	interface Address {
		[key: string]: string | number;
		city: string;
		province: string;
		tumbon: string;
		zipcode: string | number;
	}

	export function search(e: Partial<Address>): Address[];
}
