// 検索対象となるデータの配列（オブジェクトのリスト）
const users = [
  {id: 1, name: '佐藤 健太'},
  {id: 2, name: '鈴木 一郎'},
  {id: 3, name: '高橋 幸子'},
  {id: 4, name: '田中 太郎'},
  {id: 5, name: '伊藤 花子'},
  {id: 6, name: '渡辺 亮'},
  {id: 7, name: '草薙 素子'},
  {id: 8, name: 'バトー'},
  {id: 9, name: 'トグサ'},
  {id: 10, name: 'イシカワ'},
];

const searchInput = document.getElementById('searchInput');
const userList = document.getElementById('userList');