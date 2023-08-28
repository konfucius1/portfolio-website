import { motion } from 'framer-motion'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import Hero from '../components/Hero'
import Divider from '../components/Divider'

const Notes = () => {
  return (
    <>
      <div className="flex sm:flex bg-dark px-4 pt-8 sm:px-20 text-off-white">
        <a
          href="https://docs.google.com/presentation/d/1VEGHqe6FrWp03d_xm7mzNbnY5aWwNzPZChZC7C3qz24/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>INFO30006-Phisherman's-Friend-Presentation</p>
        </a>
      </div>
    </>
  )
}

export default Notes
