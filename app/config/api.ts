const BASE_URL = process.env.BASE_URL;
const API_URL = process.env.API_URL;
const GAMES_API_URL = process.env.API_URL;

const GAMES_API = new URL(`${BASE_URL}${API_URL}${GAMES_API_URL}`)

export {
    GAMES_API
}