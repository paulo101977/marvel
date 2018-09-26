import { Map } from 'immutable';

const API_BASE = process.env.API_BASE || "/"

const baseConfig = {
    all: {
        API_BASE,
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
