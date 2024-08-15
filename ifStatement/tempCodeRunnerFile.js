let month = 12;
let getSeason; 

switch (month) {
    case 12:
        getSeason = "Something"
        console.log(getSeason);
    case 1:
    case 2:
        getSeason = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        getSeason = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        getSeason = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        getSeason = "Autumn";
        break;
    default:
        getSeason = "Invalid month";
        break;
}
console.log(getSeason);