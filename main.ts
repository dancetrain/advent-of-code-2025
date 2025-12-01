/**
 * Add two numbers and return the sum.
 * @param a - first number
 * @param b - second number
 */
export function sum(a: number, b: number): number {
	return a + b;
}

/**
 * Return a greeting message for the given name.
 * @param name - name to greet
 */
export function greet(name = 'World'): string {
	return `Hello, ${name}!`;
}

export default { sum, greet };
