const reachDestination = (distance, speed) => {
    const distanceOverSpeed = distance/speed
    const roundUpDistance = (Math.ceil(distanceOverSpeed*2)/2).toFixed(1)
    return 'I should be there in ' + roundUpDistance + ' hours.'
}

module.exports = reachDestination;
