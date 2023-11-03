

let inputPrice = document.querySelector('.price-input');//買入股票價格
let inputAmt = document.querySelector('.amount-input');//買入股票數量

//當股票價格及單價有異動，重新進行運算
inputAmt.addEventListener('change',()=>{
calcBuy();
});
inputPrice.addEventListener('change',()=>{
calcBuy();
})

let outputPrice = document.querySelector('.price-output');//賣出股票價格
let outputAmt = document.querySelector('.amount-output');//賣出股票數量
//當股票價格及單價有異動，重新進行運算
outputAmt.addEventListener('change',()=>{
calcSell();
});
outputPrice.addEventListener('change',()=>{
calcSell();
})

//計算買入價格
function calcBuy(){
    let costPrice = document.querySelector('.cost-price');//買入成本價格
    let inputPrice = document.querySelector('.price-input').value;//買入股票價格
    let inputAmt = document.querySelector('.amount-input').value;//買入股票數量

    let perPrice = inputPrice * inputAmt * 1000; //單張的價格(價格*張數*1000股)
    // console.log(`單張價格 = ${perPrice}`);
    
    let firstTotal = perPrice + (perPrice * 0.001425 * 0.6) ;//計算買入加上手續費、證券行折扣的總費用
    costPrice.innerText = firstTotal.toFixed(0);
    // console.log(`實際付款價格 = ${firstTotal}`);
}
//計算賣出價格
function calcSell(){
    let sellPrice = document.querySelector('.sell-price');
    let outputPrice = document.querySelector('.price-output').value;
    let outputAmt = document.querySelector('.amount-output').value;

    let curPrice = outputPrice * outputAmt * 1000;//賣出單張價格(價格*數量*1000股)
    // console.log(`單張價格 = ${curPrice}`);
    let secondTotal = curPrice + (curPrice * 0.001425 * 0.6) + (curPrice * 0.003);//賣出時加上交易稅0.03%

    sellPrice.innerText = secondTotal.toFixed(0);
    // console.log(`實際收回價格 = ${secondTotal}`);
};

let endBtn = document.querySelector('.calc-btn');

//結算按鈕，計算淨賺值
endBtn.addEventListener('click',()=>{
    let result = document.querySelector('.result');
    let costPrice = document.querySelector('.cost-price').innerText;
    let sellPrice = document.querySelector('.sell-price').innerText;
    
    let totalPrice = sellPrice - costPrice;
    result.innerText = totalPrice;
});





// btn.addEventListener('click', ()=>{
// let costPrice = document.querySelector('.cost-price');//買入成本價格
// let inputPrice = document.querySelector('.price-input').value;//買入股票價格
// let inputAmt = document.querySelector('.amount-input').value;//買入股票數量

//     let perPrice = inputPrice * inputAmt * 1000; //單張的價格(價格*張數*1000股)
//     console.log(`單張價格 = ${perPrice}`);
    
//     let firstTotal = perPrice + (perPrice * 0.001425 * 0.6) ;//計算買入加上手續費、證券行折扣的總費用
//     costPrice.innerText = firstTotal.toFixed(0);
//     console.log(`實際付款價格 = ${firstTotal}`);
// })









