const express = require("express")
const router = express.Router()
const article = require("../models/article")

router.get('/', async (req, res, )=> {
    try {
    const articles = await Article.find({}, null, {sort: {'_id': -
    1}}).populate("scategorieID").exec();
    res.status(200).json(articles);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });

    router.post("/", async (req, res) => {

        const { reference, designation, prix, marque, qtestock, imageart, scategorieID } = req.body
        try {
            const a1 = new article({ reference: reference, designation: designation, prix: prix, marque: marque, qtestock: qtestock, imageart: imageart, scategorieID: scategorieID });
            await a1.save();
            res.status(200).json(a1)
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    })  

    router.get('/:articleId',async(req, res)=>{
        try {
        const art = await Article.findById(req.params.articleId);
        res.status(200).json(art);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        });

router.put('/:articleId', async (req, res)=> {
try {
const art = await Article.findByIdAndUpdate(
req.params.articleId,
{ $set: req.body },
{ new: true }
);
const articles = await
Article.findById(art._id).populate("scategorieID").exec();
res.status(200).json(articles);
} catch (error) {
res.status(404).json({ message: error.message });
}
});

router.delete('/:articleId', async (req, res)=> {
    const id = req.params.articleId;
    try {
    await Article.findByIdAndDelete(id);
    res.status(200).json({ message: "article deleted successfully." });
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
    module.exports = router;
