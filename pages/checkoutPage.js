import { expect } from "@playwright/test";
import CommonAction from "../utils/commonActions.js";


export default class CheckoutPage{
    constructor(Page){
        this.action = new CommonAction(Page)
    }






    //Get Total Before Tax
    async getTotal(){
        return await this.action.getText(this.locators.GET_TOTAL_BEFORE_TAX)
    }

    async assertTotal(expectedTotal){
        const actualTotal = await this.getTotal()
        expect(actualTotal).toContain(expectedTotal)
    }

    //Get Tax Value
    async getTax(){
        return await this.action.getText(this.locators.GET_TAX_VALUE)
    }

    async assertTax(expectedTax){
        const actualTax = await this.getTax()
        expect(actualTax).toContain(expectedTax)
    }


    //Get Total with Tax
    async getTotalWithTax(){
        return await this.action.getText('.summary_total_label')
    }

    async assertTotalWithTax(expectedTotalwithTax){
        const actualTotalWithTax = await this.getTotalWithTax()
        expect(actualTotalWithTax).toContain(expectedTotalwithTax)
    }


    // //Get Order Complete
    // async getSuccessMessage(){
    //     return await this.action.getText(this.locators.GET_OERDER_COMPLETE_MESSAGE)
    // }

    // async assertSuccess(expectedCompleteMessage){
    //     const actualCompleteMessage = await this.getSuccessMessage()
    //     expect(actualCompleteMessage).toContain(expectedCompleteMessage)
    // }
}