# Linux

* Cronjobs are effective for scheduling tasks for a later time. They are also a great way to automate tasks that need to be done regularly. I use [cronguru](https://crontab.guru/) to help me write them. It's also a great way to learn how they work. 

* List the users using `less /etc/passwd`. The first column is the username.

## Window Manager
i3wm is a good tiling window manager. It is very customizable and has a lot of features. It is also very lightweight. I use the i3-gaps version of i3wm.
It can be installed on Ubuntu from a PPA.
```
sudo add-apt-repository ppa:regolith-linux/release
sudo apt update
sudo apt install i3-gaps
``` 
Ubuntu 22.04 Jammy Jellyfish does not have a PPA for i3-gaps. It can be installed from source. 
First, install the necessary dependencies:

```
sudo apt install libxcb1-dev libxcb-keysyms1-dev libpango1.0-dev \
  libxcb-util0-dev libxcb-icccm4-dev libyajl-dev \
  libstartup-notification0-dev libxcb-randr0-dev \
  libev-dev libxcb-cursor-dev libxcb-xinerama0-dev \
  libxcb-xkb-dev libxkbcommon-dev libxkbcommon-x11-dev \
  autoconf libxcb-xrm0 libxcb-xrm-dev automake libxcb-shape0-dev
```
Next, clone the i3-gaps repository and build it:

:::caution
The [installation guide](https://gist.github.com/boreycutts/6417980039760d9d9dac0dd2148d4783) is outdated. The `autoreconf` command fails,
```
autoreconf --force --install
rm -rf build
mkdir build
cd build
../configure --prefix=/usr --sysconfdir=/etc
make
sudo make install
```
with the following error:
```
autoreconf: error: 'configure.ac' is required
-bash: ../configure: No such file or directory
make: *** No targets specified and no makefile found.  Stop.
make: *** No rule to make target 'install'.  Stop.
```
:::

Instead, use:
```
cd /tmp
git clone https://www.github.com/Airblader/i3.git i3-gaps
cd i3-gaps
git checkout gaps && git pull
sudo apt install meson asciidoc
meson -Ddocs=true -Dmans=true ../build
meson compile -C ../build
sudo meson install -C ../build
```

:::danger
RDP won't work with i3wm by default. I ended up installing ubuntu-desktop and changing the default WM from GNOME to i3wm.

:::

* I use vim for light text editing and VSCode for more complex tasks. I also use vim for editing files on the server.


