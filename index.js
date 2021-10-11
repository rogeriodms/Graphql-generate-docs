const fs = require('fs')

async function ExplicationQuery(splits1) {
    var html = '';
    var init;
    var final;
    splits1.forEach((text1,index) => {
        if(text1 == " --\r\n" || text1 == " -- \r\n"){
            if(!init){
                init= index
            } else {
                final = index
            }
        }
    })
    splits1.forEach((text1,index) => {
        if(index > init && index < final) {
            html = html + `${text1}`
        }
    })
    return html
}

async function ExplicationResponseQuery(splits1) {
    var html = '';
    var init;
    var final;
    splits1.forEach((text1,index) => {
        if(text1 == " **\r\n" || text1 == " ** \r\n"){
            if(!init){
                init= index
            } else {
                final = index
            }
        }
    })
    splits1.forEach((text1,index) => {
        if(index > init && index < final) {
            html = html + `${text1}`
        }
    })
    return html
}
async function ExemploQuery(splits1) {
    var html = '';
    var init;
    var final;
    splits1.forEach((text1,index) => {
        if(text1 == " ++\r\n" || text1 == " ++ \r\n"){
            if(!init){
                init= index
            } else {
                final = index
            }
        }
    })
    splits1.forEach((text1,index) => {
        if(index > init && index < final) {
            html = html + `${text1}`
        }
    })
    return html
}
async function Read() {
    const teste = fs.readFileSync('text.gql')
    const splits1 = teste.toString().split('#')
    const ExplicationQuerys = await ExplicationQuery(splits1)
    const ExplicationResponseQuerys =  await ExplicationResponseQuery(splits1)
    const ExemploQuerys = await ExemploQuery(splits1)
    console.log(ExplicationQuerys,ExplicationResponseQuerys, ExemploQuerys);
}

Read()
