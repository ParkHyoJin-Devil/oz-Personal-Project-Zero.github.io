const snacks = [
    {
        name: "별모양 딸기잼 토스트",
        description: "별모양으로 귀엽게 만든 딸기잼 토스트 레시피 영상입니다.",
        tags: ["#토스트", "#딸기잼", "#별모양"],
        image: "https://img.youtube.com/vi/IrcL7szdlS8/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=IrcL7szdlS8",
    },
    {
        name: "전자레인지 3분 초코케이크",
        description: "오븐 없이 전자레인지로 3분만에 만드는 폭신한 초코케이크!",
        tags: ["#전자레인지", "#초코케이크", "#간편간식"],
        image: "https://img.youtube.com/vi/KR1jhQUEjSc/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=KR1jhQUEjSc",
    },
    {
        name: "식빵 카라멜 팝콘",
        description: "식빵과 설탕으로 만드는 바삭한 카라멜 팝콘 느낌의 초간단 간식!",
        tags: ["#식빵간식", "#카라멜", "#초간단"],
        image: "https://img.youtube.com/vi/cJ6mLJXMu2M/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=cJ6mLJXMu2M",
    },
];

const snackList = document.getElementById("snack-list");

snacks.forEach((snack) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="card snack-card h-100">
        <img src="${snack.image}" class="card-img-top" alt="${snack.name}">
        <div class="card-body">
          <h5 class="card-title">${snack.name}</h5>
          <p>
            ${snack.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </p>
          <a href="${snack.link}" target="_blank" class="btn btn-outline-primary mt-2">보러가기</a>
        </div>
      </div>
    `;

    snackList.appendChild(col);
});
