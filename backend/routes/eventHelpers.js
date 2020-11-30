const moment = require("moment");
// middleware to get available times for events
const getAvailableTimes = (event, day, month, year) => {
  const availableTimes = []
  if (!event) {
    return availableTimes
  }

  if (!day || !month || !year) {
    return availableTimes
  }

  const date = new Date()
  if (day < date.getDate() && month < (date.getMonth() + 1) && year < date.getFullYear()) {
    return availableTimes
  }

  const weekDay = moment(`${year}-${month}-${day}`).format('dddd')

  const startTime = moment(event.schedules[weekDay].startTime, "HH:mm")
  const endTime = moment(event.schedules[weekDay].endTime, "HH:mm")

  // offday
  if (!event.schedules[weekDay].startTime || !event.schedules[weekDay].startTime) {
    return availableTimes
  }



  const duration = parseInt(event.duration)

  availableTimes.push(startTime.format('HHmm'))



  // eslint-disable-next-line no-constant-condition
  while (true) {
    const lastItem = availableTimes[availableTimes.length - 1]
    let hour = lastItem.substring(0, 2)
    let minute = lastItem.substring(2, 4)

    const time = moment(`${hour}${minute}`, "HH:mm").add(duration, 'm');
    const newTime = time.format('HHmm')

    if (endTime.diff(moment(time, "HH:mm"), 'minutes') < duration) {
      return availableTimes
    }

    if (moment(time, "HH:mm").isSameOrAfter(endTime)) {
      return availableTimes
    }
    availableTimes.push(newTime)
  }

};
module.exports = {
  getAvailableTimes
};