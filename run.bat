@echo off
cd /d "%~dp0"
echo Installing dependencies if needed...
call npm install
echo.
echo Starting React dev server...
echo Open your browser at:  http://localhost:5173
echo Press Ctrl+C to stop.
echo.
call npm run dev
pause
