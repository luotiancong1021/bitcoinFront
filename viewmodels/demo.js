var app = new Vue({
    el: '#app',
    data: {
        recentBlocks:[]
    },
    COMPUTED:{
        showRecentBlock(){
            var now = Date.now();
            this.recentBlocks.forEach(block => {
                 block.showtime = parseInt((now - block.time)/1000/6);
                 block.showSizeOnDisk = block.sizeOnDisk.toLo
            });
        }
    },
    mounted(){
        console.log('view mounted')
        this,getBlockLook();
    }
})