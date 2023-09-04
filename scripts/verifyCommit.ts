import { resolve } from 'node:path'
import { readFileSync } from 'fs'
import pc from 'picocolors'

const msgPath = resolve('.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${pc.bgRed(pc.white(' ERROR '))} ${pc.red(
      'Git提交信息不符合 Angular 规范!'
    )}\n\n${pc.green('推荐使用命令 npm run cz 生成符合规范的Git提交信息')}\n`
  )
  process.exit(1)
}