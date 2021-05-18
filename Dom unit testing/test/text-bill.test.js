var fun = textBillTotals();
describe('Text Bill', () => {
    it("should make call", ()=>{
        assert.equal(fun.doCalls_1(), 2.75);
    });
    it("should make sms", ()=>{
        assert.equal(fun.makeSmss_1(),0.75);
    })
    it('should be able to get calls totals', () => {
        fun.doCalls_1()
        fun.doCalls_1()
        fun.doCalls_1()
        fun.doCalls_1()
        assert.equal(fun.getTotalCallss_1(), 13.75);
    });
    it('should get sms total', () => {
        fun.makeSmss_1()
        fun.makeSmss_1()
        fun.makeSmss_1()
        fun.makeSmss_1()
        fun.makeSmss_1()
        assert.equal(fun.getTotalSmss_1(), 4.5);
    });
    it('should get the overall total', () => {
        fun.makeSmss_1();
        fun.makeSmss_1()
        fun.makeSmss_1()
        fun.makeSmss_1()
        fun.makeSmss_1()
        fun.makeSmss_1()
        fun.doCalls_1()
        fun.doCalls_1()
        fun.doCalls_1()
        fun.doCalls_1()
        fun.doCalls_1()
        assert.equal(fun.getTotals_1(), 36.5);
    });
    it('should get the class for overall total', () => {
        fun.makeSmss_1();
        fun.makeSmss_1()
        fun.makeSmss_1()
        fun.makeSmss_1()
        fun.makeSmss_1()
        fun.makeSmss_1()
        fun.doCalls_1()
        fun.doCalls_1()
        fun.doCalls_1()
        fun.doCalls_1()
        fun.doCalls_1()
        fun.getTotals_1()
        assert.equal(fun.getClasss_1(), "danger");
    });
});