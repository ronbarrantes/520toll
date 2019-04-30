const getChildrenArray = () => {
  return child => child.children
    .filter((child) => child.type === 'tag')
    .map(child => child.children[1].children[0].data)
}

const getReducedArray = () => {
  return (curr, next) =>{
    let [schedule, goodToGo, payByMail] = next
    let time
    let firstHour = schedule.split('to')[0].trim().split(' ')
    if(schedule.includes('Midnight')){
      time = 0
    }
    else if(firstHour[1].includes('p')){
      time = parseInt(firstHour[0]) + 12
    }
    else time = parseInt(firstHour[0])
    return curr = [
      ...curr,
      {
        time,
        schedule,
        goodToGo,
        payByMail,
      },
    ]
  }
}

const parsedData = (data) => {
  return data.children
    .map(getChildrenArray()
    )
    .filter((child, i)=> i !== 0)
    .reduce(getReducedArray(), [])
}

module.exports = (table) =>{
  return parsedData(table)
}