import { platform, release, arch, cpus, uptime } from 'node:os'

console.log(platform())
console.log('__________________________')
console.log(release())
console.log('__________________________')
console.log(arch())
console.log('__________________________')
console.log(cpus())
console.log('__________________________')
console.log(uptime() /60 /60)