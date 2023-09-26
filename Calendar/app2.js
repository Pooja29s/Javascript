const monthE1=document.getElementById("month");
const dayNameE1=document.getElementById("day");
const dayNumE1=document.getElementById("day-number");
const yearE1=document.getElementById("year");

const date =new Date();
const month =date.getMonth();
monthE1.innerHTML=date.toLocaleDateString("en",{
    month:"long",
});
dayNameE1.innerHTML=date.toLocaleDateString("en",{
    weekday:"long"
});
dayNumE1.innerHTML=date.getDate();
yearE1.innerHTML=date.getFullYear();
