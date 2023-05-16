export const constants = {
    API_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL,
    API: {
        PREFIX: import.meta.env.VITE_BACKEND_API_PREFIX,
    },
    REGEX_PATTERNS: {
        EMAIL_REGEX: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/,
        PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
        USERNAME_REGEX: /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/,
    }
};