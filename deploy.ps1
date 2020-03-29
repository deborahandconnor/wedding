npm run export
Copy-Item -Path .\__sapper__\export\connoranddeborah\* -Destination ..\_ghp\connoranddeborah -Recurse -Force
Set-Location ..\_ghp\connoranddeborah
git add .
git commit -m "script-deploy"
git push
Set-Location ..\..\cd-2020
