<template>
    <div>
        <div class="dashboard" v-if="isshow">
            <button @click="toBar">柱状图</button>
            <button @click="toLine">折线图</button>
        </div>
        <div class="out" @mousedown="adjust"  v-bind:style="{ width: width , height: height}">
            <div class="in">
                <div id="main"  v-bind:style="{ width: mainWidth , height: mainHeight}"></div>
            </div>
        </div>
        <button @click="changeshow" class="show">{{message}}</button>
    </div>
</template>
<script>
  import echarts from 'echarts'
    export default {
        name: 'charts',
        data () {
            return {
                isshow:true,
                charts: '',
                opinion:['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日'],
                opinionData:[335,310,234,135,154,151,358,480,158,548,348,748,335,310,234,135,154,151,358,480,158,548,348,748,335,310,234,135,154,151],
                type: 'bar',
                height:'400px',
                width:'',
                mainHeight:'400px',
                mainWidth:'1200px'
            }
        },
        computed: {
            message: function () {
                return this.isshow?'收起':'展开'
            },
        },
        methods:{
            drawPie(id){
                this.charts = echarts.init(document.getElementById(id))
                this.charts.setOption({
                    title: {
                        text: '公司日收入图',
                        subtext: '数据来自个人虚构',
                        x: 'center',
                        align: 'right'
                    },
                    xAxis: {
                        type: 'category',
                        data: this.opinion
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: this.opinionData,
                        type: this.type
                    }]
               })
            },
            toBar(){
                this.type='bar';
                this.drawPie('main')
            },
            toLine(){
                this.type='line';
                this.drawPie('main')
            },
            changeshow(){
                this.isshow=!this.isshow
                this.width=this.isshow?document.body.scrollWidth-230+'px':'100%'
                if(!this.isshow){
                    this.charts.resize({
                        width:document.body.scrollWidth
                    })
                }else{
                    this.charts.resize({
                        width:document.body.scrollWidth-230+'px'
                    }) 
                }
            },
            adjust(ev) {
                let a = ev.target
                if(a.className==='out'){
                    var _this = this
                    document.onmousemove=function(ev){
                        if(_this.isshow===true&&ev.clientX+202>document.body.scrollWidth){
                            _this.width=document.body.scrollWidth-212+'px'
                        }else{
                            _this.width=ev.clientX-15+'px'
                            if(_this.isshow===true){
                                _this.charts.resize({
                                    width:(document.body.scrollWidth-223)*4-ev.clientX*3+'px'
                                })
                            }else{
                                _this.charts.resize({
                                    width:document.body.scrollWidth*4-ev.clientX*3+'px'
                                })
                            }
                        }
                        _this.height=ev.clientY-70+'px'
                        if(ev.clientY-70>400)
                        _this.charts.resize({
                            height:_this.height
                        }) 
                    }
                    document.onmouseup=function(){
                        document.onmousemove=null;
                        document.onmouseup=null;
                    }
                }
            }
        },
        mounted(){
            this.$nextTick(function() {
                this.drawPie('main')
                this.charts.resize({
                    width:document.body.scrollWidth-223+'px'
                }) 
            })
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .in{
        overflow: scroll;
        width: 100%;
        height: 100%;
    }
    .out{
        border: 5px solid #aaa;
        margin-right: 202px;
        overflow: hidden;
    }
    .out:hover{
        cursor: s-resize;
    }

    .in:hover{
        cursor: default;         
    }
    .dashboard{
        width: 200px;
        height: 410px;
        float: right;
        background: #ddd;
    }
    .show{
        position: fixed;
        top: 20px;
        right: 0;
    }
</style>