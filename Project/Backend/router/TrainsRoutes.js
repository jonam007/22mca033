const express = require('express')
const {getTrains, currentTrain, registerTrain}=require('../controller/TrainsController')

const router = express.Router()


router.route('/trains').get(getTrains);
router.route('/trains/:id').get(currentTrain);
router.route('/auth').get(getTrains);
router.route('/register').post(registerTrain);

module.exports=router