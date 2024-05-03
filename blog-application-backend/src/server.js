import express from 'express';
import { connectToDb, db } from './db.js'

const app = express();
app.use(express.json());

app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params

    const article = await db.collection('articles').findOne({ name })

    if (article) {
        res.json(article)
    } else {
        res.sendStatus(404)
    }

});

app.put('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params

    await db.collection('articles').updateOne({ name }, {
        $inc: { upvotes: 1 }
    })

    const article = await db.collection('articles').findOne({ name })

    if (article) {
        res.send(`The "${name}" article has ${article.upvotes} upvotes!!`)
    } else {
        res.sendStatus(404)
    }
});

app.post('/api/articles/:name/comments', async (req, res) => {
    const { postedBy, text } = req.body
    const { name } = req.params


    await db.collection('articles').updateOne({ name }, {
        $push: { comments: { postedBy, text } }
    })

    const article = await db.collection('articles').findOne({ name })
    if (article) {
        res.send(article)
    } else {
        res.send("That article doesnt exist")
    }
});

connectToDb(() => {
    console.log('Connected to Database');
    app.listen(8000, () => {
        console.log('Server is listening on port 8000');
    });
})
