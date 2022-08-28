const express = require('express')
const { body, param } = require('express-validator')
const { cities } = require('../models/cities.js')
const { validate } = require('../models/validate.js')

/**
 * 
 * @type {Router}
 */
const router = express.Router();

/**
 * @swagger
 * tag:
 *   name: cities
 *   description: 跟街道有關的 API
 */


/**
 * @swagger
 * /cities:
 *   get:
 *     tags:
 *       - auth
 *     summary: 列出城市
 *     description: 列出城市
 *     responses:
 *       200:
 *         schema:
 *           type: string
 *       500:
 *         schema:
 *           type: string
 */
 router.get('/', async (req, res, next) => {
	try {
		const result = await cities.list()
		res.status(200).json(result)
	} catch (e) {
		next(e)
	}
});

/**
 * @swagger
 * /cities/{city}:
 *   get:
 *     tags:
 *       - auth
 *     summary: 列出區鄉鎮
 *     description: 列出區鄉鎮
 *     responses:
 *       200:
 *         schema:
 *           type: string
 *       500:
 *         schema:
 *           type: string
 */
router.get('/:city', validate([
    param('city').isString()
]), async (req, res, next) => {
	try {
		const result = await cities.getDistructsByCity(req.params.city)
		res.status(200).json(result)
	} catch (e) {
		next(e)
	}
});


/**
 * @swagger
 * /cities/{city}/{distruct}:
 *   get:
 *     tags:
 *       - auth
 *     summary: 列出街道
 *     description: 列出街道
 *     responses:
 *       200:
 *         schema:
 *           type: string
 *       500:
 *         schema:
 *           type: string
 */
 router.get('/:city/:distruct', validate([
    param('city').isString(),
    param('distruct').isString()
 ]), async (req, res, next) => {
	try {
		const result = await cities.getRoadsByDistructAndCity(req.params.city, req.params.distruct)
		res.status(200).json(result)
	} catch (e) {
		next(e)
	}
});

module.exports = {
    router
}