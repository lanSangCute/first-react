import {add} from './math'

console.log(add(3,5))

import('./math').then(math=>{
    console.log(math)
    console.log(math.add(3,5))
})
