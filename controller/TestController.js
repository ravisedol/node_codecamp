function unixTimes(req,res){
    let dateString = req.params.date;
    let date;

    // check if datestring is empty
    if(!dateString){
        date = new Date();
    } else {

        // Check if datestring is not unix timestamp
        if(!isNaN(dateString)){
            date = new Date(parseInt(dateString));
        } else {
            date = new Date(dateString);
        }
    }

    // check if date is invalide
    if(isNaN(date.getTime())){
        return res.json({error: "Invalid Date"});
    } 
    return res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    });

}

module.exports = {unixTimes};
