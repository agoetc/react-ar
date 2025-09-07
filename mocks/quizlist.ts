// images[0]などは、実際の画像パスに置き換えてください
// const images = ['/path/to/image1.png', '/path/to/image2.png', ...];

type Quiz = {
  id: string;
  title: string;
  choiceA: string;
  choiceB: string;
  answer: string;
  latitude: number;
  longitude: number;
  height: number;
  direction: number;
  imagePath: string;
};

const quizzes: Quiz[] = [
  {
    id: "1",
    title: "「赤レンガ駅舎」で知られる東京駅。その設計者は誰？",
    choiceA: "丹下健三",
    choiceB: "辰野金吾",
    answer: "choiceB",
    latitude: 35.681236, longitude: 139.767125, height: 1.6, direction: 10, imagePath: "/images/tokyo.png"
  },
  {
    id: "2",
    title: "大阪のシンボル「グリコの看板」がある有名な場所はどこ？",
    choiceA: "道頓堀",
    choiceB: "新世界",
    answer: "choiceA",
    latitude: 34.693738, longitude: 135.502165, height: 2.0, direction: 45, imagePath: "/images/osaka.png"
  },
  {
    id: "3",
    title: "名古屋城の屋根で輝いている有名な装飾の名前は何？",
    choiceA: "金の鯱（しゃちほこ）",
    choiceB: "銀の鳳凰（ほうおう）",
    answer: "choiceA",
    latitude: 35.170915, longitude: 136.881537, height: 1.2, direction: 90, imagePath: "/images/nagoya.png"
  },
  {
    id: "4",
    title: "毎年冬に開催される、札幌の雪と氷の祭典といえば何？",
    choiceA: "さっぽろ雪まつり",
    choiceB: "函館クリスマスファンタジー",
    answer: "choiceA",
    latitude: 43.061936, longitude: 141.354292, height: 3.0, direction: 135, imagePath: "/images/sapporo.png"
  },
  {
    id: "5",
    title: "福岡名物として知られる、豚骨ラーメンの麺の硬さで「一番硬い」とされる注文方法は？",
    choiceA: "バリカタ",
    choiceB: "粉落とし",
    answer: "choiceB",
    latitude: 33.590355, longitude: 130.401716, height: 0.8, direction: 180, imagePath: "/images/fukuoka.png"
  },
  {
    id: "6",
    title: "那覇市にある、琉球王国時代の王宮として知られる世界遺産は何？",
    choiceA: "首里城",
    choiceB: "今帰仁城",
    answer: "choiceA",
    latitude: 26.212401, longitude: 127.680932, height: 2.5, direction: 225, imagePath: "/images/naha.png"
  },
  {
    id: "7",
    title: "京都にある金閣寺。その正式名称は何？",
    choiceA: "慈照寺",
    choiceB: "鹿苑寺",
    answer: "choiceB",
    latitude: 35.011564, longitude: 135.768149, height: 1.0, direction: 270, imagePath: "/images/kyoto.png"
  },
  {
    id: "8",
    title: "仙台藩の初代藩主であり、「独眼竜」の異名で知られる武将は誰？",
    choiceA: "伊達政宗",
    choiceB: "上杉謙信",
    answer: "choiceA",
    latitude: 38.268839, longitude: 140.872103, height: 1.8, direction: 300, imagePath: "/images/sendai.png"
  },
  {
    id: "9",
    title: "水戸市にある、梅の名所として偕楽園とともに有名な場所はどこ？",
    choiceA: "弘道館",
    choiceB: "徳川ミュージアム",
    answer: "choiceA",
    latitude: 36.341813, longitude: 140.446793, height: 2.2, direction: 320, imagePath: "/images/mito.png"
  },
  {
    id: "10",
    title: "広島平和記念公園にある「原爆ドーム」。もともとは何という建物だった？",
    choiceA: "広島市役所",
    choiceB: "広島県産業奨励館",
    answer: "choiceB",
    latitude: 34.385203, longitude: 132.455293, height: 1.4, direction: 350, imagePath: "/images/hiroshima.png"
  },
];