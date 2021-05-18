
describe("Settings Bill", ()=>{
    it("Should set the call cost",()=>{
        var start = billsettings();
        assert.equal(start.setCallCost(2.5), 2.5);
    })
    it("Should set the sms cost",()=>{
        var start = billsettings();
        assert.equal(start.setSmsCost(0.75), 0.75);
    })
    it("Should set the warning level",()=>{
        var start = billsettings();
        assert.equal(start.setLevel(10), 10);
    })
    
    it("Should set the danger level",()=>{
        var start = billsettings();
        assert.equal(start.setDanger(20), 20);
    })
    //get the data
    it("Should get the call cost",()=>{
        var start = billsettings()
        start.setCallCost(2.5)
        assert.equal(start.getCallCost(), 2.5);
    })
    it("Should get the sms cost",()=>{
        var start = billsettings();
        start.setSmsCost(0.75)
        assert.equal(start.getSmsCost(), 0.75);
    })
    it("Should get the warning level",()=>{
        var start = billsettings();
        start.setLevel(10)
        assert.equal(start.getLevel(), 10);
    })
    it("Should get the danger level",()=>{
        var start = billsettings();
        start.setDanger(20)
        assert.equal(start.getDanger(), 20);
    })
    //calculating
    it("Should get the Total call cost",()=>{
        var start = billsettings()
        start.setCallCost(2.5)
        start.getCallCost()
        start.getCallTotals()
        start.getCallTotals()
        start.getCallTotals()
        start.getCallTotals()
        assert.equal(start.getCallTotals(), 12.5);
    })
    it("Should get the Total sms cost",()=>{
        var start = billsettings()
        start.setSmsCost(0.75)
        start.getSmsCost()
        start.getSmsTotals()
        start.getSmsTotals()
        start.getSmsTotals()
        start.getSmsTotals()
        assert.equal(start.getSmsTotals(), 3.75);
    })
    it('should get the overall Total', () => {
        var start = billsettings()
        start.setLevel(10)
        start.setDanger(20)
        start.setCallCost(2.5)
        start.setSmsCost(0.75)
        start.getSmsCost()
        start.getSmsTotals()
        start.getSmsTotals()
        start.getSmsTotals()
        start.getSmsTotals()
        start.getCallCost()
        start.getCallTotals()
        start.getCallTotals()
        start.getCallTotals()
        start.getCallTotals()
        start.getCallCost()
        start.getCallTotals()
        start.getCallTotals()
        start.getCallTotals()
        start.getCallTotals()
        assert.equal(start.getOverallT(), 23);
    });
    it('should get the class for overall total', () => {
        var start = billsettings()
        start.setLevel(10)
        start.setDanger(20)
        start.setCallCost(2.5)
        start.setSmsCost(0.75)
        start.getSmsCost()
        start.getSmsTotals()
        start.getSmsTotals()
        start.getSmsTotals()
        start.getSmsTotals()
        start.getCallCost()
        start.getCallTotals()
        start.getCallTotals()
        start.getCallTotals()
        start.getCallTotals()
        start.getCallCost()
        start.getCallTotals()
        start.getCallTotals()
        start.getCallTotals()
        start.getCallTotals()
        assert.equal(start.getClass(), "danger");
    });
})