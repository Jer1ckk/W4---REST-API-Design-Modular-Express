import { articles } from '../models/data.js';

let currentId = articles.length;

export const getAllArticles = (req, res) => {
    res.json(articles);
};

export const getArticleById = (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    article ? res.json(article) : res.status(404).json({ message: 'Article not found' });
};

export const createArticle = (req, res) => {
    const newArticle = { id: ++currentId, ...req.body };
    articles.push(newArticle);
    res.status(201).json(newArticle);
};

export const updateArticle = (req, res) => {
    const index = articles.findIndex(a => a.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Article not found' });
    articles[index] = { ...articles[index], ...req.body };
    res.json(articles[index]);
};

export const deleteArticle = (req, res) => {
    const index = articles.findIndex(a => a.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Article not found' });
    const deleted = articles.splice(index, 1);
    res.json(deleted[0]);
};
