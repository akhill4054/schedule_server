const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    range_info: {
        type: new Schema({
            start: { type: Date },
            end: { type: Date }
        }, { _id : false })
    },
    title: {
        type: String,
        required: true
    },
    desc: { type: String },
    schedules: [
        {
            dow: {
                /**
                 * 0, 1, 2, .. 6 --> Sun, Mon, .. Sat
                 * -1, -2, .. --> Special codes
                 * -1 --> Holiday!
                 */
                type: Number, 
                required: true 
            }, // Day of the week
            st: { type: String }, // Starting time for the slot (hh:mm, 24 hours clock format)
            slots: [
                {
                    c: {
                        /**
                         * null --> Normal slot
                         * 0 --> Break
                         * 1 --> Lunch time!
                         * ..
                         */
                        type: Number 
                    }, // Nullable slot code
                    h: { type: String }, // Header
                    s: { type: String }, // Optional subtext
                    d: { type: Number, require: true }, // Slot duration (in minutes)
                    n: { type: String }, // Optional note
                }
            ]
        }
    ],
}, { timestamps: true });

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;