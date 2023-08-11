import path from 'path'
import { readFileSync } from 'fs'
import chalk from 'chalk'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      'Git提交信息不符合 Angular 规范!'
    )}\n\n${chalk.green('推荐使用命令 npm run cz 生成符合规范的Git提交信息')}\n`
  )
  process.exit(1)
}