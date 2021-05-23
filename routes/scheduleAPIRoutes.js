const express = require('express');
const scheduleController = require('../controllers/scheduleController');
const router = express.Router();

router.get('/api/v1/all-schedules', scheduleController.allSchedules);

router.post('/api/v1/add-schedule', scheduleController.addSchedule);

router.get('/api/v1/get-schedule/:id', scheduleController.getSchedule);

router.post('/api/v1/delete-schedule', scheduleController.deleteSchedule);

router.post('/api/v1/clear-all-schedules', scheduleController.clearAllSchedules);

module.exports = router;