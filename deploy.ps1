npm run export
Copy-Item -Path .\__sapper__\export\deborahandconnor\* -Destination ..\_ghp\deborahandconnor -Recurse -Force
Set-Location ..\_ghp\deborahandconnor
git add .
git commit -m "script-deploy"
git push
Set-Location ..\..\cd-2020
