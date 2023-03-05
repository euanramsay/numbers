// This code is for the new requirement
export const newNumbers = (nmbr) => {
  for (let i = 0; i < nmbr.length; i++) {
    for (let j = 0; j < nmbr.length; j++) {
      if (nmbr[j] > nmbr[j + 1]) {
        let x = nmbr[j]
        nmbr[j] = nmbr[j + 1]
        nmbr[j + 1] = x
      }
    }
  }
  return nmbr
}
