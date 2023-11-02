let comments = [];
loadComments();

document.getElementById("review-button").onclick = function () {
  let commentName = document.getElementById("product-name");
  let commentBody = document.getElementById("review-text");

  let comment = {
    name: commentName.value,
    body: commentBody.value,
    time: Math.floor(Date.now() / 1000),
  };

  commentName.value = "";
  commentBody.value = "";

  comments.push(comment);
  saveComments();
  displayProducts();
};

function saveComments() {
  localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
  if (localStorage.getItem("comments"))
    comments = JSON.parse(localStorage.getItem("comments"));
  displayProducts();
}
console.log(comments);

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

function displayProducts() {
  const existingReviews = JSON.parse(localStorage.getItem("comments")) || []; // добавил ||

  const commentField = document.getElementById("product-list");
  commentField.innerHTML = "";
  const products = [
    ...new Set(existingReviews.map((comment) => comment.name)), // изменил commentName на name
  ];

  for (const product of products) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#" class="product-link">${product}</a>`;
    commentField.appendChild(listItem);
    listItem.querySelector(".product-link").addEventListener("click", () => {
      displayReviewsForProduct(product);
    });
  }
}

function displayReviewsForProduct(commentName) {
  const existingReviews = JSON.parse(localStorage.getItem("comments")) || [];
  const reviewList = document.getElementById("comment-field");
  reviewList.innerHTML = "";

  for (const comment of existingReviews) {
    if (comment.name === commentName) {
      const listItem = document.createElement("li");
      const time = timeConverter(comment.time);
      listItem.innerHTML = `<p class="text-left small"><em>${time}</em></p>${comment.body} <button class="delete-review">Удалить</button>`;
      reviewList.appendChild(listItem);
      listItem.querySelector(".delete-review").addEventListener("click", () => {
        deleteReview(commentName, comment.body);
      });
    }
  }
}

function deleteReview(commentName, commentBody) {
  const existingReviews = JSON.parse(localStorage.getItem("comments")) || [];
  const updatedReviews = existingReviews.filter(
    (comment) => !(comment.name === commentName && comment.body === commentBody)
  );
  localStorage.setItem("comments", JSON.stringify(updatedReviews));
  displayReviewsForProduct(commentName);
  displayProducts();
  location.reload();
}
