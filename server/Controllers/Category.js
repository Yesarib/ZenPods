const Category = require('../Models/Category.js')
const createError = require('http-errors');
const Podcast = require('../Models/Podcasts');
const Episode = require('../Models/Episode');


const addCategory = async(req,res,next) => {
    try {
        console.log(req.body);
        const { categoryName, color } = req.body;

        const existingCategory = await Category.findOne({ name: categoryName});
        if (existingCategory) throw createError[400]('This category already exists')

        const newCategory = new Category({
            name: categoryName,
            color: color,
        }) 

        const savedCategory = await newCategory.save();

        res.status(201).json({ message: 'Category added successfully', savedCategory});

    } catch (error) {
        next(error)
    }
}

const getCategoryById = async(req,res,next) => {
    try {
        const categoryId = req.params.id

        const category = await Category.findById(categoryId);
        if(!category) throw createError[404]("There is no category ")

        res.status(200).json(category);
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

const getPodcastWithCategoryId = async(req,res,next) => {
    try {
        console.log(req.params);
        const categoryId = req.params.id;
        const category = await Category.findOne({ _id: categoryId});
        if (!category) throw createError[404]('Category not found');

        const podcasts = await Podcast.find({category: category._id});
        res.status(200).json(podcasts);
    } catch (error) {
        next(error)
    }
}

const getEpisodeWithCategoryId = async(req,res,next) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findOne({ _id: categoryId});
        if (!category) throw createError[404]('Category not found');

        const episodes = await Episode.find({category: category._id});
        res.status(200).json(episodes);

    } catch (error) {
        next(error)
    }
}


module.exports = {
    addCategory,
    getCategoryById,
    getCategoryNames,
    getPodcastWithCategoryId,
    getEpisodeWithCategoryId,
}