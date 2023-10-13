const sec=3665;
const hour=Math.round(sec / 3600);
const minute=Math.round((sec % 3600)/60);
const second=(sec % 3600) % 60;

console.log(hour, " ч " , minute ," мин ", second ," сек ");