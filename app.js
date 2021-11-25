const  express = require('express');
const  app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

var books = [
    {
        nome: "Pequeno manual antiracista",
        autor: "Djamila Ribeiro" 
    },
    {
        nome: "Agora estou sozinha",
        autor: "Pedro Bandeira"
    },
    {
        nome: "Arco-íris sobre o inferno",
        autor: "Tsuneyuki Mohri"
    },
    {
        nome: "O teorema Katherine",
        autor: "John Green"
    },
    {
        nome: "Minha primeira paixão",
        autor: "Pedro Bandeira"
    }
]

app.get('/livros', (req,res) => {
    res.render('livros', {dados: books});
})



app.listen(3000, () => {
    console.log("o servidor está rodando na porta 3000")
});