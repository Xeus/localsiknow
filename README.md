# Locals I Know

A test app for recording the names of people I meet out and about in the East Village so that I can remember their names when I run into them!

Built as a way to play with Docker and Meteor.

## Install

    sudo apt-get update
    sudo apt-get install docker.io
    sudo ln -sf /usr/bin/docker.io /usr/local/bin/docker
    sudo sed -i '$acomplete -F _docker docker' /etc/bash_completion.d/docker.io

Copy `Dockerfile` from the repo into your desired dir.

    sudo docker build -no-cache -rm=true --tag="localsiknow" ./
    sudo docker run -p 3000:3000 -d localsiknow

Then connect to `http://YOUR_SITE_IP:3000/` and it should work, assuming port 3000 is available to you.

## Questions

* I'm guessing ideally the Dockerfile is in another repo with the rest of the recipes needed for devops.

## To-Do

* Run as another user besides root
* Add files from outside instead of git clone inside Dockerfile?
* Add accounts/login for different users
* Check caching on git clone
