@echo off
setlocal

cd /d "%~dp0"

where python >nul 2>nul
if errorlevel 1 (
  echo Python n'est pas installe ou n'est pas dans le PATH.
  echo Telechargez-le depuis https://www.python.org/ et cochez "Add Python to PATH".
  pause
  exit /b 1
)

start "Plateforme d'entrainement" http://localhost:8000
python -m http.server 8000

endlocal
