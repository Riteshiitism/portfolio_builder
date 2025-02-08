import axios from 'axios';
import baseURL from './config';



const fetchPortfolios = () => baseURL.get('/portfolios');

const fetchPortfolioById = (id) => baseURL.get(`/portfolios/${id}`);

const createPortfolio = (portfolioData) => baseURL.post('/portfolios', portfolioData);



export { fetchPortfolios, fetchPortfolioById, createPortfolio};

