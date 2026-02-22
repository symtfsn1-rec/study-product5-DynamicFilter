const users = [
  {id: 1, name: '佐藤 健太'},
  {id: 2, name: '鈴木 一郎'},
  {id: 3, name: '高橋 幸子'},
  {id: 4, name: '田中 太郎'},
  {id: 5, name: '伊藤 花子'},
  {id: 6, name: '渡辺 亮'},
  {id: 7, name: '中田 敦彦'},
  {id: 8, name: '木本 たける'},
  {id: 9, name: '中村 駿'},
  {id: 10, name: '菊名 吏隠'},
  {id: 11, name: '中山 雄大'},
  {id: 12, name: '黄瀬 和親'},
  {id: 13, name: '押井 守'},
  {id: 14, name: '士郎 正宗'},
  {id: 15, name: '太田 宏樹'},
  {id: 16, name: '伊地知 大介'},
];

const searchInput = document.getElementById('searchInput');
const userList = document.getElementById('userList');

function renderUsers(filteredUsers) {
  userList.innerHTML = '';

  filteredUsers.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = user.name;
    userList.appendChild(li);
  });
}

searchInput.addEventListener('input', (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = users.filter((user) => {
    return user.name.toLowerCase().includes(keyword);
  })

  renderUsers(filtered);
});


renderUsers(users);