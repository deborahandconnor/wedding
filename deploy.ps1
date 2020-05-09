npm run export
Copy-Item -Path .\__sapper__\export\wedding\* -Destination ..\_ghp\wedding -Recurse -Force
Set-Location ..\_ghp\wedding
git add .
git commit -m "script-deploy"
git push
Set-Location ..\..\cd-2020
