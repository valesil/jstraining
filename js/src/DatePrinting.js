/**
 * Display the current day and time in the following format:
 *       Today is : Friday.
 *       Current time is : 4 PM : 50 : 22
 * @author silvia valencia
 */
var printDate = function () {
    var date = new Date();

    /**
     * Get the name of the day  based onthe number
     * @param  {Int} day Number of day
     * @return {String}  The name of the day
     */
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

    /**
     * Get the hour in an specific format
     * @param  {String} hora The hour to be formatted
     * @return {String}      The formatted hour
     */
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
    //display the parameters and result
    console.log ('Date is: ' + date.toLocaleString());
    console.log ('Today is: ' + getDayOfWeek(date.getDay()));
    console.log ('Current time is: ' + getHour(date.getHours()) + ':' + date.getMinutes() + ':' + date.getSeconds());
}