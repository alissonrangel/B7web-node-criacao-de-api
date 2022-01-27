import {Router} from 'express';
import * as ApiController from '../controllers/apiControllers';


const router = Router();

router.get('/ping', ApiController.ping);

router.get('/random', ApiController.random);

router.get('/nome/:nome', ApiController.nome);

router.get('/frases', ApiController.listPhrases);

router.get('/frase/fraseAleatoria', ApiController.fraseAleatoria);

router.get('/frase/:id', ApiController.getPhrase);

router.put('/frase/:id', ApiController.updatePhrase);

router.delete('/frase/:id', ApiController.deletePhrase);

router.post('/frases', ApiController.createPhrase);


export default router;