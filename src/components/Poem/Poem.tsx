import { motion } from 'framer-motion'
import { textPoemByBlock } from './text'
import { FC } from 'react'
import css from './styles.module.scss'

const Card: FC<{ children: string; index: number }> = ({ children, index }) => {
  const lines = children.split('\n')
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? '100%' : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: true }}
      className={css.card}
    >
      {lines.map((el, i) => (
        <div key={i}>{el}</div>
      ))}
    </motion.div>
  )
}

export const Poem = () => {
  return (
    <div style={{ padding: 8 }}>
      <h1>Тебе я посвещаю...</h1>
      {textPoemByBlock.map((el, i) => (
        <Card index={i} key={i}>
          {el}
        </Card>
      ))}
    </div>
  )
}

// export function Poem() {
//   const controls = useAnimation()
//   const ref = useRef(null)
//   // const isInView = useInView(ref, { amount: 0.5, once: true })
//   const isInView = true
//   console.log('isInView', isInView)
//   useEffect(() => {
//     let timeout: number
//     const show = () => {
//       controls.start('visible')
//       // if (repeatDelay) {
//       //   timeout = setTimeout(async () => {
//       //     await controls.start("hidden");
//       //     controls.start("visible");
//       //   }, repeatDelay);
//       // }
//     }

//     if (isInView) {
//       show()
//     } else {
//       controls.start('hidden')
//     }

//     return () => clearTimeout(timeout)
//   }, [isInView])

//   return (
//     <div className={css.container}>
//       <motion.span
//         ref={ref}
//         initial="hidden"
//         animate={controls}
//         variants={{
//           visible: { transition: { staggerChildren: 0.1 } },
//           hidden: {},
//         }}
//         aria-hidden
//       >
//         {textPoem.map((line, lineIndex) => (
//           <span className={css.block} key={`${line}-${lineIndex}`}>
//             {line.split(' ').map((word, wordIndex) => (
//               <span
//                 className={css['inline-block']}
//                 key={`${word}-${wordIndex}`}
//               >
//                 {word.split('').map((char, charIndex) => (
//                   <motion.span
//                     key={`${char}-${charIndex}`}
//                     className={css['inline-block']}
//                     variants={defaultAnimations}
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//                 <span className={css['inline-block']}>&nbsp;</span>
//               </span>
//             ))}
//           </span>
//         ))}
//       </motion.span>
//       <img src={heartImg} />
//     </div>
//   )
// }
