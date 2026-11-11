@echo off
cd /d "%~dp0"
start "" http://localhost:8124
python -m http.server 8124 --bind 127.0.0.1
