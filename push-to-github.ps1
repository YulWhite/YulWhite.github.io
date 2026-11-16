# 把 Astro 站点推到 GitHub
# 用法：在资源管理器里右键这个文件 -> “使用 PowerShell 运行”
# 前提：GitHub 上已经建好 YulWhite.github.io 这个空仓库

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "== 检查仓库 ==" -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin https://github.com/YulWhite/YulWhite.github.io.git

Write-Host "== 推送 ==" -ForegroundColor Cyan
git push -u origin main

Write-Host ""
Write-Host "推送完成。接下来去 GitHub 仓库：" -ForegroundColor Green
Write-Host "Settings -> Pages -> Source 选 GitHub Actions"
Write-Host "等 Actions 跑完，访问 https://yulwhite.github.io"
Read-Host "按回车关闭"
