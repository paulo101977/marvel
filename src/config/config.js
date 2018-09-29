import { Map } from 'immutable';

const API_BASE = "https://gateway.marvel.com/v1/public/";

const KEY = "?apikey=e6b0ab7ad7f9b9663c0c2fa919d7c0d5&hash=3a6390b7bcedcb14e8cb648844de5ea8&ts=1537915949";

const baseConfig = {
    all: {
        API_BASE,
        KEY,
        env: process.env.NODE_ENV || 'development',
        isDev: process.env.NODE_ENV !== 'production',
        basename: process.env.PUBLIC_PATH,
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 3000, //dev port
        isBrowser: typeof window !== 'undefined',
        isServer: typeof window === 'undefined',
        apiUrl: ''
    },
    test: {},
    development: {},
    production: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 8080,
        apiUrl: ''
    }
};

export default Map().merge(baseConfig.all, baseConfig[baseConfig.all.env]);
