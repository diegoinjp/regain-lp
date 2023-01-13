// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { ICast, ModalContentType } from './types'

export const SITE_TITLE = 'REGAIN'
export const SITE_DESCRIPTION = '自習制作映画'

export const Menu: ModalContentType[] = [
  {
    title: 'About',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias at earum, unde dolor labore dolorem molestias debitis excepturi molestiae quis minima natus qui fugiat, voluptates hic facilis sed provident ipsa!',
  },
  {
    title: 'Cast',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias at earum, unde dolor labore dolorem molestias debitis excepturi molestiae quis minima natus qui fugiat, voluptates hic facilis sed provident ipsa!',
  },
  {
    title: 'Staff',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolorem hic pariatur quis mollitia. Molestias facilis nam fugit dolor exercitationem molestiae magnam tempora dolores ullam aspernatur. Iusto voluptate tempore tenetur recusandae asperiores commodi qui adipisci ipsum nulla enim sit sequi doloribus sunt, beatae rerum id cupiditate inventore quod incidunt ullam, placeat neque nesciunt esse. Nisi doloribus aliquid corporis voluptates libero, eaque ab qui saepe accusamus quisquam doloremque repellendus tempore quia fugiat obcaecati vitae, expedita atque eligendi illo repudiandae ipsum autem!',
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