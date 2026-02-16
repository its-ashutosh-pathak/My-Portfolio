# List of folders/files to KEEP
$keep = @("src", "public", ".gitignore", "index.html", "package.json", "package-lock.json", "vite.config.js", "node_modules", ".vite", "cleanup.ps1")

# Get all items in the current directory
$items = Get-ChildItem -Path .

foreach ($item in $items) {
    if ($keep -notcontains $item.Name) {
        Write-Host "Removing $($item.Name)"
        Remove-Item -Path $item.FullName -Recurse -Force -ErrorAction SilentlyContinue
    }
}

Write-Host "Cleanup complete."
