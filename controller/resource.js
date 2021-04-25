const Resource = require('../schema/resourceSchema');

exports.addResource = (req, res) => {
    // add resource api
    const resource = new Resource({
        // _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        number: req.body.number,
        helptype: req.body.helptype,
        description: req.body.description,
        location: req.body.location
    });

    resource.save().then(result => {
        console.log(result);
        res.status(200).json({ newResource: result }).catch(err => {
            console.log(err);
            res.status(500).json({ err: err });
        });
    });
};

exports.getResources = (req, res) => {
    Resource.find().then(result=>{
        res.status(200).json({
            data: result
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({error: err});
    })
};