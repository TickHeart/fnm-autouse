import path from 'path'
import fse from 'fs-extra'
import { execaCommandSync } from 'execa'
function main() {
  const isHave = fse.pathExistsSync(path.resolve(process.cwd(), '.node-version'))
  const defaultCmd = 'fnm use default'
  const useCmd = 'fnm use'
  execaCommandSync(isHave ? useCmd : defaultCmd, {
    stdio: 'inherit',
    encoding: 'utf-8',
  })
}
main()
