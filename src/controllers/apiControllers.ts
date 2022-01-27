import {Router, Request, Response} from 'express';

import {Phrase} from '../models/Phrase';
import {Sequelize} from 'sequelize';


export const ping = (req: Request, res: Response) => {
  res.json({pong: true});
}

export const random = (req: Request, res: Response) => {
  let nRand: number = Math.floor(Math.random() * 10);
  res.json({number: nRand});
}

export const nome = (req: Request, res: Response) => {
  let nome: string = req.params.nome;
  res.json({nome});
}

export const listPhrases = async (req: Request, res: Response) => {
  let list = await Phrase.findAll({
    order:["id"]
  }); 
  console.log("RESULT, ",list);
  res.json({list});
}

export const createPhrase = async (req: Request, res: Response) => {
  console.log(req.body);
  const {author, txt} = req.body;
  let newPhrase = await Phrase.create({author, txt});
  res.status(201);
  res.json({id: newPhrase.id});
}

export const getPhrase = async (req: Request, res: Response) => {
  
  let id = req.params.id;
  
  // let phrase = await Phrase.findOne({
  //   where: { id }
  // }) 
  let phrase = await Phrase.findByPk(id);

  if (phrase) {
    res.json({phrase});  
  } else {
    res.json({error: 'Frase não encontrada!!!'});
  }  
}

export const updatePhrase = async (req: Request, res: Response) => {

  let id = req.params.id;
  let { author, txt } = req.body;

  let phrase = await Phrase.findByPk(id);

  if (phrase) {
    
    phrase.author = author;
    phrase.txt = txt;
    await phrase.save();
    res.json({phrase});  
  } else {
    res.json({error: 'Frase não encontrada!!!'});
  }
  
}

export const deletePhrase = async (req: Request, res: Response) => {
  
  let id = req.params.id;
    
  let phrase = await Phrase.destroy({
    where: { id }
  })

  console.log(phrase);
  
  if (phrase) {
    res.json({error: "", message: "Excluído com sucesso!!!"});  
  } else {
    res.json({error: 'Frase não encontrada!!!'});
  }  
}


export const fraseAleatoria = async (req: Request, res: Response) => {
  
  let phrase = await Phrase.findOne({
    order:[
      Sequelize.fn('RANDOM')
    ]
  });
  if (phrase) {        
    res.json({phrase});  
  } else {
    res.json({error: 'Frase não encontrada!!!'});
  }
  // let frases2 = {frases};
  // let index: number = Math.floor(Math.random() * frases.length);
}
