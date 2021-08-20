
//sleep hours per each day
const getSleepHours= day =>{
  day=day.toLowerCase();
  switch (day){
    case 'monday':
    return 6;
    break;
    case 'tuesday':
    return 5;
    break;
    case 'wednesday':
    return 7;
    break;
    case 'thursday':
    return 4;
    break;
    case 'friday':
    return 5;
    break;
    case 'saturday':
    return 9;
    break;
    case 'sunday':
    return 8;
    break;
    default :
    return 'Error!';
    break
  }
};

//console.log(getSleepHours('tuesday'));
//total sleep hours for the last week
function getActualSleepHours(){
  let monday=getSleepHours('Monday');
  let tuesday=getSleepHours('Tuesday');
  let wednesday=getSleepHours('Wednesday');
  let thursday=getSleepHours('thursday');
  let friday=getSleepHours('friday');
  let saturday=getSleepHours('saturday');
  let sunday=getSleepHours('sunday');
  let totalSleep;
  totalSleep=monday + tuesday+wednesday+thursday+friday+saturday+sunday;
  return totalSleep;
};

//console.log(getActualSleepHours());

//ideal sleep per week
const getIdealSleepHours=idealHours=> idealHours*7;


//console.log('ideal hours of sleep :'+getIdealSleepHours(9));
//calculate sleep debt
const calculateSleepDebt =(idealHours) =>{
  let actualSleepHours=getActualSleepHours();
  let idealSleepHours=getIdealSleepHours(idealHours);

  if(actualSleepHours===idealSleepHours){
    return `You got ${actualSleepHours} hours of sleep.Perfect!`;
  }else if(actualSleepHours<idealSleepHours){
    return 'You got '+ (idealSleepHours - actualSleepHours) +' hour(s) of sleep less than you need. You need to get some rest!';
  }else{
    return (`You got ${actualSleepHours-idealSleepHours} hour(s) of sleep more than u need. You are sleeping too much`);
  }
} ;

console.log(calculateSleepDebt(8));


