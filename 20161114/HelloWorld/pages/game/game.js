Page({
    onReady:function(){
        var context = wx.createContext();
        context.rect(0,0,100,100);
        context.fill();

        wx.drawCanvas({
          canvasId: 'maincanvas',
          actions: context.getActions()
        })
    }
})