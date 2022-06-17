const dataList = require('../db/color.json');

module.exports = {
    getNewData: (req, res) => {
        return res.json(dataList);
    },

    getPopularData: (req, res) => {
        const arr = JSON.parse(JSON.stringify(dataList));
        const popularData = arr.color.sort((a, b) => b.likes - a.likes);
        return res.json({color: popularData});
    },

    postColor: (req, res) => {
        dataList.color.unshift(req.body);
        return res.status(201).json({status: success});
    }
}