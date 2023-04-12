import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const ReadMore = ({ children }) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 200) : text}
      <span onClick={toggleReadMore}>
        <div className="banner-left-read-more">
          <p className='readMore-arrow'>
            <AiOutlineArrowRight />
          </p>
          <button className="read-more-btn">
            {isReadMore ? 'Read More' : 'Show Less'}
          </button>
          {/* <button className="read-more-btn">Show Less</button> */}
        </div>
      </span>
    </p>
  )
}
export default ReadMore
