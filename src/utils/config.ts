// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { ICast, ModalContentType } from './types'

export const SITE_TITLE = 'REGAIN'
export const SITE_DESCRIPTION = '自習制作映画'

export const Menu: ModalContentType[] = [
  {
    title: 'About',
    content: '学生4人によって結成された映画製作団体「ST.Moonlight」の記念すべき第一作目いよいよ公開!! 彼女も友達も失った青年が、師匠との奇妙な関係を通して成長し、失くしたものを再び取り戻す物語',
  },
  {
    title: 'Cast',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias at earum, unde dolor labore dolorem molestias debitis excepturi molestiae quis minima natus qui fugiat, voluptates hic facilis sed provident ipsa!',
  },
  {
    title: 'Staff',
    content: '飛せけ打大ヌ載本ヲヨトロ載旧サルト審役をぜ思表ぴふおょ覇写ぐ際章をみフじ演枝ーフちぜ抱張ヲワノケ夜誠ゃら切6得冠みリぱ。実60関動ふね応議べ和43報どンるま護盛田紙ネ利聞メフ学諾タクロユ郎津ーまリれ摘4会旅ホヘ任徹ラわ問資ヨフオ座宿りドぼて証権太津え。動ひみぽ入品べラこ解木互ルスネモ岩教次ぞべっレ健食イタノメ勢真かゃ知意だぞド六芋ヨウラ芸報イ暮口キ無幅48身ル指飲ほう。',
  },
  {
    title: 'Contact',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias at earum, unde dolor labore dolorem molestias debitis excepturi molestiae quis minima natus qui fugiat, voluptates hic facilis sed provident ipsa!',
  },
]

export const cast: ICast[] = [
  {
    name: '佐野晃基',
    nameReading: 'Kohki Sano',
    role: '審判',
    roleReading: 'Referee',
    imgUrl: 'bg-[url(/img/img-01.jpg)]',
  },
  {
    name: '佐々木皐介',
    nameReading: 'Kohki Sano',
    role: '清水啓介',
    roleReading: 'Referee',
    imgUrl: 'bg-[url(/img/img-02.jpg)]',
  },
  {
    name: '北沢優香',
    nameReading: 'Yuka Kitazawa',
    role: '三浦涼花',
    roleReading: 'Suzuka Miura',
    imgUrl: 'bg-[url(/img/img-03.jpg)]',
  },
  {
    name: '近藤亮太',
    nameReading: 'Ryota Kondo',
    role: '宮前和成',
    roleReading: 'Kazunari Miyamae',
    imgUrl: 'bg-[url(/img/img-04.jpg)]',
  },
  {
    name: '野田祐介',
    nameReading: 'Yusuke Noda',
    role: '立山師匠',
    roleReading: 'Shisho Tateyama',
    imgUrl: 'bg-[url(/img/img-05.jpg)]',
  },
  {
    name: '山中啓伍',
    nameReading: 'Keigo Yamanaka',
    role: '高橋稔',
    roleReading: 'Minoru Takahashi',
    imgUrl: 'bg-[url(/img/img-06.jpg)]',
  },
  {
    name: '高山聡',
    nameReading: 'Satoshi Takayama',
    role: '大岳彰',
    roleReading: 'Akira Ohtake',
    imgUrl: 'bg-[url(/img/img-07.jpg)]',
  },
  {
    name: '佐々木咲弥、植田茉莉花、喜田よつ葉',
    nameReading: 'Saya, Marika, Yotsuba',
    role: 'ゆり,かえで,さくら',
    roleReading: 'Yuri, Kaede, Sakura',
    imgUrl: 'bg-[url(/img/img-08.jpg)]',
  },
]

/** tailwind skew styles, maximum number is 6 */
export const skewness: { [key: string]: string } = {
  1: 'skew-x-3 -skew-y-2',
  2: 'skew-x-2 skew-y-6',
  3: '-skew-x-3 skew-y-1',
  4: 'skew-x-2 -skew-y-3',
  5: '-skew-x-6 skew-y-6',
  6: 'skew-x-6 -skew-y-2',
}

export const modalBg = 'fixed w-full h-screen bg-black/50 grid place-items-center z-30 top-0 left-0'
