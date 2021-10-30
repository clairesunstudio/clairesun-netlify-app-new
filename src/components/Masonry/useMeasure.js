import React, { useState, useLayoutEffect } from 'react'
import useResizeObserver from '@react-hook/resize-observer'

const useSize = (target) => {
  const [size, setSize] = useState()

  useLayoutEffect(() => {
    console.log('target: ' + target.current.getBoundingClientRect())
    setSize(target.current.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect))
  if (size) {
    console.log(size.width)
    return size
  }
  
}

export default useSize;