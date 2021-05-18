var sms = "sms";
var call = "call";
describe('Radio Bill', () => {
    it("should make a call button", ()=>{
        var run = textBillTotal();
        assert.equal(run.doCall(call), 2.75);
    })
    it("Should be able to return multiple calls totals", ()=>{
        var run = textBillTotal()
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        assert.equal(run.doCall(call), 13.75)
    })
    it("should make an sms button", ()=>{
        var run = textBillTotal();
        assert.equal(run.doSms(sms), 0.75);
    })
    it("Should be able to return multiple sms's totals", ()=>{
        var run = textBillTotal()
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        assert.equal(run.doSms(sms), 3.75)
    })
    it('should get sms totals', () => {
        var run = textBillTotal()
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        assert.equal(run.getSmsTotal(), 9);
    });
    it('should get the calls totals', () => {
        var run = textBillTotal()
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        assert.equal(run.getCallsTotal(), 24.75);
    });
    it('Should be able to get overall total', () => {
        var run = textBillTotal()
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        assert.equal(run.overallTotal(), 33.75);
    });
    it('Should get the warning level class for the overall total', () => {
       var run = textBillTotal()
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doCall(call);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        run.doSms(sms);
        assert.equal(run.getClass(), "warning");
    });
});