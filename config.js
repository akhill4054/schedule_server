const env = process.env.NODE_ENV || 'dev';

var configs = {
    dev: {
        port: 3000,
        dbURL: 'mongodb+srv://proto4054:loST114322@realmcluster.svjbt.mongodb.net/schedule-db?retryWrites=true&w=majority',
    },
    prod: {
        port: 3001,
        dbURL: 'mongodb+srv://proto4054:loST114322@realmcluster.svjbt.mongodb.net/schedule-db?retryWrites=true&w=majority',
    }
};

module.exports = configs[env];