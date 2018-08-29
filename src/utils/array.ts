import { defined } from './evaluation'

export function createArray(length: number): null[] {
  return Array.apply(null, new Array(length))
}

export function createArrayOf<C>(content: C, length: number): C[] {
  return Array.apply(null, new Array(length)).map(_ => content)
}

export function setInArray(arr, index, val) {
  return Object.assign([...arr], { [index]: val })
}

export function addToArrayIfNotThere(arr, val) {
  if (arr.indexOf(val) > -1) {
    return arr
  } else {
    return [...arr, val]
  }
}

export function removeInArray(arr, val) {
  return arr.filter(arrItem => arrItem !== val)
}

export function extractProp<O>(arr: O[], prop) {
  return arr.map((item: O) => item[prop])
}

export function removeInArrayBy(prop, arr, val) {
  return arr.filter(item => item[prop] !== val)
}

export function replaceInArrayBy(prop, arr, val, newItem) {
  return arr.map(item => (item[prop] === val ? newItem : item))
}

export function sortByName(a, b) {
  if (typeof a.name === 'number') {
    return a.name - (b.name as any)
  } else {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  }
}

export function sortBy(prop, a, b) {
  if (typeof a[prop] === 'number') {
    return sortNumberBy(prop, a, b)
  } else {
    return sortCharBy(prop, a, b)
  }
}

export function sortNumberBy(prop, a, b) {
  return a[prop] - (b[prop] as any)
}

export function sortCharBy(prop, a, b) {
  if (a[prop] < b[prop]) {
    return -1
  }
  if (a[prop] > b[prop]) {
    return 1
  }
  return 0
}

export function sortNumber(a, b) {
  return a - b
}

export function sortChar(a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

export function isXInArrayOf(x: string, arr: any[], prop: string): boolean {
  return arr.some(info => info[prop] === x)
}

export function itemsInArrOf<T>(items: T[], arr: any[], prop): any[] {
  return arr.filter((x: T) => items.indexOf(x[prop]) > -1)
}
export function arrOfProp<T>(arr: T[], prop: string): string[] {
  return arr.reduce((acc: string[], curr: T) => {
    if (acc.indexOf(curr[prop]) === -1) {
      acc.push(curr[prop])
    }
    return acc
  }, [])
}

export function flatten(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    )
  }, [])
}

export function findArrayIndex(array, predicateFunction) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  let index = -1
  for (let i = 0; i < array.length; ++i) {
    if (predicateFunction(array[i])) {
      index = i
      break
    }
  }
  return index
}

export function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    if (defined(obj[prop])) {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
    } else {
      return true
    }
  })
}

export function lastIndexInArrayWithValue(
  arr: any[],
  prop: string,
  value: any
): number {
  let index = arr.length - 1
  for (; index >= 0; index--) {
    if (arr[index][prop] === value) {
      return index
    }
  }
  return null
}
