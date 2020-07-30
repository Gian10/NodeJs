// middleware pattern( chain of resposibility) 

const passo1 = (ctx, next) =>{
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next)=>{
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'



// ...middleware = operador rest
const execute = (ctx, ...middleware) =>{
    const execPasso = indice =>{
        middleware && indice < middleware.length && middleware[indice](ctx, ()=> execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
execute(ctx, passo1, passo2, passo3)
console.log(ctx)

