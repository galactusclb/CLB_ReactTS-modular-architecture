export const handleError = (code?: number, message?: string) => {
	switch (code) {
		case 400:
			return console.error(
				message || "Bad request: missing required form data"
			);
		case 401:
			return console.error(message || "Unauthorized: please log in");
		case 403:
			return console.error(
				message ||
					"Forbidden: you do not have permission to access this resource"
			);
		case 404:
			return console.error(
				message || "Not found: the requested resource could not be found"
			);
		case 408:
			return console.error(
				message ||
					"Request timeout: the server timed out waiting for the request"
			);
		case 409:
			return console.error(
				message ||
					"Conflict: the request could not be completed due to a conflict with the current state of the resource"
			);
		default:
			if (code && code >= 500 && code <= 511) {
				return console.error(
					message || "Server error: something went wrong on the server"
				);
			} else {
				return console.error(message || "An unknown error occurred");
			}
	}
};
