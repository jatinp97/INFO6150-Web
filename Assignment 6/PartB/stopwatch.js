$(document).ready(()=>{
    var execution = 0,
      intervalSet = null,
      startTime = null,
      pauseTime = null,
      pauseDuration = 0;
  
    $("#start-pause").on("click", start);
    $("#reset").on("click", reset);
  
    function start() {
      if (execution) {
        intervalClear(intervalSet);
        pauseTime = new Date();
        execution = 0;
        $("#start-pause").text("START");
      } else {
        if (pauseTime === null) {
          startTime = new Date();
          intervalSet = setInterval(count, 10);
          execution = 1;
          $("#start-pause").text("PAUSE");
        } else {
          pauseDuration += new Date() - pauseTime;
          intervalSet = setInterval(count, 10);
          execution = 1;
          $("#start-pause").text("PAUSE");
        }
      }
    }
  
    function reset() {
      intervalClear(intervalSet);
      pauseDuration = 0;
      startTime = null;
      pauseTime = null;
      execution = 0;
      $("#stopwatch").text("00:00:00");
      $("#start-pause").text("START");
    }
  
    function count() {
      var elapsedTime = new Date(new Date() - startTime - pauseDuration);
      var hr = elapsedTime.getUTCHours(),
        min = elapsedTime.getUTCMinutes(),
        sec = elapsedTime.getUTCSeconds(),
        ms = elapsedTime.getUTCMilliseconds();
  
      $("#stopwatch").text(
        handleZeros(hr, 2) + ":" + handleZeros(min, 2) + ":" + handleZeros(sec, 2)
      );
      console.log(handleZeros(ms, 3));
    }
  
    function handleZeros(value, digit) {
      var zeroDummy = "";
      for (i = 0; i < digit; i++) {
        zeroDummy += "0";
        return (zeroDummy + value).slice(-digit);
      }
    }
  });
  