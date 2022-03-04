/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

// This is an important method --required for various stub process
const { Contract } = require('fabric-contract-api');

class App extends Contract {

    //1. initLedger
    //2. writeData
    //3. readData

    //This method must be present but optional to fill it (because it is being invoked by network.sh)
    async initLedger(ctx){

        //all read/write operations are carried out by the stub method.
        //putState stores the information in (key,Value) pair
        //An await splits execution flow, allowing the caller of the async function to resume execution.
        await ctx.stub.putState("test","hello world");
        await ctx.stub.putState("key1","value1");
        return "success";
    }

    async writeData(ctx,key,value){
        await ctx.stub.putState(key,value);
        return value;
    }

    async readData(ctx,key){
        //value will be returned in ByteArray 
        var res = await ctx.stub.getState(key);
        return res.toString();
    }

}

module.exports = App;
