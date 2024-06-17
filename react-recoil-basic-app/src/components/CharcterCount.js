import React from 'react'
import { useRecoilValue } from 'recoil'
import { charCountState } from '../App'

const CharcterCount = () => {
  const count = useRecoilValue(charCountState)
  return (
    <div>Charcter Count : {count}</div>
  )
}

export default CharcterCount