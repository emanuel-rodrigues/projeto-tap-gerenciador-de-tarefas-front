const express = require('express');
const router = express.Router();
const tarefas = require('../model tarefas');
const Tarefa = require('../model/Tarefa');
const seguranca = require('../util/seguranca');

// CRIANDO UMA FUNÇÃO DE MIDDLEWARE PARA PEGAR O TAREFA PELO ID
const getTarefasPorId = async (req, res, next) => {
  try {
    let tarefas = await tarefas.findById(req.params.id);
    if (terefa === null) {
      res.status(404).json({erro: 'Não foi encontrado um tarefa com o id informado'});
    } else {
      req.terefa = tarefa;
      next();
    }
  } catch (erro) {
    res.status(500).json({erro: 'O id informado não é válido'});
  }
};

// INICIAR BANCO DE DADOS COM DADOS DE TESTE
router.get('/popula', async (req, res) => {
  await new Tarefa({'nomde':'Beber água', 'tempo': 3, 'horario' : 'manha', 'descricao' :'Assim que acordar'}).save();
  await new Tarefa({'nomde':'Lavar o rosto com água', 'tempo': 5, 'horario' : 'manha', 'descricao' :'Assim que acordar'}).save();
  await new Tarefa({'nomde':'café', 'tempo': 15, 'horario' : 'manha', 'descricao' :'Assim que acordar'}).save();
  await new Tarefa({'nomde':'café', 'tempo': 15, 'horario' : 'tarde', 'descricao' :'Assim que acordar'}).save();
  await new Tarefa({'nomde':'Beber água', 'tempo': 3, 'horario' : 'tarde', 'descricao' :'Apartir de 500ml'}).save();


  res.status(201).json({"status":"sucesso"});
});


// RETORNAR TODAS AS TAREFAS
router.get('/', async (req, res) => {
  res.json(await tarefa.find());
});

// RETORNAR A TAREFA COM O ID INFORMADO
router.get('/:id', getTarefaPorId, (req, res) => {
  res.json(req.tarefa);
});

// ADICIONAR UMA TAREFA
router.post('/', seguranca.autoriza, async (req, res) => {
  let tarefa = await Tarefa(req.body).save();
  res.json(tarefa);
});

// ALTERAR A TAREFA COM O ID INFORMADO
router.put('/:id', seguranca.autoriza, gettarefaPorId, async (req, res) => {
  req.tarefa.nome = req.body.nome;
  req.tarefa.tempo = req.body.tempo;
  req.tarefa.horario = req.body.horario;
  req.tarefa.descricao = req.body.descricao;
  await req.tarefa.save();
  res.send('O Tarefa foi atualizado');
});

// EXCLUIR A TAREFA
router.delete('/:id', seguranca.autoriza, getTarefaPorId, async (req, res) => {
  await req.tarefa.delete();
  res.send('O tarefa foi removido');
});

module.exports = router;
