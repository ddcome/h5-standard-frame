import echarts from 'echarts';

const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $echart: {
            get () {
                return {
                    // 画一条简单的线
                    instance: function (id, optionData) {
                        this.echart = echarts.init(document.getElementById(id));
                        this.echart.clear();
                        this.echart.setOption(optionData);
                        return this.echart;
                    }
                };
            }
        }
    });
};

export default {
    install
};
