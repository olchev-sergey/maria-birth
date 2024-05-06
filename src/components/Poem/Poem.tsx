import { motion, useAnimation } from 'framer-motion'
import { textPoem } from './text'
import css from './styles.module.scss'
import { useEffect, useRef } from 'react'

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export function Poem() {
  const controls = useAnimation()
  const ref = useRef(null)
  // const isInView = useInView(ref, { amount: 0.5, once: true })
  const isInView = true
  console.log('isInView', isInView)
  useEffect(() => {
    let timeout: number
    const show = () => {
      controls.start('visible')
      // if (repeatDelay) {
      //   timeout = setTimeout(async () => {
      //     await controls.start("hidden");
      //     controls.start("visible");
      //   }, repeatDelay);
      // }
    }

    if (isInView) {
      show()
    } else {
      controls.start('hidden')
    }

    return () => clearTimeout(timeout)
  }, [isInView])

  return (
    <div className={css.container}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textPoem.map((line, lineIndex) => (
          <span className={css.block} key={`${line}-${lineIndex}`}>
            {line.split(' ').map((word, wordIndex) => (
              <span
                className={css['inline-block']}
                key={`${word}-${wordIndex}`}
              >
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className={css['inline-block']}
                    variants={defaultAnimations}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className={css['inline-block']}>&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </div>
  )
}
