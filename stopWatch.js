function Stopwatch(){
    let startTime,endTime,running,duration=0;
    this.start = function(){
        if(running){
            throw new Error('Already in running state')
        }
        running = true;
        startTime = new Date();
    }
    this.stop = function(){
        if(!running){
            throw new Error('Already in stop state');
        }
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
    }
    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
    Object.defineProperty(this,'Duration',{
        get:function(){
            return duration;
        }
    })
}