function startGame() {
    // 模拟游戏开始
    alert("游戏开始啦！");

    // 模拟击败小兵进度增加
    let progressBar = document.getElementById("progress-bar");
    let currentValue = parseInt(progressBar.value);
    let maxValue = parseInt(progressBar.max);
    let scoreElement = document.querySelector(".score p");
    let score = parseInt(scoreElement.textContent.split(": ")[1]);

    let intervalId = setInterval(() => {
        currentValue++;
        progressBar.value = currentValue;

        if (currentValue >= maxValue) {
            clearInterval(intervalId);
            score++;
            scoreElement.textContent = `当前得分：${score}`;
        }
    }, 100);
}
