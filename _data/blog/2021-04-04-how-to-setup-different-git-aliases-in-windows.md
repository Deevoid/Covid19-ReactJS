---
template: BlogPost
path: /setup-different-git-aliases-windows
date: 2021-04-04T11:44:01.108Z
title: How to setup different git aliases in windows
thumbnail: /assets/post2_1.jpg
---
# How to setup different git aliases (github or gitlab) in windows.

* open up your terminal in root level
* `enter filename in which you want to save you key. (Recommended: append you company name after id_rsa_company and copy the full file path`
* `open ssh config and create a new host for the new git account of your company`

  ```
  #CD-webapp
  Host cd-webapp
    HostName gitlab.com
    User git
    IdentityFile ~/.ssh/webapp
  ```
* use this host name when you pull from your new account
* set user name and email in local config of your repo

  git config --local user.name 'dev'

  git config --local user.email 'dev@gmail.com'
* Now you are all setup to push and pull from your new account
