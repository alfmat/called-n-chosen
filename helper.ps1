Write-Output "Welcome Matt!"

Write-Output "1 to view changed files"
Write-Output "2 to commit changes"
Write-Output "3 to reset changes"


do {
    $decision = Read-Host "What would you like to do? (enter done to terminate)"
    if($decision -eq 1) {
        git status
    } elseif ($decision -eq 2) {
        $commit_msg = Read-Host "Enter a commit message"
        git add .
        git commit -m $commit_msg
        git pull --rebase origin main
        git push origin main
    } elseif ($decision -eq 3) {
        if(Read-Host "Are you sure, you want to reset your current work (y/n): " -eq "y") {
            git reset --hard
        }        
    } else {
        if ($decision -ne "done") {
            Write-Output "invalid input, try again Matt!"
        }
    }
} while ($decision -ne "done")

Write-Output "All done, thanks Matt!"
