Page({
    data:{
        count:0
    },

    onReady:function(){

        var index = 0;
        setInterval(()=>{
            this.setData({
                count:index
            });
            index++;
        },1000);
    }
});