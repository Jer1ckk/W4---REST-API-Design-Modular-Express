import { journalists, articles } from '../models/data.js';

let currentId = journalists.length;

export const getAllJournalists = (req, res) => {
    res.json(journalists);
};

export const getJournalistById = (req, res) => {
    const journalist = journalists.find(j => j.id === parseInt(req.params.id));
    journalist ? res.json(journalist) : res.status(404).json({ message: 'Journalist not found' });
};

export const createJournalist = (req, res) => {
    const newJournalist = { id: ++currentId, ...req.body };
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
};

export const updateJournalist = (req, res) => {
    const index = journalists.findIndex(j => j.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Journalist not found' });
    journalists[index] = { ...journalists[index], ...req.body };
    res.json(journalists[index]);
};

export const deleteJournalist = (req, res) => {
    const index = journalists.findIndex(j => j.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Journalist not found' });
    const deleted = journalists.splice(index, 1);
    res.json(deleted[0]);
};

// Get all articles by a specific journalist
export const getArticlesByJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalistExists = journalists.some(j => j.id === journalistId);
    if (!journalistExists) return res.status(404).json({ message: 'Journalist not found' });

    const journalistArticles = articles.filter(a => a.journalistId === journalistId);
    res.json(journalistArticles);
};
