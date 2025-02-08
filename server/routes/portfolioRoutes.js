import express from 'express';
import { addPortfolio, fetchPortfolios, fetchPortfolioById } from '../controllers/portfolioController.js';

const router = express.Router();

router.post('/', addPortfolio);
router.get('/', fetchPortfolios);
router.get('/:id', fetchPortfolioById);

export default router;