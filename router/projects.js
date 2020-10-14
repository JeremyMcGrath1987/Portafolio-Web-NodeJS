const express = require('express');
const router = express.Router();

const Project = require('../models/project');

router.get('/:id', async (req, res)=>{

    const id = req.params.id;

    try {
        const projects = await Project.findOne({_id: id});

        res.render('project', {
            title: projects.title,
            description: projects.description,
            img: projects.img,
            code: projects.code,
            test: projects.test
        });


    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }
    
});

module.exports = router;