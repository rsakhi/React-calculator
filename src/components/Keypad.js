import React from 'react'
import NumKeys from './NumKeys'
import { r1, r2, r3,r4, regularKeys, SciecKeys } from '../constants/keyConstant'

const KetPad= (props) => {

  return (
    <div>
      <div className="w-75">
        <div onClick={(event) => props.click(event) }>
          { r1.map((ele, index) => <NumKeys key={index} ele={ele} /> ) }
          { r2.map((ele, index) => <NumKeys key={index} ele={ele} /> ) }
          { r3.map((ele, index) => <NumKeys key={index} ele={ele} /> ) }
          { r4.map((ele, index) => <NumKeys key={index} ele={ele} /> ) }
        </div>
      </div>
      <div className="w-20" onClick={(event) => props.calc(event)}>
        { (props.mode === 'Regular' ? regularKeys : SciecKeys).map((ele, index) => <NumKeys key={index} ele={ele} class = 'opt-button' /> ) }
      </div>
    </div>
  )
}

export default KetPad