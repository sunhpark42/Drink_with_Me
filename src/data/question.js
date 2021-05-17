const ImageRoot = 'https://sunhpark42.github.io/Drink_with_Me/src/assets/images/question';

const question = [
  {
    id: 0,
    questionText: '어서오세요, 무엇을 드시겠어요?',
    image: `${ImageRoot}/dwm_bartendor.jpeg`,
    options: [
      {
        id: 0,
        text: '처음 와봐서 그러는데, 혹시 추천해주실 수 있나요?',
        image: '',
      },
    ],
    afterTalk: ['물론이죠. 여기 앉으세요. 그런데... '],
  },
  {
    id: 1,
    questionText: '혼자 오셨네요?',
    image: `${ImageRoot}/dwm_bartendor.jpeg`,
    options: [
      {
        id: 0,
        text: '술이 너무 마시고 싶었어요.',
        image: '',
      },
      {
        id: 1,
        text: '간판이 제 취향이어서 들어와봤어요.',
        image: '',
      },
      {
        id: 2,
        text: '동네에 처음 보는 술집이 생겼길래...',
        image: '',
      },
      {
        id: 3,
        text: '묻지 말아주세요.',
        image: '',
      },
    ],
  },
  {
    id: 2,
    questionText: '안주부터 고르시겠어요?',
    image: `${ImageRoot}/dwm_menu.jpeg`,
    options: [
      { id: 0, text: '비스킷, 담백한 안주', image: '' },
      { id: 1, text: '피자, 메인 요리', image: '' },
      { id: 2, text: '딸기 알리오올리오', image: '' },
      { id: 3, text: '오늘의 추천 메뉴', image: '' },
    ],
    afterTalk: ['', '', '', '오늘의 추천 메뉴는 청경채푸딩이에요. 바텐더가 활짝 웃는다.'],
  },
  {
    id: 3,
    questionText: '오늘 하루는 어땠어요?',
    image: `${ImageRoot}/dwm_bartendor.jpeg`,
    options: [
      { id: 0, text: '오늘 오랜만에 친구를 만나서...', image: '' },
      { id: 1, text: '그냥 뭐, 특별한 건 없었어요.', image: '' },
      { id: 2, text: '( 하하. 그냥 웃는다. )', image: '' },
      { id: 3, text: '별로 말하고 싶지 않아요.', image: '' },
    ],
    afterTalk: ['', '', '', '그런 날이 있죠. 바텐더가 레몬사탕을 줬다.'],
  },
  {
    id: 4,
    questionText: '내일이면 주말이네요. 보통 주말에 집에서 뭐하세요?',
    image: `${ImageRoot}/dwm_hobby.jpeg`,
    options: [
      { id: 0, text: '밀린 드라마나 몰아보려고요.', image: '' },
      { id: 1, text: '음... 그냥 누워서 쉬어요.', image: '' },
      { id: 2, text: '책도 읽고, 공부도 하고... 할 게 너무 많네요!', image: '' },
      { id: 3, text: '뭐하긴요, 놀아야죠. 게임도 하고.', image: '' },
    ],
  },
  {
    id: 5,
    questionText: '지금 이 노래, 어때요? 제가 좋아하는 노래인데.',
    image: `${ImageRoot}/dwm_audio.jpeg`,
    options: [
      { id: 0, text: '너무 좋아요!', image: '' },
      { id: 1, text: '좋기는 한데, 제 취향은 아니네요.', image: '' },
      { id: 2, text: '좋은 것 같기도 하고...', image: '' },
      { id: 3, text: '노래가 나오고 있는줄도 몰랐다.', image: '' },
    ],
  },
  {
    id: 6,
    questionText: '고개를 돌리니 한 쪽 벽에 영화가 틀어져 있다. 지금 나오는 건...',
    image: `${ImageRoot}/dwm_beem.jpeg`,
    options: [
      { id: 0, text: '이름 모를 흑백영화.', image: '' },
      { id: 1, text: '흔한 크리스마스 로맨스네.', image: '' },
      { id: 2, text: '애니메이션. 꽤 재미있어보인다.', image: '' },
      { id: 3, text: '윽, 좀비물을 왜?', image: '' },
    ],
    afterTalk: [
      '',
      '',
      '',
      '그러고보니 인테리어 소품인줄 알았던 DVD들이 전부 공포영화다. 이  사람...',
    ],
  },
  {
    id: 7,
    questionText: '저희 바, 인테리어를 좀 바꿔볼까하는데. 뭐가 좋을까요?',
    image: `${ImageRoot}/dwm_bartendor.jpeg`,
    options: [
      { id: 0, text: '가게 분위기를 생각하면 역시 이런 게...', image: '' },
      { id: 1, text: '아, 제가 좋아하는 소품샵이 있는데!', image: '' },
      { id: 2, text: '언제요? 예상비용은 얼마? 공사도 하시나요?', image: '' },
      { id: 3, text: '음... 글쎄요... 전 인테리어는 잘.', image: '' },
    ],
    afterTalk: ['', '', '아직 거기까진 생각 안해봤어요. 바텐더가 당황한다.', ''],
  },
  {
    id: 8,
    questionText:
      '대화를 나누고 있는데, 갑자기 옆사람이 말을 걸어온다. "무슨 얘기를 그렇게 재밌게 하세요?"',
    image: `${ImageRoot}/dwm_bartendor.jpeg`,
    options: [
      { id: 0, text: '인테리어 얘기중이었어요.', image: '' },
      { id: 1, text: '아, 인테리어 좋아하세요? 같이 얘기하실래요?', image: '' },
      { id: 2, text: '아...하하...그냥 뭐.', image: '' },
      { id: 3, text: '... 무시한다.', image: '' },
    ],
  },
  {
    id: 9,
    questionText: '음악이 끝났네요. 다음엔 어떤걸 틀어볼까요?',
    image: `${ImageRoot}/dwm_music_player.jpeg`,
    options: [
      { id: 0, text: '바에 어울리는 재즈', image: '' },
      { id: 1, text: '잔잔한 선율의 클래식', image: '' },
      { id: 2, text: '신나는 EDM', image: '' },
      { id: 3, text: '밝고 경쾌한 팝', image: '' },
    ],
  },
  {
    id: 10,
    questionText: '아, 애인분이랑 데이트할 때는 보통 어딜 가시나요?',
    image: `${ImageRoot}/dwm_bartendor.jpeg`,
    options: [
      {
        id: 0,
        text: '맛집도 가고 예쁜 카페도 가요. 아 맞다 저번에 여기 갔었는데...(주절주절)',
        image: '',
      },
      { id: 1, text: '( 어라, 나한테 관심있나? )', image: '' },
      { id: 2, text: '그런 걸 왜 물어보세요?', image: '' },
      { id: 3, text: '먼저 애인이 있냐고 물어보셔야죠...', image: '' },
    ],
    afterTalk: [
      '조금만 천천히 말해주세요. 바텐더가 급히 메모장을 켠다.',
      '사실은 제가 내일 데이트거든요. 바텐더가 수줍게 웃는다.',
      '우리 바는 언제나 열려있어요. 바텐더가 속삭인다.',
      '울지 마세요... 바텐더가 냅킨을 건넨다.',
    ],
  },
  {
    id: 11,
    questionText: '어, 밖에 비가 오네요.',
    image: `${ImageRoot}/dwm_window.jpeg`,
    options: [
      { id: 0, text: '비 예보가 있더라구요. 우산 챙겨오길 잘했네요.', image: '' },
      { id: 1, text: '이런, 우산 없는데.', image: '' },
      { id: 2, text: '맞고 가죠, 뭐.', image: '' },
      { id: 3, text: '정말요? 저 빗소리 좋아하는데!', image: '' },
    ],
    afterTalk: ['', '', '', '저는 눈이 쌓이는 소리가 좋아요. 바텐더와 조금 친해진 것 같다.'],
  },
  {
    id: 12,
    questionText: '손님께 드릴 술을 결정했어요. 잔은 어떤 걸로 드릴까요?',
    image: `${ImageRoot}/dwm_bartendor.jpeg`,
    options: [
      { id: 0, text: '칵테일잔', image: `${ImageRoot}/dwm_cocktail.jpeg` },
      { id: 1, text: '샷잔', image: `${ImageRoot}/dwm_sojucup.jpeg` },
      { id: 2, text: '맥주잔', image: `${ImageRoot}/dwm_beercup.jpeg` },
      { id: 3, text: '이상한 거', image: `${ImageRoot}/dwm_bagaji.jpeg` },
    ],
    afterTalk: [
      '좋은 선택이네요. 후회하지 않을 거예요.',
      '좋은 선택이네요. 후회하지 않을 거예요.',
      '좋은 선택이네요. 후회하지 않을 거예요.',
      '좋은 선택이네요. 후회하지 않을 거예요.',
    ],
  },
];

export default question;
