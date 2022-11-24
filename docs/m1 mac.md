# Exploring m1 mac

## Installing ubuntu on m1 mac
Currently, I am using [multipass](https://multipass.run/install) to install ubuntu 20.04 on my m1 mac mini. 

### Connecting to ubuntu instance through SSH instance of multipass shell
This requires generating a SSH keypair on my host system and then copying the public key to the ubuntu instance. 


### Mounting the home directory to the ubuntu instance
This is done using `multipass mount $HOME docker` command. This mounts the home directory to the home directory in the ubuntu instance.

#### Minor bug with mounting
On macOS Monterey, the `mount` command does not give the correct permissions. Go to `System Preferences` -> `Security & Privacy` -> `Privacy` -> `Full Disk Access` and add `multipassd` to the list of applications. This should fix the issue.

### Accessing GUI using RDP
1. Install `xrdp` and `ubuntu-desktop` on the ubuntu instance using `sudo apt install ubuntu-desktop xrdp`.
2. Set password for the default user using `sudo passwd ubuntu`.
3. Get the IP address from `multipass list`.
4. Access the GUI using Microsoft Remote Desktop app on macOS.


## Installing python on m1 mac

I use Anaconda for virtual environments, which provides the `conda` command to install python packages.
Due to the ARM architecture of m1 mac, Tensorflow support has been buggy for a while. It would give the following error:
```
Illegal instruction: 4 (SIGKILL)
```
when installing `tensorflow` using `conda install tensorflow`.
### Installing Tensorflow on m1 mac

I tried various methods to install tensorflow and here's the one that worked.
```
conda install anaconda=2022.05
conda create -n tf tensorflow
conda activate tf
```

## Monospace font on m1 mac
I use Fira Code as my monospace font. I installed it using `brew tap homebrew/cask-fonts && brew install --cask font-fira-code`, followed by pasting the following lines in vscode settings.json:
```
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true,
```


## Notes

* NTFS formatted drives are not supported by the m1 mac. I had to format my external hard drive to FAT32 to be able to use it on my m1 mac.


## Links

- [multipass - Troubleshooting networking](https://multipass.run/docs/troubleshoot-networking#heading--troubleshoot-networking-on-macos)
- [multipass - Enable SSH](https://techsparx.com/linux/multipass/enable-ssh.html)
- [Alternative to multipass that I haven't tried yet](https://mac.getutm.app)
- [SSH between machines](https://btholt.github.io/complete-intro-to-linux-and-the-cli/ssh)