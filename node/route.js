const {ID,PASSWORD} = require('G:/PrivateConfig.js');
const express = require('express');
const path = require('path');
//promise와 await를 사용하려면 이거 써야함
const request = require('request-promise-native');
const bodyParser = require('body-parser');
const router = express.Router();//라우터 분리
const { Todo } = require('./models')
/*
post로 todo 데이터를 받아온다
papago로 번역기돌린다
db에 저장한다
db에 저장한 데이터를 반환한다.
*/

router.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'public','test.html'));
});

router.get('/data',async (req,res)=>{
	//db에 저장한거 모두 반환
	const findAll = await Todo.findAll({});
	let result = [];
	for (let i of findAll){
		result.push(i.dataValues);
	}
	console.log(result)
	res.json(result);
});

router.post('/data',async (req,res)=>{
	try	{
		const URL = 'https://openapi.naver.com/v1/papago/n2mt'
		const options = {
			url : URL,
			form:{
				source : 'ko',
				target : 'en',
				text : req.body.text
			},
			headers:{
				'X-Naver-Client-Id': ID,
				'X-Naver-Client-Secret': PASSWORD
			},
			json: true
			//큰 교훈을 얻었다...이거 안넣으면 body에서 받을때 json파싱안됨
		}


		const translateResult = await request.post(options);
		console.log(translateResult.message.result.translatedText);

		const result = await Todo.create({
			ko_text : req.body.text,
			en_text : translateResult.message.result.translatedText
		});

		console.log(result.dataValues);

		res.json(result.dataValues);
	}catch(err){
		console.log(err);
	}
});


module.exports = router; //모듈로 만드는 부분