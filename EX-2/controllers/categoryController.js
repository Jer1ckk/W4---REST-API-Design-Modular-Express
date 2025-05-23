import { categories, articles } from '../models/data.js';

let currentId = categories.length;

export const getAllCategories = (req, res) => {
    res.json(categories);
};

export const getCategoryById = (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    category ? res.json(category) : res.status(404).json({ message: 'Category not found' });
};

export const createCategory = (req, res) => {
    const newCategory = { id: ++currentId, ...req.body };
    categories.push(newCategory);
    res.status(201).json(newCategory);
};

export const updateCategory = (req, res) => {
    const index = categories.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Category not found' });
    categories[index] = { ...categories[index], ...req.body };
    res.json(categories[index]);
};

export const deleteCategory = (req, res) => {
    const index = categories.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Category not found' });
    const deleted = categories.splice(index, 1);
    res.json(deleted[0]);
};

// Get all articles from a category
export const getArticlesByCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const categoryExists = categories.some(c => c.id === categoryId);
    if (!categoryExists) return res.status(404).json({ message: 'Category not found' });

    const categoryArticles = articles.filter(a => a.categoryId === categoryId);
    res.json(categoryArticles);
};
