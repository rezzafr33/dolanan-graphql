import dotenv from 'dotenv'

dotenv.config({ silent: true });

export const apiUrl = process.env.API_URL || 'http://localhost:8000/';

