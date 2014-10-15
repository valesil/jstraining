var printDate = function () {
    var date = new Date();

    var getDayOfWeek = function (day) {
        var dayOfWeek = '';
        switch (day) {
            case 0:
                dayOfWeek = 'Sunday';
                break;
            case 1:
                 dayOfWeek = 'Monday';
                 break;
            case 2:
                 dayOfWeek = 'Tuesday';
                 break;
            case 3:
                 dayOfWeek = 'Wednesday';
                 break;
            case 4:
                 dayOfWeek = 'Thursday';
                 break;
            case 5:
                dayOfWeek = 'Friday';
                break;
            case 6:
                dayOfWeek = 'Saturday';
                break;
        }
        return dayOfWeek;
    };

    var getHour = function (hora) {
        var newHora = '';
        if (hora > 12)
        {
            newHora = (hora - 12) + 'PM';
        }
        else
        {
            newHora = hora + 'AM';
        }
        return newHora;
    };

    //date.setHours(16);
    console.log ('Date is: ' + date.toLocaleString());
    console.log ('Today is: ' + getDayOfWeek(date.getDay()));
    console.log ('Current time is: ' + getHour(date.getHours()) + ':' + date.getMinutes() + ':' + date.getSeconds());
}