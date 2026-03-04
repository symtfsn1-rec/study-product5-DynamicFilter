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

// ユーザー一覧を表示する関数
const renderUsers = (filteredUsers) => {
  userList.innerHTML = '';

  if (filteredUsers.length === 0) {
    const noResultItem = document.createElement('li');
    noResultItem.textContent = '一致するユーザーが見つかりません';
    noResultItem.style.color = '#888';
    noResultItem.style.textAlign = 'center';
    userList.appendChild(noResultItem);
    return;
  }

  filteredUsers.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = user.name;
    userList.appendChild(li);
  });
};

const updateSearch = () => {
  const keyword = searchInput.value.toLowerCase().trim();
  
  const filtered = users.filter((user) => {
    return user.name.toLowerCase().includes(keyword);
  });
  
  renderUsers(filtered);
};

// 検索イベントの監視
searchInput.addEventListener('input', updateSearch);

// 最初に全データを表示しておく
renderUsers(users);