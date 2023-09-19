const apiUrl = "https://jsonplaceholder.typicode.com/users";
const userListElement = document.getElementById("userList");

// Fetch users from the API
async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    return users;
  } catch (error) {
    console.error(error);
  }
}

function renderUserList(users) {
  userListElement.innerHTML = "";
  users.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.className = "user";

    const nameElement = document.createElement("span");
    nameElement.textContent = user.name;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => deleteUser(user));

    userElement.appendChild(nameElement);
    userElement.appendChild(deleteButton);

    userListElement.appendChild(userElement);
  });
}

function deleteUser(user) {
  const currentUsers = getUsersFromLocalStorage();
  const updatedUsers = currentUsers.filter((u) => u.id !== user.id);
  saveUsersToLocalStorage(updatedUsers);
  renderUserList(updatedUsers);
}

function getUsersFromLocalStorage() {
  const usersJson = localStorage.getItem("users");
  return usersJson ? JSON.parse(usersJson) : [];
}

function saveUsersToLocalStorage(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

(async () => {
  const users = await fetchUsers();
  saveUsersToLocalStorage(users);
  renderUserList(users);
})();
