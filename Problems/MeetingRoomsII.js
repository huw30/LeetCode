/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    var schedule = {};
    var numsOfMeetings = intervals.length;
    
    intervals.sort(function(a,b) {
       return a.start - b.start; 
    });
    var s = 0;
    while (intervals.length) {
        // Get the top meeting
        var meeting = intervals.shift();
        schedule[s] = 1;
        
        var followingMeetings = findNextMinStartMeeting(intervals, meeting.end);
        
        schedule[s] += followingMeetings.length;
        s++;
    }

    return Object.keys(schedule).length;
};

var findNextMinStartMeeting = function(arr, endTime) {
    var meetings = [];
    var i = 0;
    while (arr.length > 0 && i < arr.length) {
    	//find all following meetings
        if (arr[i].start >= endTime) {
            meetings.push(arr[i]);
            endTime = arr[i].end;
            // remove the following meetings
            arr.splice(i, 1);
            i = 0;
            continue;
        }
        i++;
    }
 
    return meetings;
};

