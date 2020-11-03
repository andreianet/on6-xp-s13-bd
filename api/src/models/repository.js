//conecta o mongoose
const mongoose = require('mongoose');

//gravar a string de conexao de
const DB_URL = "mongodb://localhost:27017/reprograma"

const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser: true}) //parsea a conexão
    const connection = mongoose.connection
    //caso der um erro 
    connection.on('error', ()=> console.error("Erro ao conectar com o MongoDB"))
    connection.once('open', ()=> console.log("Estamos conectados!"))
}

module.exports = {connect}