# Welcome to the Crimson tech comp!

## A. Google Forms
Please fill out the following 2 Google forms: [form 1](https://forms.gle/z3Q3Bt898A6te6Aj8) and [form 2 (anonymous)](https://forms.gle/V7ixzCZssrTvPVu99).

After 2 weeks in (9/26), we will email only people who filled out the forms as to prevent spam. So, please fill them out :)

## B. Make a GitHub account
We will be communicating through GitHub. If you don't have a GitHub account, please sign up at [https://github.com/](https://github.com/) and come back.

### B0. Windows User: Get WSL!
Follow the instructions [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10) and get **Ubuntu**. Then, follow Richard's email to learn about how to setup a Windows-accessible folder in WSL. From here, use WSL instead of the command line!

### B1. Adding an SSH key.
If you don't know what an ssh key is, follow these instructions. This step is tricky! **Feel free to call RX/ZS over.**

We need to link the account you just made to your local machine. The ssh key is like the identity of a computer, and is how GitHub knows to trust your machine.

Run the command `ssh-keygen` and hit Enter a few times, leaving the files blank. Then, run `cat ~/.ssh/id_rsa.pub`. You should get a string that goes `ssh-rsa [a bunch of characters]`. Copy it.

Go to github, click on your user and go to Settings. Click on `SSH and GPG keys` and click on `New SSH key` and paste the key you got into there.

## C. Fork this repository.
Come back to [https://github.com/crimtech/crimtech-comp-f20](https://github.com/crimtech/crimtech-comp-f20). You should see a button on the upper right called "Fork". Click it! Now, you should have your personal copy of this repository.

Next, you need to **clone** this repository onto your machine. Click on the green `code` option and copy the string you have there. Then, in your terminal, type in `git clone [the string you just received]`.

If you get an error, chances are the SSH key step didn't work. **Call us over.**

**DO NOT CONTINUE UNTIL YOU HAVE DONE STEPS A-C**

We will now install 3 tools: Git, Python and pip.
1. Git, with GitHub, is how you will be submitting your assignments.
2. Python is a programming language. In the lab `Snek`, you will be programming in Python. We will revisit Python at a later point.
3. `pip` is the python package manager. You can greatly extend the power of Python with it. We will use it in `Snek`.

## D. Install Git
Open up your terminal and type in `git --version`. If you get an error, you need to install Git. Follow the instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install it.

Once you are done, put your git version into `lab0-responses.txt`.

## E. Install Python
Type in `python --version`. If you get an error, you need to install Python: follow the instructions below. Otherwise, put your python version into `lab0-responses.txt`

### E1. MacOS
If you are on MacOS, you should check out `homebrew`. The instruction for getting Python with homebrew is [here](https://docs.python-guide.org/starting/install3/osx/).

### E2. Linux
You can download python from the website, or use `sudo apt-get install python3.6`.

## F. Install `pip`
Type in `pip --version`. If you get an error, you need to install `pip`. Follow the instructions [here](https://pip.pypa.io/en/stable/installing/). Once you are done, put your pip version into `lab0-responses.txt`

**DO NOT CONTINUE UNTIL YOU HAVE DONE STEPS D-F**

## G. Making a Commit
You are now ready to submit. First, run `git status`. This will show you all the files you have changed in the directory.

Run the command `git add -A`, then `git commit -m "Submit intro lab."` You should get something that goes `[master ******] Submit intro lab...`.

At this step, Git may ask you to set your username/email. If so, follow those instructions or call us over.

## H. Push the commit
The change you just made is still living on your local machine. How do you upload them to GitHub?
Run the command `git push`. Then, go onto your github repository. You should see some changes there!

## I. Submit
There should be a button now called "pull request" or "make pull request". Click on it!

Put in a title and a description, which can be anything you want. Then, hit "open pull request" or something like that.

Once that's done, you are done! Congratulations on finishing your first lab :D
