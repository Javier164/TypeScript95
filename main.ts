/* 
	This code appeases me. JavaScript looks ugly.
	It's whatever though, static files FTW.
*/

class Win95 {
	CD() {
		let invalid = [333, 444, 555, 666, 777, 888, 999]; // Invalid sites.
		let site: number | string = Math.floor((Math.random() * 999) + 100); // Generate a random number between 1 and 999.

		while (site in invalid || site.toString().length < 3) {
			site = Math.floor((Math.random() * 999) + 100); // Keep generating until it is not in the invalid array, or is less than 100.
		}

		let dividend: number | null = Math.floor((Math.random() * 9_999_999) + 1_000_000); // Underscored numbers for readability.
		let numbers: number[] | null = String(dividend).split('').map(Number); // Converts to a string, to be able to be split.
		let sum: number | null; numbers.forEach(element => (sum! += element));

		while (((sum! % 7) != 0 ) || (numbers[6] == 0 || numbers[6] >= 8 ) || dividend.toString().length > 7) { // Checks if the variables are valid. 
			dividend = null, numbers = null, sum = null; // Setting variables to have null values, since they aren't valid.

			dividend = Math.floor((Math.random() * 9_999_999) + 1_000_000);
			numbers = String(dividend).split('').map(Number); // More number generation!
			numbers.forEach(element => (sum! += element)); 
		}

		return `${site}-${dividend}`;
	}

	OEM() {
		let date = Math.floor(Math.random() * 366) + 100; // Random Day of Year
		let years = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003]; // All valid OEM years.

		let year = String(years[Math.floor(Math.random() * years.length)]).substring(2);
		let dividend: number | string | null = Math.floor((Math.random() * 99_999) + 1).toString().padStart(6, "0"); // Underscored numbers for readability.

		let garbage: number = Math.floor((Math.random() * 99_999) + 10_000); // Underscored numbers for readability.

		let numbers: number[] | null = String(dividend).split('').map(Number);
		let sum: number | null; numbers.forEach(element => (sum! += element));

		while (((sum! % 7) != 0 ) || (numbers[7] == 0 || numbers[7] >= 8) || dividend.toString().length > 7 || garbage.toString().length > 5) { // Checks if the variables are valid. 
			dividend = null, numbers = null, sum = null; // Setting variables to have null values, since they aren't valid.
			dividend = Math.floor((Math.random() * 99_999) + 1).toString().padStart(6, "0");
			garbage = Math.floor((Math.random() * 99_999) + 10_000);
			numbers = String(dividend).split('').map(Number); // More number generation!
			numbers.forEach(element => (sum! += element)); 
		}

		return `${date}${year}-OEM-${dividend}-${garbage}`;
	}

	Test() {
		for (let i = 0; i < 25; i++) {
			console.log(`Windows 95 CD Key ${i}: ${Windows.CD()}`); // Prints a bunch of CD keys to test.
		}

		for (let i = 0; i < 25; i++) {
			console.log(`Windows 95 OEM Key ${i}: ${Windows.OEM()}`); // Prints a bunch of CD keys to test.
		}
	}
}

let Windows = new Win95();
Windows.Test();
