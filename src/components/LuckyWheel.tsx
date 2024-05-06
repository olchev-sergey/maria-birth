import RoulettePro from 'react-roulette-pro'
import './styles.scss'
import { useState } from 'react'

const prizes = [
  {
    text: 'Сережки',
    image:
      'https://g6.sunlight.net/media/products/9c616a3effeaa8d27a14e032f6e7e386a85e90c0.jpg',
  },
  {
    text: 'Бургер',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEoR-KDSMxXej6ec1uj4-a_GtkfD0G4CQNE_zyNfqYQ&s',
  },
  {
    text: 'Браслет',
    image:
      'https://pmdn.sokolov.io/pics/19/18/CCE3A54D8453F8F4C8931C24D0B7.jpg',
  },
  {
    text: 'Топ',
    image:
      'https://imgcdn.loverepublic.ru/upload/images/42550/4255005315_1_4.jpg',
  },
  {
    text: 'Кроссовки',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Nike_air_Force_1_white_on_white.jpg',
  },
  {
    text: 'Поцелуй',
    image:
      'https://w7.pngwing.com/pngs/871/997/png-transparent-kiss-lip-file-formats-kiss-miscellaneous-image-file-formats-photography.png',
  },
  {
    text: 'Фиг',
    image:
      'https://flomaster.top/uploads/posts/2021-11/1635840755_2-flomaster-club-p-figa-narisovannaya-krasivii-risunok-2.png',
  },
  {
    text: 'Бургер',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEoR-KDSMxXej6ec1uj4-a_GtkfD0G4CQNE_zyNfqYQ&s',
  },
  {
    text: 'Браслет',
    image:
      'https://pmdn.sokolov.io/pics/19/18/CCE3A54D8453F8F4C8931C24D0B7.jpg',
  },
  {
    text: 'Топ',
    image:
      'https://imgcdn.loverepublic.ru/upload/images/42550/4255005315_1_4.jpg',
  },
  {
    text: 'Кроссовки',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Nike_air_Force_1_white_on_white.jpg',
  },
  {
    text: 'Поцелуй',
    image:
      'https://w7.pngwing.com/pngs/871/997/png-transparent-kiss-lip-file-formats-kiss-miscellaneous-image-file-formats-photography.png',
  },
  {
    text: 'Фиг',
    image:
      'https://flomaster.top/uploads/posts/2021-11/1635840755_2-flomaster-club-p-figa-narisovannaya-krasivii-risunok-2.png',
  },
  {
    text: 'Бургер',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEoR-KDSMxXej6ec1uj4-a_GtkfD0G4CQNE_zyNfqYQ&s',
  },
  {
    text: 'Браслет',
    image:
      'https://pmdn.sokolov.io/pics/19/18/CCE3A54D8453F8F4C8931C24D0B7.jpg',
  },
  {
    text: 'Топ',
    image:
      'https://imgcdn.loverepublic.ru/upload/images/42550/4255005315_1_4.jpg',
  },
  {
    text: 'Кроссовки',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Nike_air_Force_1_white_on_white.jpg',
  },
  {
    text: 'Поцелуй',
    image:
      'https://w7.pngwing.com/pngs/871/997/png-transparent-kiss-lip-file-formats-kiss-miscellaneous-image-file-formats-photography.png',
  },
  {
    text: 'Фиг',
    image:
      'https://flomaster.top/uploads/posts/2021-11/1635840755_2-flomaster-club-p-figa-narisovannaya-krasivii-risunok-2.png',
  },
  {
    text: 'Бургер',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEoR-KDSMxXej6ec1uj4-a_GtkfD0G4CQNE_zyNfqYQ&s',
  },
  {
    text: 'Браслет',
    image:
      'https://pmdn.sokolov.io/pics/19/18/CCE3A54D8453F8F4C8931C24D0B7.jpg',
  },
  {
    text: 'Топ',
    image:
      'https://imgcdn.loverepublic.ru/upload/images/42550/4255005315_1_4.jpg',
  },
  {
    text: 'Кроссовки',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Nike_air_Force_1_white_on_white.jpg',
  },
  {
    text: 'Поцелуй',
    image:
      'https://w7.pngwing.com/pngs/871/997/png-transparent-kiss-lip-file-formats-kiss-miscellaneous-image-file-formats-photography.png',
  },
  {
    text: 'Фиг',
    image:
      'https://flomaster.top/uploads/posts/2021-11/1635840755_2-flomaster-club-p-figa-narisovannaya-krasivii-risunok-2.png',
  },
]

const reproductionArray = (array: object[] = [], length = 0) => [
  ...Array(length)
    .fill('_')
    .map(() => array[Math.floor(Math.random() * array.length)]),
]

const reproducedPrizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length * 3),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
]

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`

const prizeList = reproducedPrizeList.map((prize) => ({
  ...prize,
  id:
    typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : generateId(),
})) as any[]

export function LuckyWheel() {
  const [start, setStart] = useState(false)

  const handleStart = () => {
    setStart((prevState) => !prevState)
  }

  const handlePrizeDefined = () => {
    console.log('🥳 Prize defined! 🥳')
  }

  const prizeIndex = prizes.length * 4 + 0

  return (
    <div>
      <div className="roulette-container">
        <RoulettePro
          prizes={prizeList}
          prizeIndex={prizeIndex}
          start={start}
          spinningTime={10}
          onPrizeDefined={handlePrizeDefined}
        />
      </div>

      <button onClick={handleStart}>Start</button>
    </div>
  )
}
