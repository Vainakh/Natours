const Tour = require("../models/tourModel");

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price'
    });
  }
  next();
}

getAllTours = (req, res) => {
  res
  .status(200)
  .json({
    status: 'success',
    requestedAt: req.requestTime,
    // results: tours.length,
    // data: {
    //   tours: tours
    // }
  })
};

getTour = (req, res) => {
  const id = req.params.id * 1;
  // const tour = tours.find(el => el.id === id)
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour: tour
  //   }
  // });
}

createTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    // data: {
    //   tour: newTour,
    // }
  })
}

updateTour = (req, res) => {
  res.status(200).json({
    status: "fail",
    message: "Invalid ID"
  })
}

deleteTour = (req, res) => { 
  res.status(204).json({
    status: "success",
    data: null
  })
}

module.exports = {getAllTours, getTour, createTour, updateTour, deleteTour, checkBody};