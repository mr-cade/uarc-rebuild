const Router = require('koa-router');

const connect = require('../../routes/index');

connect();

const router = new Router();
const BASE_URL = `/api/members`;

const Album = require('../../models/members');

function getMembers(artist) {
    return new Promise((resolve, reject) => {
        var query = Members.find({ 'Name': name });
        query.exec((err, results) => {
            if (err) return handleError(err);
            resolve(results);
        });
    });
}

router.get(BASE_URL + '/members/:name', async (ctx) => {
    try {
        ctx.body = await getMembers(ctx.params.artist);
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;