// 获取按钮元素
const startBtn = document.getElementById("startBtn");

// 为按钮添加点击事件监听器
startBtn.addEventListener("click", function () {
    // 模拟游戏开始
    alert("游戏开始啦！");
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", function () {
    console.log("按钮点击事件绑定成功");
    // 模拟游戏开始等逻辑
});

    // 模拟击败小兵进度增加
    const progressBar = document.getElementById("progress-bar");
    let currentValue = parseInt(progressBar.value);
    let maxValue = parseInt(progressBar.max);
    const scoreElement = document.querySelector(".score p");
    let score = parseInt(scoreElement.textContent.split(": ")[1]);

    const intervalId = setInterval(() => {
        currentValue++;
        progressBar.value = currentValue;

        if (currentValue >= maxValue) {
            clearInterval(intervalId);
            score++;
            scoreElement.textContent = `当前得分：${score}`;
        }
    }, 100);
});
