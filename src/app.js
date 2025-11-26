import Express from 'express'

const app = Express()

app.get('/', (_, res) => {
    res.json({
        value: process.env.SECRET,
        value2: "Bonjour Deploy"
    })
})

app.listen(3000);