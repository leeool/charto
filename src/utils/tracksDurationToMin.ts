const tracksDurationToMin = (tracks: TrackData[]) => {
  return Math.trunc(
    tracks.reduce((acc, { durationMs }) => {
      return acc + durationMs / 1000 / 60
    }, 0)
  )
}

export default tracksDurationToMin
