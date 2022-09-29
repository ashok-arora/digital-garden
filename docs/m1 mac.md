# Exploring m1 mac

## Installing ubuntu on m1 mac
Currently, I am using [multipass](https://multipass.run/install) to install ubuntu 20.04 on my m1 mac mini. 

### Connecting to ubuntu instance through SSH instance of multipass shell
This requires generating a SSH keypair on my host system and then copying the public key to the ubuntu instance. 


### Mounting the home directory to the ubuntu instance
This is done using `multipass mount $HOME docker` command. This mounts the home directory to the home directory in the ubuntu instance.

#### Minor bug with mounting
On macOS Monterey, the `mount` command does not give the correct permissions. Go to `System Preferences` -> `Security & Privacy` -> `Privacy` -> `Full Disk Access` and add `multipassd` to the list of applications. This should fix the issue.

## Links

- [multipass - Troubleshooting networking](https://multipass.run/docs/troubleshoot-networking#heading--troubleshoot-networking-on-macos)
- [multipass - Enable SSH](https://techsparx.com/linux/multipass/enable-ssh.html)
- [Alternative to multipass that I haven't tried yet](https://mac.getutm.app)
- [SSH between machines](https://btholt.github.io/complete-intro-to-linux-and-the-cli/ssh)