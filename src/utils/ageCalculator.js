export function ageCalculator(birth, isReverse = false) {
  const birthDate = new Date(birth)
  const today = new Date()
  const diff = isReverse
    ? birthDate.getTime() - today.getTime()
    : today.getTime() - birthDate.getTime()
  const age = new Date(diff)
  const years = age.getFullYear() - 1970
  const months = age.getMonth()
  const days = age.getDate() - 1
  return { year: years, month: months, day: days }
}

export const allDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const allMonths = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export function getUpComingBirthDay({ day, month }) {
  const currentDate = new Date()
  const upcomingYear =
    currentDate.getMonth() + 1 > month
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear()
  let upcomingsBirthDays = []
  for (let i = 0; i < 11; i++) {
    const nextBirthDay = new Date(
      `${parseNumbersToTenths(month)}-${parseNumbersToTenths(day)}-${
        upcomingYear + i
      }`
    )
    const date = ageCalculator(nextBirthDay.getTime(), true)
    upcomingsBirthDays.push({
      ...date,
      dayName: allDays[nextBirthDay.getDay()],
      actualYear: nextBirthDay.getFullYear(),
    })
  }
  return upcomingsBirthDays
}

export function parseNumbersToTenths(no) {
  return no.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
}
