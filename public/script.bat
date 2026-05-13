@echo off
mkdir webp

for %%i in (*.jpg *.jpeg *.png *.bmp) do (
    ffmpeg -i "%%i" -c:v libwebp -quality 95 -compression_level 6 -preset picture "webp/%%~ni.webp"
)

pause