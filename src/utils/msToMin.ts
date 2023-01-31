const msToMin = (ms: number) => {
  const date = new Date(ms)
  return `${date.getMinutes()}:${String(date.getSeconds()).padStart(2, "0")}`
}

export default msToMin
