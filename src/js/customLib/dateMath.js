export  default class dateMath {
    static returnRemainingDateTime(obj) {
      // var tempTimeout = obj.timeout;
      // if (!tempTimeout[0]) {
      //   tempTimeout.push(setTimeout(() => {
      //      obj.tThis.setState({timeout: []});
      //   }, 1000));
      // }
      if (obj.endDate !== '') {
        var oneSecond = 1000;
        var oneMinute = 60 * oneSecond;
        var oneHour = 60 * oneMinute;
        var oneDay = 24 * oneHour; // hours*minutes*seconds*milliseconds
        var oneWeek = 7 * oneDay;
        var oneMonth = 4 * oneWeek;
        var oneYear = 12 * oneMonth;
        var endDate = new Date(obj.endDate);
        const localDate = new Date();
        const localTimeMiliseconds = localDate.getTime();
        
  
        //  localTimeSeconds secundele trecute din 1 jan 1970 pana la ora locala (asta face .getTime() de data locala
        // obtinuta cu newDate() )
        var localOffset = (localDate.getTimezoneOffset()) * oneMinute;
        
        var utc = localTimeMiliseconds + localOffset;
        var timezoneOffset = obj.timezoneOffset;
        let hourToMiliseconds = obj.endHour * oneHour;
        let minutesToMiliseconds = obj.endMinute * oneMinute;
        let date = new Date(obj.endDate);
        console.log(date);
        
        
        var endTimeMiliseconds = date.getTime() + hourToMiliseconds + minutesToMiliseconds;
  
        // timezoneDateSeconds  timezone-ul ales in secunde (se inmulteste cu 3600000
        // pentru ca 1000 millseconds = 1 second, and 1 hour = 3600  seconds)
        // Therefore, converting hours to milliseconds involves multiplying by 3600 * 1000 = 3600000.
        var nowTimeMiliseconds = utc + parseInt(timezoneOffset);
  
        const timeToCount = endTimeMiliseconds - nowTimeMiliseconds;
  
        const daysToCount = Math.floor(timeToCount / oneDay);
  
        var milisecLeftWithoutDays = timeToCount - daysToCount * oneDay;
  
        const hoursToCount = Math.floor(milisecLeftWithoutDays / oneHour);
  
        var milisecLeftWithoutHours = milisecLeftWithoutDays - hoursToCount * oneHour;
  
        const minutesToCount = Math.floor(milisecLeftWithoutHours / oneMinute);
  
        var milisecLeftWithoutMinutes = milisecLeftWithoutHours - minutesToCount * oneMinute;
        const secondsToCount = Math.floor(milisecLeftWithoutMinutes / 1000);
  
        var onlyHMS_Hours = Math.floor(timeToCount / oneHour);
        var onlyHMSNoHours = timeToCount - onlyHMS_Hours * oneHour;
        var onlyHMS_Minutes = Math.floor(onlyHMSNoHours / oneMinute);
        var onlyHMSNoHM = onlyHMSNoHours - onlyHMS_Minutes * oneMinute;
        var onlyHMS_Seconds = Math.floor(onlyHMSNoHM / oneSecond);
  
        var onlyMS_Min = Math.floor(timeToCount / oneMinute);
        var onlyMSNoMin = timeToCount - onlyMS_Min * oneMinute;
        var onlyMS_Sec = Math.floor(onlyMSNoMin / oneSecond);
        var onlySeconds = Math.floor(timeToCount / oneSecond);
  
        var YearsMWDHMS = Math.floor(timeToCount / oneYear);
        var timeWithoutY = timeToCount - YearsMWDHMS * oneYear;
  
        var MonthsYWDHMS = Math.floor(timeWithoutY / oneMonth);
        var timeWithoutM = timeWithoutY - MonthsYWDHMS * oneMonth;
  
        var WeeksYMDHMS = Math.floor(timeWithoutM / oneWeek);
        var timeWithoutW = timeWithoutM - WeeksYMDHMS * oneWeek;
  
        var DaysYMWHMS = Math.floor(timeWithoutW / oneDay);
        var timeWithoutD = timeWithoutW - DaysYMWHMS * oneDay;
  
        var HoursYMWDMS = Math.floor(timeWithoutD / oneHour);
        var timeWithoutH = timeWithoutD - HoursYMWDMS * oneHour;
  
        var MinutesYMWDHS = Math.floor(timeWithoutH / oneMinute);
        var timeWithoutM = timeWithoutH - MinutesYMWDHS * oneMinute;
        var SecondsYMWDHM = Math.floor(timeWithoutM / oneSecond);
  
        var weeksOnly = Math.floor(timeToCount / oneWeek);
        var yearsOnly = Math.floor(timeToCount / oneYear);
        var monthsOnly = Math.floor(timeToCount / oneMonth);
        var countDownAllValues = {};
  
        if (endTimeMiliseconds < nowTimeMiliseconds) {
  
          return false;
        } else {
          countDownAllValues = {
            Years: YearsMWDHMS,
            Months: MonthsYWDHMS,
            Weeks: WeeksYMDHMS,
            Days: DaysYMWHMS,
            Hours: HoursYMWDMS,
            Minutes: MinutesYMWDHS,
            Seconds: SecondsYMWDHM,
          };
        };
        return countDownAllValues;
      };
    }
  }