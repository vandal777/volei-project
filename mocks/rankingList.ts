export interface IPlayer {
  name: string;
  profileImg: string;
  rankingPosition: number;
  points: number;
  description: string;
  playerId: number;
}

export const playerList: IPlayer[] = [
  {
    playerId: 1,
    name: 'Ricard Sangenis',
    profileImg:
      'https://cdn.discordapp.com/attachments/696427360051920967/803334564348166154/unknown.png',
    rankingPosition: 1,
    points: 153000,
    description: 'Is time to build the difference',
  },
  {
    playerId: 2,
    name: 'Leonardo Badilla',
    profileImg:
      'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/13620355_10209324228841065_955382378432154436_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=9zrrWUW50kgAX80WNZf&_nc_ht=scontent-mad1-1.xx&oh=c7b29223136da5fff6b27dad86c5c6bc&oe=60366D96',
    rankingPosition: 2,
    points: 149000,
    description: 'Is time to build the difference',
  },
  {
    playerId: 3,
    name: 'Guillermo Morillo',
    profileImg:
      'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/12219446_10207897978273431_583168678672291339_n.jpg?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_ohc=keCzRneshvEAX-6ahwM&_nc_ht=scontent-mad1-1.xx&oh=c5a5b4498ce5d166fa0ac4480e780153&oe=6036720E',
    rankingPosition: 3,
    points: 113000,
    description: 'Is time to build the difference',
  },
  {
    playerId: 4,
    name: 'Alex Muñoz',
    profileImg:
      'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/15780816_10211558572701673_8475274368137022477_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=WNLSYxs6oLwAX980k_r&_nc_ht=scontent-mad1-1.xx&oh=32a73e31a859091b5d03f7c1fb74dc41&oe=60345375',
    rankingPosition: 4,
    points: 102030,
    description: 'Is time to build the difference',
  },
  {
    playerId: 5,
    name: 'Abel Martinez',
    profileImg:
      'https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/24955660_10215104245585502_3886279053381660979_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=g_kWvp4bJFkAX-QEPtc&_nc_ht=scontent-mad1-1.xx&oh=2cee2598f795611be9f9e2f2a142fc66&oe=6032F32E',
    rankingPosition: 5,
    points: 93001,
    description: 'Is time to build the difference',
  },
  {
    playerId: 6,
    name: 'Sebas Peñas',
    profileImg:
      'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/65923331_10219128003928783_2091103921543053312_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=U1zatNKJ8q4AX-3Sukh&_nc_ht=scontent-mad1-1.xx&oh=8c4f28fd8cb90c1042f0dcbc388a6298&oe=6034AF93',
    rankingPosition: 6,
    points: 81203,
    description: 'Is time to build the difference',
  },
];
