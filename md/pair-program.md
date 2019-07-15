# Paired Programming
Paired programming is using two minds on one computer; two programmers working together to solve their programming 
challenges. Both programmers should be in constant communication with one another. The point of paired programming is 
to work together. As such, only one person should be writing code at a time.

When paired programming, there are two roles:
- The Driver is the person with their hands on the keyboard and mouse, and is writing the code.
- The Navigator is the person who is observing the driver and thinking about what the next move should be to help guide 
the project.

Both of these roles are crucial to the success of your pair programming projects, and should be switched out as you 
work. It's important to note that when you are working in a pair, it is of the utmost importance to communicate 
between each other. By communicating, you can limit the amount of conflicts you may have, whether they be in the 
direction of the project, or in git.

## Workflow
The workflow of paired programming is similar to the work flow we use when we program on our own. It is important to 
_push_ our work to GitHub when we're ready to switch between partners, and for the new driver to _pull_ the work from 
the previous driver.

### Single Branch
When working with a single branch in paired programming, it is important to remember to only have _**one**_ person
coding at a time, as two people coding at the same time, on the same branch, in the same document, can lead to a merge 
conflict. When working with one branch, it is important to keep the importance of the driver and navigator roles in
mind, and carry out the process of paired programming.

When the driver and navigator are ready to switch roles, the current driver will need to add and commit their work 
before pushing to GitHub. Once the work has been pushed, the new driver will need to pull the work from the repository 
to their local machine. This can be done by using the `git pull` command.

To break it down, when switching roles:
- The previous driver should run the following commands:
    - `git add filename.ext`
    - `git commit -m 'message here'`
    - `git push origin master`
    
- The previous navigator should run the following command:
    - `git pull origin master`
    
### Multiple Branches
When working on multiple branches, it will be tempting to want to work in tandem, on separate branches, to try and 
complete projects in paired programming. This is not using paired programming. When we have multiple branches, the 
principles of paired programming is the same. One driver, one navigator, one computer coding at any given time.

When the driver and navigator are ready to switch roles, it is important to, like before, add and commit your work. 
However, since we are now working with multiple branches, it is import to note the ways we can get the code from the 
previous driver.

#### Using Fetch
One way that we can retrieve work from the previous driver is to use the command `git fetch` to retrieve the branches 
that have been pushed to GitHub of the repository. In this way, we can checkout to the branch of another user and 
then create a new branch to continue our work.

To put it step by step:
- The previous driver should run the following commands:
    - `git add filename.ext`
    - `git commit -m 'message here'`
    - `git push origin branch-name`
    
- The previous navigator should run the following commands:
    - `git fetch`
    - `git checkout branch-name` (To be explicit: the branch the previous driver had been working on).
    - `git checkout -b new-branch`
    
#### Using Branch Merging
When using branch merging, it is important to note that we'll be using multiple branches that can be merged to the 
master. It is important to note the word "can," seeing as we'll have the ability to abandon work on a branch and 
start over if that is desired/needed. Once a branch is pushed to the repository on GitHub, we'll have the ability to 
merge it to the master branch. Please note that when merging to the master branch, it is important to review the 
changes between branches. Luckily, GitHub has tools to compare the changes between the branch we're attempting to 
merge, and the branch we're wanting to merge to.

In order to start a pull request, we'll first need to push our branch to GitHub, like before. However, once a branch 
has been pushed, the driver will need to navigate to the repository on GitHub. Once there, they will need to click on 
branches. The driver should now see the branches that have been pushed to the repository, and can now select to 
"New pull request" for the branch that they have pushed. Now the driver should see a page that will allow them to 
title their pull request and then allow for any additional details to be shared. Once these details have been filled 
out to a satisfactory level, the driver can click "Create pull request".

At this time the driver and navigator should switch roles. The new driver will now need to navigate to the repository 
in order to complete the pull request. On the repository there should be a tab for "Pull requests," once there, the 
new driver should be able to see all the currently pending merge requests. Seeing as we've been paired programming, 
and thus been working together, side-by-side, we should be familiar with the code in the pull request, however, we 
can compare the code within the branch by clicking on the commits associated with the merge request by clicking on 
the commit messages on the web page for the pull request. Once the code has been approved, we can click on the "Merge 
pull request" button.

Once the merge is completed, the new driver will need to return to their development environment (as a student, this 
would be IntelliJ), and checkout to the master branch if they had not already done so. Once there, the driver will 
pull the new master branch for the repository to their local machine, and then checkout to a new branch to continue 
working.

While seemingly a lot to do, we can break down these steps as follows:
- The current driver:
    - Will run the following commands:
        - `git add filename.ext`
        - `git commit -m 'message here'`
        - `git push origin branch-name`
    - Navigate to the repository on GitHub and open a pull request for their partner to approve.
- The new driver:
    - Navigate to the pull request on GitHub and merge their partner's branch into the master.
    - Will run the following commands:
        - `git checkout master` (Only if not currently on the master branch).
        - `git pull origin master`
        - `git checkout -b new-branch`