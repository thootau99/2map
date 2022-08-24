import express, { Router } from "express";
import { body } from "express-validator";
import location from '../models/locations.js'
import validate from '../models/validate.js'
/**
 * 
 * @type {Router}
 */
const router = express.Router();

/**
 * @swagger
 * tag:
 *   name: locations
 *   description: 跟地點有關的 API
 */


/**
 * @swagger
 * /locations/list:
 *   get:
 *     tags:
 *       - auth
 *     summary: 列出全部的地點
 *     description: 列出全部的地點
 *     responses:
 *       200:
 *         schema:
 *           type: string
 *       500:
 *         schema:
 *           type: string
 */



router.get('/list', async (req, res, next) => {
	try {
		const result = await location.list()
		res.status(200).json(result)
	} catch (e) {
		next(e)
	}
});

/**
 * @swagger
 * /locations/insert:
 *   post:
 *     tags:
 *       - auth
 *     summary: 新增一個地點
 *     description: 新增一個地點
 *     responses:
 *       200:
 *         schema:
 *           type: string
 *       500:
 *         schema:
 *           type: string
 */



 router.post('/insert', validate([
	body('N').isNumeric(),
	body('E').isNumeric(),
	body('road2').if(body('road2').exists()).isString(),
	body('road2').if(body('road2').exists()).isString(),
	body('comment').if(body('comment').exists()).isString(),
 ]), async (req, res, next) => {
	try {
		const result = await location.insert(req.body)
		res.status(200).json(result)
	} catch (e) {
		next(e)
	}
});

export default router