let timerId = '';
Page({
    data : {
        percent: 0,
        timeLength:0,//进度条时长
        swipeoutToggle : false,
        actions : [
            {
                name : '选TA',
                color : '#fff',
                fontsize : '20',
                width : 100,
                background : '#ff0000'
            },
        ],
        actions2 : [
            {
                name : '喜欢',
                color : '#fff',
                fontsize : '20',
                width : 100,
                icon : 'like',
                background : '#ed3f14'
            },
            {
                name : '返回',
                width : 100,
                color : '#80848f',
                fontsize : '20',
                icon : 'undo'
            }
        ]
    },
    onShow:function(){
        const vm = this;
        const sumLength = 10;
        timerId = setInterval(() => {
            if(vm.data.timeLength>=sumLength){
                clearInterval(timerId);
            }else{
                vm.setData({
                    percent:vm.data.percent + 100/sumLength,
                    timeLength:vm.data.timeLength + 1
                })
            } 
        },1000)
    },
    onUnload:function(){
        clearInterval(timerId);
    },
    swipeoutClickd:function(event){
        console.log('点击了',event);
    },
    testCatch(){
        console.log('阻止冒泡')
    },
    testCapture(){
        console.log('监听捕获')
    }
});