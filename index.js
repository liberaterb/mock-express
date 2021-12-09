const mockjs = require('mockjs')

const app = require('express')()

app.get('/api',function(req,res) {
    res.json(mockjs.mock({
        name:'@cname',
        address: '@county(true)'
    }))
})

app.listen(5140,()=>{
    console.log('start in 5140');
})