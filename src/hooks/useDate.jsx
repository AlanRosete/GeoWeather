import { DAY, MONTHS } from '../components/Const'

import { WeatherContext } from '../context/WeatherContextProvider'
import { useContext, useEffect, useRef, useState } from 'react'

const useDate = () => {
  const { location } = useContext(WeatherContext)
  const [timeDate, setTimeDate] = useState({ time: '', date: '', times: '' })
  const intervalRef = useRef(null)

  useEffect(() => {
    if (intervalRef.current) intervalRef.current = null
    intervalRef.current = setInterval(() => {
      if (!location) return // Avoid errors
      const { localtime, localtime_epoch } = location
      // Validate localtime and localtime_epoch defined
      if (!localtime || !localtime_epoch) return
      const myDate = new Date(localtime_epoch * 1000)
      const times = myDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      console.log(myDate)
      console.log(times)
      // Date Local Transform
      // Parse latest + 1
      const updatedEpoch = parseInt(localtime_epoch) + 1

      const time = localtime?.slice(-5)
      const month = localtime?.slice(5, 7)
      const day = localtime?.slice(8, 10)
      const year = localtime?.slice(0, 4)
      const currentDate = ` ${day} ${MONTHS[month]} ${year}`
      const weekday = new Date(currentDate).getDay() || 0

      const date = `${DAY[weekday] + ', ' + currentDate}`
      setTimeDate({ time, date, times })

      // Update the location with the new localtime_epoch
      location.localtime_epoch = updatedEpoch.toString()
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [location])

  return timeDate
}

export default useDate
