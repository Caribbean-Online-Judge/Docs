/**
 * @type {import('redocusaurus').PresetEntry}
 */
const redocusaurus = [
    'redocusaurus',
    {
        debug: Boolean(process.env.NODE_ENV === "Development" || process.env.CI),
        specs: [
            {
                id: 'staging-api-swagger',
                specUrl: 'https://staging.caribbeanonlinejudge.org/api/swagger/v1/swagger.yaml',
                routePath: '/api-doc/staging/',
            },
            {
                id: 'local',
                specUrl: 'http://localhost:5002/swagger/v1/swagger.yaml',
                routePath: '/api-doc/local/',
            },
        ],
        theme: {
            /**
             * Highlight color for docs
             */
            primaryColor: '#4c84c2',
            /**
             * Options to pass to redoc
             * @see https://github.com/redocly/redoc#redoc-options-object
             */
            redocOptions: {
                hideDownloadButton: true, disableSearch: false,
            },
        },
    },
];

module.exports = redocusaurus;