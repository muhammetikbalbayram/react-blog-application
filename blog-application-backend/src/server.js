import express from 'express';

let articlesInfo = [
    {
        name: 'learn-react',
        upvotes: 0,
        comments: []
    },
    {
        name: 'learn-node',
        upvotes: 0,
        comments: []
    },
    {
        name: 'mongodb',
        upvotes: 0,
        comments: []
    },
]

const app = express();
app.use(express.json());

app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params
    const article = articlesInfo.find(a => a.name === name)
    if (article) {
        article.upvotes++
        res.send(`The "${name}" article has ${article.upvotes} upvotes!!`)
    } else {
        res.send("That article doesnt exist")
    }
});

app.post('/api/articles/:name/comments', (req, res) => {
    const { postedBy, text } = req.body
    const { name } = req.params
    const article = articlesInfo.find(a => a.name === name)
    if (article) {
        article.comments.push({ postedBy, text })
        res.send(article)
    } else {
        res.send("That article doesnt exist")
    }
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});