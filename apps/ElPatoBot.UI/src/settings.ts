const env = process.env['NODE_ENV'] === 'production' ? 'prd' : 'dev';

if (env === 'dev') {
    console.log(`Using env ${env}`);
}

const allSettings:Record<'prd' | 'dev', {
    serverUrl: string,
    websocketUrl: string,
    loginUrl: string
}> = {
    dev: {
        serverUrl: 'http://localhost:8084/',
        websocketUrl: 'ws://localhost:8084/',
        loginUrl: ''
    },
    prd: {
        serverUrl: '',
        websocketUrl: '',
        loginUrl: '',
    }
};

export default allSettings[env];

