import './config/module-alias'

import { Example } from '@/domain/use-cases/example'

const e = new Example()
console.log(e.print('Developer'))
console.log(e.print())
