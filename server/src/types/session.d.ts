declare module 'express-session' {
	interface SessionData {
		cart?: { [key: string]: number };
	}
}

export {};
