import { useState, useRef, useEffect } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi'
import {
  AiOutlineShareAlt,
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineArrowRight,
} from 'react-icons/ai'
import { useWindowSize } from '../../function/windowSize'

const Banner = () => {
  const { windowSize } = useWindowSize()
  const [show, setShow] = useState(true)
  const sidebarRef = useRef()
  useEffect(() => {
    if (windowSize < 768) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [windowSize])

  const handelOnSidebarClick = () => {
    sidebarRef.current.classList.toggle('toggleLeftSidebar')
    setShow((prev) => !prev)
  }

  return (
    <div className="banner">
      <div className="banner-left" ref={sidebarRef}>
        <div className="top-icon" onClick={handelOnSidebarClick}>
          <FiChevronLeft />
        </div>
        <h3 className="banner-left-heading">
          MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)
        </h3>
        <div className="banner-left-icons">
          <div className="icons">
            <p className="banner-left-icon">
              <AiOutlineHeart />
            </p>
            <p className="numb">0</p>
          </div>
          <div className="icons">
            <p className="banner-left-icon">
              <AiOutlineShareAlt />
            </p>
            <p className="numb">120</p>
          </div>
          <div className="icons">
            <p className="banner-left-icon">
              <AiOutlineEye />
            </p>
            <p className="numb">27</p>
          </div>
        </div>
        <div className="banner-left-p-tags">
          <p className="Dynasty">Dynasty : Ahichchhatra</p>
          <p className="Dynasty">Period : 200 CE</p>
          <p className="Dynasty">Material : Sandstone</p>
          <p className="Dynasty">Location : National Museum</p>
        </div>
        <div className="description">
          <p className="banner-left-description">Description:</p>
          <p className="para">
            Maitreya, the future Buddha to be, resides in the Tushita heaven as
            a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is
            the eighth Buddha, a successor of the seven historical Buddhas
            (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha
            will be born in ketumati, in present-day Varanasi, Uttar Pradesh. As
            a bodhisattva, Maitreya wears a heavily adorned with earrings,
            wristlets, necklaces, and an amulet. The
          </p>
        </div>
        <div className="banner-left-read-more">
          <p>
            <AiOutlineArrowRight />
          </p>
          <p className="read-more-btn">Read More</p>
        </div>
        <div className="banner-buttons">
          <button className="btn-one">ADD TO COLLECTIONS</button>
          <button className="btn-two">SOUVENIR</button>
        </div>
      </div>
      <div className="banner-right">
        <div className="chevron_icon" onClick={handelOnSidebarClick}>
          {show ? <BiChevronsLeft /> : <BiChevronsRight />}
        </div>
      </div>
    </div>
  )
}

export default Banner
