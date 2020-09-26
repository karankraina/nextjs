const pgoptions = {
    connect(client, dc, isFresh) {
        if (isFresh) {
            client.on('notice', (msg) => {
                console.log('notice: ', msg);
            });
        }
    },
    query(e) {
        console.log(e.query);
    },
};
const pgp = require('pg-promise')(pgoptions);

const conString = process.env.DATABASE_URL || 'postgres://xekjblrgtrfwoj:48737ef1b9c0a8a960045a204c5ae377a9012deb999ca90ab22aff97f0c11106@ec2-54-210-128-153.compute-1.amazonaws.com:5432/dar99nvc2pgrbb?ssl=true';
const db = pgp(conString);

export default db;