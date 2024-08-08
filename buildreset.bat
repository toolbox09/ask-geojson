@echo off
if exist "dist" (
    rmdir /s /q "dist"
) else (
    echo Folder does not exist.
)