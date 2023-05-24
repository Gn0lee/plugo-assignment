declare module 'express-session' {
	interface SessionData {
		cart?: Array<[string, { quantity: number; selected: boolean }]>;
	}
}

export {};
