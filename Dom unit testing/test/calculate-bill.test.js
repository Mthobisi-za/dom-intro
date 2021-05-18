var data = "call, sms, call, call, call, sms, sms, sms"
describe('Calculate bill', () => {
    it("should be able to return string", ()=>{
        var cal = calculate().getString(data)
        assert.equal(cal, "call, sms, call, call, call, sms, sms, sms");
    });
    it('Should be able to split the string', () => {
        var cal = calculate();
        cal.getString(data)
        assert.deepEqual(cal.splitting(), ["call", "sms", "call", "call", "call", "sms", "sms", "sms"]);
    });
    it('should be able to get the total for sms', () => {
        var cal = calculate();
        cal.getString(data);
        cal.splitting();
        cal.calculateCost();
        assert.equal(cal.getSmsTotal(), 3.00);
    });
    it('should be able to get the calls total', () => {
        var cal = calculate();
        cal.getString(data);
        cal.splitting();
        cal.calculateCost();
        cal.getSmsTotal();
        assert.equal(cal.getCallTotal(), 11.00);
    });
    it('should be able to get the overall total', () => {
        var cal = calculate();
        cal.getString(data);
        cal.splitting();
        cal.calculateCost();
        cal.getSmsTotal();
        cal.getCallTotal();
        assert.equal(cal.getOverallTotall(), 14.00);
    });
    it('should be able to get the class level', () => {
        var cal = calculate();
        cal.getString(data);
        cal.splitting();
        cal.calculateCost();
        cal.getSmsTotal();
        cal.getCallTotal();
        cal.getOverallTotall()
        assert.equal(cal.getClass(), "black");
    });
});