// Array of 50 colors
const colors = [
    "#FF5733", "#33FF57", "#5733FF", "#FF33A0", "#33FFAB", "#AB33FF", "#F0F8FF", "#FAEBD7",
    "#00FFFF", "#7FFFD4", "#F0FFFF", "#F5F5DC", "#FFE4C4", "#FFDAB9", "#FF6347", "#FF4500",
    "#FF1493", "#C71585", "#DB7093", "#FF69B4", "#DC143C", "#B22222", "#FF0000", "#8B0000",
    "#FF8C00", "#FFA500", "#FFD700", "#FFFF00", "#FFFFE0", "#F0E68C", "#BDB76B", "#ADFF2F",
    "#7FFF00", "#7CFC00", "#00FF00", "#32CD32", "#98FB98", "#90EE90", "#00FA9A", "#00FF7F",
    "#3CB371", "#2E8B57", "#228B22", "#008000", "#006400", "#9ACD32", "#6B8E23", "#808000",
    "#556B2F", "#66CDAA", "#8FBC8F", "#20B2AA", "#008B8B", "#00CED1", "#40E0D0", "#48D1CC"
];

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        changeColor();
    }
});

document.addEventListener('touchstart', () => {
    changeColor();
});
