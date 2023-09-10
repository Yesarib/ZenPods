const Category = require('../Models/Category.js')
const createError = require('http-errors');
const Podcast = require('../Models/Podcasts');
const Episode = require('../Models/Episode');


const addCategory = async(req,res,next) => {
    try {
        const { categoryName } = req.body;

        const existingCategory = await Category.findOne({ name: categoryName});
        if (existingCategory) throw createError[400]('This category already exists')

        const newCategory = new Category({
            name: categoryName
        }) 

        const savedCategory = await newCategory.save();

        res.status(201).json({ message: 'Category added successfully', savedCategory});

    } catch (error) {
        next(error)
    }
}

const getCategoryNames = async(req,res,next) => {
    try {
        const categoryNames = await Category.find();

        res.status(200).json(categoryNames);
    } catch (error) {
        next(error);
    }
}

const getPodcastWithCategoryName = async(req,res,next) => {
    try {
        const categoryName = req.params.name;
        const category = await Category.findOne({ name: categoryName});
        if (!category) throw createError[404]('Category not found');

        const podcasts = await Podcast.find({category: category._id});
        res.status(200).json(podcasts);
    } catch (error) {
        next(error)
    }
}

const getEpisodeWithCategoryName = async(req,res,next) => {
    try {
        const categoryName = req.params.name;
        const category = await Category.findOne({ name: categoryName});
        if (!category) throw createError[404]('Category not found');

        const episodes = await Episode.find({category: category._id});
        res.status(200).json(episodes);

    } catch (error) {
        next(error)
    }
}


module.exports = {
    addCategory,
    getCategoryNames,
    getEpisodeWithCategoryName,
    getPodcastWithCategoryName,
}