$here = (Get-Item -Path ".\").FullName
npm run export
if(!(test-path ..\_ghp\wedding)) {
    mkdir ..\_ghp\wedding
}
Copy-Item -Path .\__sapper__\export\wedding\* -Destination ..\_ghp\wedding -Recurse -Force
Set-Location ..\_ghp\wedding
git add .
git commit -m "script-deploy"
git push
Set-Location $here
