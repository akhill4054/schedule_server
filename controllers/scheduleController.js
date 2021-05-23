const express = require('express');
const Schedule = require('../models/schedule');

/** 
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.allSchedules = (req, res) => {
   Schedule.find()
      .then((result) => {
         res.send(result);
      })
      .catch((err) => {
         console.log(err);
      });
}

exports.addSchedule = (req, res) => {
   const schedule = new Schedule(req.body);

   schedule.save()
      .then((result) => {
         res.send({
            msg: 'Schedule saved.'
         });
      })
      .catch((err) => {
         res.status(400).send({
            msg: 'An error occured while saving the schedule!',
         });
         console.log(err);
      });
}

exports.getSchedule = (req, res) => {
   const id = req.params.id;
   Schedule.findById(id)
      .then((result) => {
         res.send(result);
      })
      .catch((err) => {
         res.status(400).send({
            msg: 'An error occured while fetching the schedule.',
         });
         console.log(err);
      });
}

exports.deleteSchedule = (req, res) => {
   const body = req.body;
   Schedule.findByIdAndDelete(body.id)
      .then((result) => {
         res.send(result);
      })
      .catch((err) => {
         res.status(400).send({
            msg: 'An error occured while fetching the schedule.',
         });
         console.log(err);
      });
}

exports.clearAllSchedules = async (req, res) => {
   if (req.body.pass != 'A1B2C3') {
      res.status(400).send({
         msg: 'Invalid secret!',
      });
      return;
   }
   if (process.env.NODE_ENV != 'dev') {
      res.status(400).send({
         msg: 'Cannot perform clear on prod!',
      });
      return;
   }
   
   try {
      await Schedule.deleteMany()
      res.send({ msg: 'Collection cleared.' });
   } catch (err) {
      res.status(400).send({
         msg: 'An error occured while clearing the collection.',
      });
      console.log(err);
   }
}