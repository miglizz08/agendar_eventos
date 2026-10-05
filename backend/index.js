import express from 'express';

const eventos = [{
    id:1,
    titulo: "halloween",
    data: "2026-10-31",
    horario: "19:00",
    local: "liv_music",
    descricao: "Evento temático com uso obrigatório de fantasia. A estrutura inclui um ambiente preparado para receber os convidados e pista de dança com DJ tocando ao longo de toda a noite."
},
{
    id:2,
    titulo:"festa junina",
    data:"2026-06-12",
    horario: "13:00",
    local: "Clube da cidade",
    descricao: "Evento organizado para celebrar a tradição junina e promover a confraternização. A festa contará com um cardápio focado em diversas comidas e bebidas típicas da época."
}
];


const app = express();

app.use(express.json());

let proximoId = 3;

app.post('/eventos', (req, res) => {
    const titulo = req.body?.titulo
    const data = req.body?.data
    const horario = req.body?.horario
    const local = req.body?.local

    if(typeof titulo !== 'string' || titulo.trim() === ''){
        return res.status(400).json({mensagem: 'Título é obrigatório.'});
    }
    if(typeof data !== 'string' || data.trim() === ''){
        return res.status(400).json({mensagem: "Data é obrigatória."})
    }
    if(typeof horario !== 'string' || horario.trim() === ''){
        return res.status(400).json({mensagem: "Horário é obrigatório."})
    }
    if(typeof local !== 'string' || local.trim() === ''){
        return res.status(400).json({mensagem: "Local é obrigatório."})
    }
    const novoEvento = {
    id: proximoId,
    titulo: req.body.titulo,
    data: req.body.data,
    horario: req.body.horario,
    local: req.body.local,
    descricao: req.body.descricao

}
proximoId +=1
eventos.push(novoEvento)
res.status(201).json(novoEvento);
});


app.get('/eventos', (req,res)=> {
    res.json(eventos)
})

app.listen(3001, () => console.log("API na porta 3001"));
