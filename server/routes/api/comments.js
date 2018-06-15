const Comment = require('../../models/Comment');

module.exports = (app) => {
        app.get('/api/comments', (req, res, next) => {
            Comment.find({ email: { "$regex": req.query.searchText, "$options": "i" } })
                .exec()
                .then((comment) => res.json(comment))
                .catch((err) => next(err));
        });

        app.post('/api/comments', function (req, res, next) {
            const comment = new Comment(req.body);

            comment.save()
                .then(() => res.json(comment))
                .catch((err) => next(err));
        });
    }