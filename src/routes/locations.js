import express, { Router } from "express";
import location from '../models/locations.js'
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



 router.get('/insert', async (req, res, next) => {
	try {
		const result = await location.insert()
		res.status(200).json(result)
	} catch (e) {
		next(e)
	}
});

export default router